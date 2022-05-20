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
  clipboard,
} from "electron";
import fs from "fs";
import { download } from "electron-dl";
import { getAssetURL } from "electron-snowpack";
import path from "path";
import { getFilesFromPath, Web3Storage } from "web3.storage";
const child_process = require("child_process");

// import BodyParser from "body-parser";
// Move the mouse across the screen as a sine wave.

const exec = require("child_process").exec;
let paste = false;
// clipboard.writeText("Hello World!");

import express from "express";
import { json } from "body-parser";
var appExpress = express();
var expressWs = require("express-ws");

expressWs(appExpress);

appExpress.use(function (req, res, next) {
  console.log("middleware");
  req.testing = "testing";
  return next();
});

appExpress.get("/", function (req, res, next) {
  console.log("get route", req.testing);
  res.end();
});

appExpress.ws("/", function (ws, req) {
  ws.on("message", async function (msg) {
    // console.log("url: ", msg);
    const test = await msg;
    // console.log("test: ", test);

    if (test.includes("type")) {
      const jsonObject = JSON.parse(test);
      console.log(jsonObject.type);
      // console.log(jsonObject.message);

      if (jsonObject.type === "text") {
        await receiveTextFromApp(jsonObject.message);
      } else if (jsonObject.type === "image") {
        await base64ToNativeImage(jsonObject.message);
      }
    }
  });
  console.log("socket", req.testing);
});

async function receiveTextFromApp(msg) {
  // console.log("receiveTextFromApp", msg);
  clipboard.writeText(msg);
  const child = exec("node src/main/robotter.js", (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });
  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
  child.on("error", (err) => {
    console.log(`child process error: ${err}`);
  });
}

let imageNativeFrom64;
// Convert the base64 string to a nativeImage
async function base64ToNativeImage(msg) {
  // console.log(msg);
  const base64WithType = "data:image/png;base64," + msg;
  // const img = Base64ToImage(base64WithType);
  imageNativeFrom64 = await nativeImage.createFromDataURL(base64WithType);
  // console.log(imageNativeFrom64.toPNG());

  let downloadFolder = path.join(app.getPath("downloads"), "CopyCatSocket");
  let socketPath = path.join(downloadFolder, "socket.png");

  clipboard.writeImage(imageNativeFrom64);
  // clipboard.writeImage(nativeImage.createFromBuffer(imageNativeFrom64.toPNG()),"png");

  if (base64WithType.includes("/")) {
    const child = exec("node src/main/robotter.js", (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });

    child.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });
    child.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });
    child.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
    child.on("error", (err) => {
      console.log(`child process error: ${err}`);
    });
  }

  await fs.writeFile(
    socketPath,
    imageNativeFrom64.toPNG(),
    async function (error) {
      if (error) return console.log(error);
      console.log("Saved received to: " + socketPath);
    }
  );
}

appExpress.listen(8084, () => {
  console.log("listening on port 8084");
});

// const server = express();
// server.use(BodyParser.urlencoded({ extended: true }));
// const port = 3000;

// let text;
// let position = { x: 0, y: 0 };
// let isPasting = false;

// windowManager.requestAccessibility();

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

  // windowManager.init();
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

let getImage = "";

ipcMain.on("screenshot", async function (event, payload) {
  getImage = payload;
  await takeScreenshot();
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
    "--" +
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
        filename: filename + ".png",
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

let linkImage;
async function takeScreenshot() {
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
    "---" +
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
          linkImage = await uploadFile(snippedImage);
          return snipWindowImage;
        }
      });
    })
    .catch(console.error);
}

ipcMain.on("will-upload", async (event, payload) => {
  const fileToBeSent = await getFilesFromPath(payload);
  console.log("file to be sent in electron", fileToBeSent);
  const link = await uploadFile(fileToBeSent);
  console.log("uploading file");
  event.sender.send("linkOfFile", link);
  mainWindow.webContents.send("linkOfFile", link);
  console.log("link sent");
});

async function uploadFile(file) {
  try {
    const cid = await web3storageClient.put(file);
    console.log(
      `https://${cid}.ipfs.dweb.link/${file[0].name.split("/").pop()}`
    );
    const link = `https://${cid}.ipfs.dweb.link/${file[0].name
      .split("/")
      .pop()}`;

    if (getImage === "getImageLink") {
      snipWindow.webContents.send("screenshot-done", link);
      getImage = "";
    }
    return link;
  } catch (error) {
    console.log(error);
  }
}

function determineScreenShotSize() {
  const screenSize = screen.getDisplayMatching(snipWindow.getBounds()).size;
  return {
    width: screenSize.width,
    height: screenSize.height,
  };
}

ipcMain.on("socket-download", async (event, payload) => {
  // create a download folder if it doesn't exist
  const downloadFolder = path.join(app.getPath("downloads"), "CopyCatSocket");
  if (!fs.existsSync(downloadFolder)) {
    fs.mkdirSync(downloadFolder);
  }

  console.log("payload received: ", payload);

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
    "--" +
    currentHours +
    "-" +
    currentMinutes +
    "-" +
    currentSeconds;

  const filename = "CopyCat-Received-" + dateString;

  ipcMain.on("download-socket-link", async (event, payload) => {
    await download(snipWindow, payload.url, {
      filename: filename + ".png",
      directory: downloadFolder,
      onProgress: (progress) => {
        console.log(progress);
      },
    });
  });
});

// -- Express HTTP Server

// server.get("/position", (req, res) => {
//   if (isPasting) {
//     return;
//   }
//   if (!mainWindow.isFocused()) {
//     mainWindow.show();
//   }
//   const { width, height } = screen.getPrimaryDisplay().workAreaSize;
//   if (req.query.x && req.query.y) {
//     const x = (0.5 + parseFloat(req.query.x)) * width;
//     const y = (0.5 - parseFloat(req.query.y)) * height;
//     if (!isNaN(x) && !isNaN(y)) {
//       position.x = Math.round(x);
//       position.y = Math.round(y);
//       mainWindow.webContents.send("position", position);
//     }
//   }
//   res.send("k");
// });

// server.get("/screen", (req, res) => {
//   const img = takeScreenshot();
//   res.set("Content-Type", "image/jpeg");
//   res.write(img);
//   res.end();
//   console.log(img);
// });

// server.post("/text", (req, res) => {
//   text = req.body.text;
//   mainWindow.webContents.send("text", req.body);
//   res.send("k");
// });

// server.get("/paste", async (req, res) => {
//   console.log("paste");
//   isPasting = true;
//   if (!text) {
//     console.log("ignore paste");
//     isPasting = false;
//     return;
//   }
//   // Write to clipboard.
//   clipboard.writeText(text);
//   // Blur electron window.
//   mainWindow.hide();
//   // Select window at current position.
//   const windowActivated = activateWindowAt(position.x, position.y);
//   // Send paste keystrokes.
//   if (windowActivated) {
//     const script =
//       'tell application "System Events" to keystroke "v" using {command down}';
//     osascript.execute(script, (err, result, raw) => {
//       if (err) {
//         console.error(err);
//       }
//     });
//     console.log("combination sent");
//   } else {
//     console.log("no window at position");
//   }
//   // Clear text.
//   mainWindow.webContents.send("text", { text: "" });
//   // Resume
//   isPasting = false;
// });

// server.listen(port, () => console.log(`Listening at http://localhost:${port}`));

// function activateWindowAt(x, y) {
//   console.log("activate window at:", x, y);
//   const windows = windowManager.windows();
//   windows.forEach((element) => {
//     console.log(element);
//   });
//   for (const window of windows) {
//     const bounds = window.getBounds();
//     if (window.path.indexOf("electron") != -1) {
//       continue;
//     }
//     const isTaskBarMenu = bounds.y == 0 && bounds.height == 22;
//     if (isTaskBarMenu || !window.isVisible() || !window.isWindow()) {
//       continue;
//     }
//     console.log(window.path, bounds);
//     if (
//       x > bounds.x &&
//       y > bounds.y &&
//       x < bounds.x + bounds.width &&
//       y < bounds.y + bounds.height
//     ) {
//       console.log("got window:", window.path, window.getTitle());
//       window.focus();
//       return window;
//     }
//   }
//   return false;
// }

app.commandLine.appendSwitch("no-sandbox");
