// Main Process
// Entry Point
//  application's Life cycle
//  https://www.electronjs.org/docs/api/app#app
//  https://www.electronjs.org/docs/api/browser-window#browserwindow
const { app , BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })
  // https://www.electronjs.org/docs/api/browser-window#winloadurlurl-options
  mainWindow.loadFile('index.html')
};

// アプリケーションの初期化処理が起動した場合
// https://www.electronjs.org/docs/api/app#event-ready
app.whenReady().then(() => {
  createWindow()
  
  // macOSのライフサイクル
  // ドックからの呼び出しに発生
  // 他のOSだとすべてのウィンドウズが閉じられるとプロセスが落ちる。
  // https://www.electronjs.org/docs/api/app#event-activate-macos
  app.on('activate', function () {
    // https://www.electronjs.org/docs/api/browser-window#browserwindowgetallwindows
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

// すべてのウィンドウが閉じられた場合
// https://www.electronjs.org/docs/api/app#event-window-all-closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});
