import { app, BrowserWindow } from 'electron';

const isDev = process.env.NODE_ENV === 'development';

app.on('ready', () => {
  let options: Electron.BrowserWindowConstructorOptions = {
    width: 1200,
    height: 800,
    webPreferences: { nodeIntegration: true }
  };

  if (!isDev) {
    options.resizable = false;
    options.backgroundColor = '#000000';
  }

  let win = new BrowserWindow(options);
  if (!isDev) {
    // tslint:disable-next-line: no-null-keyword
    win.setMenu(null);
  } else {
    win.webContents.openDevTools();
  }

  win.loadURL(isDev ? 'http://localhost:3001' : `file://${__dirname}/index.html`);
});
