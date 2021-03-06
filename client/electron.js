'use strict'

const { app, BrowserWindow } = require('electron');

const createWindow = () =>{
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })
  win.loadUrl(isDev ? 'https://localhost:8080' : `file://${path.join(__dirname, './dist/index.html')}`)
  isDev ? win.webContents.openDevTools({ mode: 'detach' }) : null
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})