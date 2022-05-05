import {
  app,
  BrowserWindow,
  Menu,
  Tray,
  nativeImage,
  ipcMain,
  dialog,
  shell,
  desktopCapturer,
  screen,
} from "electron";
import fs from "fs";
import { download } from "electron-dl";
import { getAssetURL } from "electron-snowpack";
import path from "path";
import os from "os";
import { getFilesFromPath, Web3Storage } from "web3.storage";
// try {
//   require("electron-reloader")(module);
// } catch {}

const token = process.env.WEB3_STORAGE_TOKEN;
const web3storageClient = new Web3Storage({ token });

let mainWindow: BrowserWindow | null | undefined;
let snipWindow: BrowserWindow | null | undefined;
let appIcon = null;
let iconPath = path.join(__dirname, "../../assets/copycat_head_remade-2.ico");
let exploreIcon = nativeImage.createFromPath(
  path.join(__dirname, "../../assets/images.png")
);
let aboutIcon = nativeImage.createFromPath(
  path.join(__dirname, "../../assets/info.png")
);
let teamIcon = nativeImage.createFromPath(
  path.join(__dirname, "../../assets/team.png")
);
let settingsIcon = nativeImage.createFromPath(
  path.join(__dirname, "../../assets/setting.png")
);
let profileIcon = nativeImage.createFromPath(
  path.join(__dirname, "../../assets/profile.png")
);
let exitIcon = nativeImage.createFromPath(
  path.join(__dirname, "../../assets/exit.png")
);
let cameraIcon = nativeImage.createFromPath(
  path.join(__dirname, "../../assets/camera.png")
);
let smallIcon = nativeImage.createFromPath(iconPath);
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

  window.loadURL(getAssetURL("index.html"));

  window.on("closed", (): void => {
    // clearInterval(interval);
    mainWindow.hide();
  });

  return window;
}

function createSnipWindow(): BrowserWindow {
  const window = new BrowserWindow({
    width: 800,
    height: 450,
    show: false,
    resizable: true,
    parent: mainWindow,
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

  window.loadURL(getAssetURL("index2.html"));

  window.on("closed", (): void => {
    // clearInterval(interval);
    snipWindow.hide();
  });

  return window;
}

// quit application when all windows are closed
app.on("window-all-closed", (): void => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== "darwin") {
    mainWindow.hide();
    snipWindow.hide();
  }
});

app.on("activate", (): void => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
    snipWindow = createSnipWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on("ready", (): void => {
  mainWindow = createMainWindow();
  snipWindow = createSnipWindow();
  createdSystemTray();
});

const createdSystemTray = (): void => {
  appIcon = new Tray(smallIcon);

  var contextMenu = Menu.buildFromTemplate([
    {
      icon: cameraIcon,
      label: `SnipTool`,
      click: function () {
        console.log("SnipTool");
        snipWindow.isVisible() ? snipWindow.hide() : snipWindow.show();
        // takeScreenshot();
      },
    },
    {
      icon: exploreIcon,
      label: `Explore`,
      click: function () {
        mainWindow.webContents.send("pageOpen", "Explore");
        mainWindow.show();
      },
    },
    {
      icon: profileIcon,
      label: "Profile",
      click: function () {
        mainWindow.webContents.send("pageOpen", "Profile");
        mainWindow.show();
      },
    },
    {
      icon: settingsIcon,
      label: "Settings",
      click: function () {
        mainWindow.webContents.send("pageOpen", "Settings");
        mainWindow.show();
      },
    },
    {
      icon: teamIcon,
      label: "Team",
      click: function () {
        mainWindow.webContents.send("pageOpen", "Team");
        mainWindow.show();
      },
    },
    {
      icon: aboutIcon,
      label: "About",
      click: function () {
        mainWindow.webContents.send("pageOpen", "About");
        mainWindow.show();
      },
    },
    {
      icon: exitIcon,
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

ipcMain.on("close-snip", function () {
  snipWindow.hide();
  // app.exit();
});

ipcMain.on("screenshot", function () {
  takeScreenshot();
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

function takeScreenshot() {
  snipWindow.hide();
  console.log("Gathering screens...");
  const thumbSize = determineScreenShotSize();
  const options = { types: ["screen", "window"], thumbnailSize: thumbSize };
  const downloadFolder = path.join(
    app.getPath("downloads"),
    "CopyCatScreenshots"
  );
  if (!fs.existsSync(downloadFolder)) {
    fs.mkdirSync(downloadFolder);
  }

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

  const filename = "CopyCat-ScreenShot-" + dateString;

  desktopCapturer
    .getSources(options)
    .then((sources) => {
      console.log("Sources received:" + sources.length);
      sources.forEach(async function (source) {
        const sourceName = source.name.toLowerCase();
        console.log(source.name);

        if (["entire screen", "screen 1"].includes(sourceName)) {
          const screenshotPath = path.join(downloadFolder, filename + ".png");
          // crop source.thumbnail to size and position of snipWindow
          const screenShotImage = source.thumbnail;

          const snipWindowRect = snipWindow.getBounds();
          const snipWindowImage = screenShotImage.crop({
            x: snipWindowRect.x,
            y: snipWindowRect.y,
            width: snipWindowRect.width,
            height: snipWindowRect.height,
          });

          // save full screenshot
          fs.writeFile(
            screenshotPath,
            snipWindowImage.toPNG(),
            function (error) {
              if (error) return console.log(error);
              console.log("Saved screenshot to: " + screenshotPath);
            }
          );

          const snippedImage = await getFilesFromPath(screenshotPath);

          const cid = await web3storageClient.put(snippedImage);
          console.log("CID: " + cid);

          // uploadFile(snippedImage, "image");
        }
      });
    })
    .catch(console.error);
}

function determineScreenShotSize() {
  const screenSize = screen.getDisplayMatching(snipWindow.getBounds()).size;
  return {
    width: screenSize.width,
    height: screenSize.height,
  };
}

let compressionOptions = {
  maxSizeMB: 1,
  useWebWorker: true,
};

app.commandLine.appendSwitch("no-sandbox");
