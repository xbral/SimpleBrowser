import { BrowserWindow } from 'electron';
import userPreferences from './store';
import * as path from 'path';
import * as url from 'url';
const store = userPreferences.store;

function CreateWindow (): BrowserWindow {
  const win = new BrowserWindow({
    width: store.browserWindow.width,
    height: store.browserWindow.height,
    transparent: true,
    frame: false,
    titleBarStyle: store.browserWindow.titleBarStyle,
    alwaysOnTop: store.browserWindow.alwaysOnTop,
    // backgroundColor: 'none',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:4000');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  win.on('closed', () => {
    win.destroy();
  });

  return win;
}

export default CreateWindow;
