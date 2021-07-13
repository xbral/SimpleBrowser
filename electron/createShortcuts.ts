import { globalShortcut, BrowserWindow } from 'electron';

function CreateShortcuts (win: BrowserWindow): void {
  function fullScreen () {
    win.isSimpleFullScreen()
      ? win.setSimpleFullScreen(false)
      : win.setSimpleFullScreen(true);
  }

  function openDevTools () {
    win.webContents.executeJavaScript(`
      const webview = document.querySelector('webview');
      if(webview.isDevToolsOpened()) {
        webview.closeDevTools();
      } else {
        webview.openDevTools();
      }
    `);
  }

  function reload () {
    win.webContents.reload();
  }

  function close () {
    globalShortcut.unregisterAll();
    win.close();
  }

  globalShortcut.register('F11', fullScreen);
  globalShortcut.register('CmdOrCtrl+I', openDevTools);
  globalShortcut.register('CmdOrCtrl+R', reload);
  globalShortcut.register('F5', reload);
  globalShortcut.register('CmdOrCtrl+W', close);
}

export default CreateShortcuts;
