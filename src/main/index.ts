import { app, BrowserWindow, Menu, Tray, nativeImage } from "electron";
import { getAssetURL } from "electron-snowpack";
import path from "path";

let mainWindow: BrowserWindow | null | undefined;
let appIcon = null;
let iconPath = path.join(__dirname, "../../src/assets/cat.ico");

let smallIcon = nativeImage.createFromPath(iconPath);
smallIcon.resize({ width: 16, height: 16 });

function createMainWindow(): BrowserWindow {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    frame: false,
  });
  window.setIcon(iconPath);
  if (process.env.MODE !== "production") {
    // window.webContents.openDevTools();
  }

  window.loadURL(getAssetURL("index.html"));

  window.on("closed", (): void => {
    mainWindow.hide();
  });

  window.webContents.on("devtools-opened", (): void => {
    window.focus();
    setImmediate((): void => {
      window.focus();
    });
  });

  return window;
}

// quit application when all windows are closed
app.on("window-all-closed", (): void => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== "darwin") {
    app.quit();
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
      label: "🖼 Gallery",
      click: function () {
        console.log("Gallery");
      },
    },
    {
      label: "Calibrate",
      click: function () {
        console.log("Calibrate coordinates");
      },
    },
    {
      label: "⚙️ Settings",
      click: function () {
        console.log("Settings");
      },
    },
    {
      label: "ℹ️ About",
      click: function () {
        console.log("About us");
      },
    },
    {
      label: "Quit",
      accelerator: "Command+Q",
      click: function () {
        app.quit();
      },
    },
  ]);
  appIcon.setToolTip("CopyCat");
  appIcon.setContextMenu(contextMenu);

  appIcon.on("click", () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
};

app.commandLine.appendSwitch("no-sandbox");
