import { globalShortcut, BrowserWindow } from 'electron';

function CreateShortcuts (win: BrowserWindow): void {
  function fullScreen () {
    win.isSimpleFullScreen()
      ? win.setSimpleFullScreen(false)
      : win.setSimpleFullScreen(true);
  }

  function openDevTools () {
    win.webContents.openDevTools();
  }

  function reload () {
    win.webContents.reload();
  }

  function close () {
    win.close();
  }

  globalShortcut.register('F11', fullScreen);
  globalShortcut.register('CmdOrCtrl+I', openDevTools);
  globalShortcut.register('F5', reload);
  globalShortcut.register('CmdOrCtrl+W', close);
}

export default CreateShortcuts;
