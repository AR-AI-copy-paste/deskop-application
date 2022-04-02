import { app, BrowserWindow, Menu, Tray } from "electron";
import { getAssetURL } from "electron-snowpack";

let mainWindow: BrowserWindow | null | undefined;
let tray = null;

function createMainWindow(): BrowserWindow {
  const window = new BrowserWindow();

  if (process.env.MODE !== "production") {
    window.webContents.openDevTools();
  }

  window.loadURL(getAssetURL("index.html"));

  window.on("closed", (): void => {
    mainWindow = null;
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
});

app.whenReady().then(() => {
  tray = new Tray("./caticon.png");
  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" },
  ]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);
});

app.commandLine.appendSwitch("no-sandbox");
