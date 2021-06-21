import { BrowserWindow, globalShortcut } from 'electron';
import userPreferences from './store';
import * as path from 'path';
import * as url from 'url';
import CreateShortcuts from './createShortcuts';
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

  win.removeMenu();

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

  win.on('focus', () => {
    CreateShortcuts(win);
  });

  win.on('blur', () => {
    globalShortcut.unregisterAll();
  });

  return win;
}

export default CreateWindow;
