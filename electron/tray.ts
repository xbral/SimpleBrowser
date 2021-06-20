import { Tray as ElectronTray, Menu } from 'electron';
import userPreferences from './store';
import path from 'path';

function Tray (): ElectronTray {
  const trayIcon = path.resolve(__dirname, '..', 'assets', 'webview-icon.png');

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Simple Webview',
      icon: trayIcon,
      enabled: false
    },
    {
      label: 'Settings',
      click () {
        return userPreferences.openInEditor();
      }
    },
    {
      type: 'separator'
    },
    {
      type: 'normal',
      label: 'Close',
      role: 'quit',
      enabled: true
    }
  ]);

  const mainTray = new ElectronTray(trayIcon);
  mainTray.setContextMenu(contextMenu);
  mainTray.on('click', () => mainTray.popUpContextMenu());
  return mainTray;
}

export default Tray;
