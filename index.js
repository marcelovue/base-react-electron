const {app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname)

app.on('ready', () => {
  const box = new BrowserWindow({
    title: 'Base react app',
    show: false
  })
  box.loadURL(`file://${__dirname}/public/index.html`)
  box.on('ready-to-show', () => {
    box.show()
  })
})
