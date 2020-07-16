import { app, BrowserWindow } from 'electron';

const isDev = process.env.NODE_ENV === 'development';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1238,
    height: 1000,
    webPreferences: { nodeIntegration: true }
  });

  const url = isDev ? 'http://localhost:3000' : `file://${__dirname}/index.html`;

  win.loadURL(url);
  isDev && win.webContents.openDevTools();
});
