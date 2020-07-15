import { app, BrowserWindow, Menu } from "electron";

let win;
const isDev = process.env.NODE_ENV === "development";

app.on("ready", () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const url = isDev
    ? "http://localhost:3000"
    : `file://${__dirname}/index.html`;
  win.loadURL(url);
  isDev && win.webContents.openDevTools();
});
