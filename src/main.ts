import { app, BrowserWindow } from 'electron';

const IsDev = process.env.NODE_ENV === 'development';

app.on('ready', () => {
  let options: Electron.BrowserWindowConstructorOptions = {
    width: 1200,
    height: 800,
    webPreferences: { nodeIntegration: true }
  };

  if (!IsDev) {
    options.resizable = false;
    options.backgroundColor = '#000000';
  }

  let win = new BrowserWindow(options);
  if (!IsDev) {
    // eslint-disable-next-line no-null/no-null
    win.setMenu(null);
  } else {
    win.webContents.openDevTools();
  }

  win.loadURL(IsDev ? 'http://localhost:3001' : `file://${__dirname}/index.html`);
});
