import {
  app,
  BrowserWindow,
  Menu,
  Tray,
  nativeImage,
  ipcMain,
  dialog,
  shell,
} from "electron";
import { download } from "electron-dl";
import { getAssetURL } from "electron-snowpack";
import path from "path";
try {
  require("electron-reloader")(module);
} catch {}

let mainWindow: BrowserWindow | null | undefined;
let appIcon = null;
let interval;
let iconPath = path.join(__dirname, "../../assets/copycat_icon.ico");

let smallIcon = nativeImage.createFromPath(iconPath);
smallIcon.resize({ width: 16, height: 16 });

function createMainWindow(): BrowserWindow {
  const window = new BrowserWindow({
    width: 1300,
    height: 700,
    show: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    // frame: false,
    titleBarStyle: "hidden",
    // titleBarOverlay: {
    //   color: "#384151",
    //   symbolColor: "#f4f4f4",
    //   height: 30,
    // },
  });
  window.setIcon(iconPath);
  window.setTitle("CopyCat");

  if (process.env.MODE !== "production") {
    // window.webContents.openDevTools();
  }

  window.loadURL(getAssetURL("index.html"));

  window.on("closed", (): void => {
    // clearInterval(interval);
    mainWindow.hide();
  });

  window.webContents.on("devtools-opened", (): void => {
    window.focus();
    setImmediate((): void => {
      window.focus();
    });
  });

  // interval = setInterval(() => {
  //   const msg = new Date().toLocaleTimeString();
  //   mainWindow.webContents.send("TICK", msg);
  // }, 1000);
  return window;
}

// quit application when all windows are closed
app.on("window-all-closed", (): void => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== "darwin") {
    mainWindow.hide();
  }
});

app.on("activate", (): void => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on("ready", (): void => {
  mainWindow = createMainWindow();
  createdSystemTray();
});

const createdSystemTray = (): void => {
  appIcon = new Tray(iconPath);

  var contextMenu = Menu.buildFromTemplate([
    {
      label: "Explore",
      click: function () {
        mainWindow.webContents.send("pageOpen", "Explore");
        mainWindow.show();
      },
    },
    {
      label: "Profile",
      click: function () {
        mainWindow.webContents.send("pageOpen", "Profile");
        mainWindow.show();
      },
    },
    // {
    //   label: "Calibrate",
    //   click: function () {
    //     console.log("Calibrate coordinates");
    //   },
    // },
    {
      label: "⚙️ Settings",
      click: function () {
        mainWindow.webContents.send("pageOpen", "Settings");
        mainWindow.show();
      },
    },
    {
      label: "Team",
      click: function () {
        mainWindow.webContents.send("pageOpen", "Team");
        mainWindow.show();
      },
    },
    {
      label: "ℹ️ About",
      click: function () {
        mainWindow.webContents.send("pageOpen", "About");
        mainWindow.show();
      },
    },
    {
      label: "Exit",
      accelerator: "Command+Q",
      click: function () {
        app.exit();
      },
    },
  ]);
  appIcon.setToolTip("CopyCat");
  appIcon.setContextMenu(contextMenu);

  appIcon.on("click", () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
};

ipcMain.on("window-resize", (event, arg) => {
  console.log(arg);
  mainWindow.setResizable(true);
  mainWindow.setSize(arg.width, arg.height);
  mainWindow.setResizable(false);
});

ipcMain.on("will-navigate", function (e, url) {
  e.preventDefault();
  shell.openExternal(url);
});

ipcMain.on("close-window", function () {
  mainWindow.hide();
  // app.exit();
});

ipcMain.on("download", async (event, { payload }) => {
  const dialogs = dialog;
  let properties = payload.properties ? { ...payload.properties } : {};
  const defaultPath = app.getPath(
    properties.directory ? properties.directory : "Downloads"
  );
  const defaultFileName = properties.defaultFileName
    ? properties.defaultFileName
    : payload.url.split("?")[0].split("/").pop();
  let customURL = dialogs.showSaveDialogSync({
    defaultPath: `${defaultPath}/${defaultFileName}`,
  });

  if (customURL) {
    let filePath = customURL.split("/");
    let fileName = `${filePath.pop()}`;
    let directory = filePath.join("/");
    properties = { ...properties, directory, fileName };
    // mainWindow.webContents.downloadURL(payload.url);
    await download(BrowserWindow.getFocusedWindow(), payload.url, {
      ...properties,
      onProgress: (progress) => {
        mainWindow.webContents.send("download-progress", progress);
      },
      onCompleted: (item) => {
        mainWindow.webContents.send("download-completed", item);
      },
    });
  } else {
    console.log("No file selected");
    // Save Cancelled
  }
});

app.commandLine.appendSwitch("no-sandbox");
