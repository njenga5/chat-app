const { app, ipcMain, BrowserWindow } = require("electron");
// const path = require("path");

let win;
const createWindow = () => {
  win = new BrowserWindow({
    backgroundColor: "#292D3E",
    // minWidth:700,
    // minHeight:600,
    webPreferences: {
      // nodeIntegration: true,
    },
  });
  win.loadURL("http://localhost:3000");
    win.once("ready-to-show", () => {
    win.show();
  });
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
    // Ensure we don't have a window before we create one
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
