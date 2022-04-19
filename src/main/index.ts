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
import fs from "fs";
import { download } from "electron-dl";
import { getAssetURL } from "electron-snowpack";
import path from "path";
// try {
//   require("electron-reloader")(module);
// } catch {}

let mainWindow: BrowserWindow | null | undefined;
let appIcon = null;
let interval;
let iconPath = path.join(__dirname, "../../assets/copycat_icon.ico");

let smallIcon = nativeImage.createFromPath(iconPath);
smallIcon.resize({ width: 16, height: 16 });

function createMainWindow(): BrowserWindow {
  const window = new BrowserWindow({
    width: 1300,
    height: 820,
    show: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    frame: false,
    titleBarStyle: "hidden",
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

ipcMain.on("will-download", async (event, payload) => {
  // create a download folder if it doesn't exist
  const downloadFolder = path.join(app.getPath("downloads"), "CopyCat");
  if (!fs.existsSync(downloadFolder)) {
    fs.mkdirSync(downloadFolder);
  }

  console.log("will-download", payload);
  const result = await dialog.showMessageBox({
    type: "question",
    buttons: ["Yes", "No"],
    defaultId: 0,
    cancelId: 1,
    title: "Download",
    message: `Do you want to download this Image?`,
  });
  const currentDate = new Date();
  const currentDayofMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();
  const dateString =
    currentDayofMonth +
    "-" +
    (currentMonth + 1) +
    "-" +
    currentYear +
    " " +
    currentHours +
    "-" +
    currentMinutes +
    "-" +
    currentSeconds;

  const filename = "CopyCat-" + dateString;

  if (result.response === 0) {
    event.sender.send("download-accepted", payload);
    ipcMain.on("download", async (event, payload) => {
      await download(BrowserWindow.getFocusedWindow(), payload.url, {
        filename: filename + ".jpg",
        directory: downloadFolder,
        onProgress: (progress) => {
          console.log(progress);
        },
      });
    });
  } else {
    dialog.showMessageBox({
      type: "info",
      title: "Download Canceled",
      message: `The download was canceled`,
    });
  }
});

// mainWindow.webContents.session.on(
//   "will-download",
//   async (event, item, webContents) => {
//     const dialogs = dialog;
//     let customURL = dialogs.showSaveDialogSync({
//       title: "Save Your Image",
//       buttonLabel: "Save",
//       filters: [
//         {
//           name: "images",
//           extensions: ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"],
//         },
//         {
//           name: "All Files",
//           extensions: ["*"],
//         },
//       ],
//     });

//     if (customURL) {
//       item.setSavePath(customURL);
//       item.on("updated", (event, state) => {
//         if (state === "interrupted") {
//           console.log("Download is interrupted but can be resumed");
//         } else if (state === "progressing") {
//           if (item.isPaused()) {
//             console.log("Download is paused");
//           } else {
//             console.log(`Received bytes: ${item.getReceivedBytes()}`);
//           }
//         }
//       });
//       item.once("done", (event, state) => {
//         if (state === "completed") {
//           console.log("Download successfully");
//           shell.openPath(item.getSavePath());
//         } else {
//           console.log(`Download failed: ${state}`);
//         }
//       });
//     } else {
//       item.setSavePath("documents/downloads/" + item.getFilename());

//       item.on("updated", (event, state) => {
//         if (state === "interrupted") {
//           console.log("Download is interrupted but can be resumed");
//         } else if (state === "progressing") {
//           if (item.isPaused()) {
//             console.log("Download is paused");
//           } else {
//             console.log(`Received bytes: ${item.getReceivedBytes()}`);
//           }
//         }
//       });
//       item.once("done", (event, state) => {
//         if (state === "completed") {
//           console.log("Download successfully");
//         } else {
//           console.log(`Download failed: ${state}`);
//         }
//       });
//     }
//   }
// );
app.commandLine.appendSwitch("no-sandbox");
