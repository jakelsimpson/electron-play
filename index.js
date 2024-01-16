const {app, BrowserWindow, ipcMain, Notification} = require("electron");
const path = require('node:path');

const createWindow = () => {
    console.log(app.getVersion());
    app.setBadgeCount(9);

    const win = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
    ipcMain.handle("ping", () => "pong");
    ipcMain.handle("loggedit", () => {
        new Notification({
            title: "NOTIFICATION_TITLENEW",
            body: "NOTIFICATION_BODY stuff to see"
          }).show()
    });

    createWindow();

    app.on("activate",() => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    app.quit();
});