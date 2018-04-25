const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path')
const url = require('url')

const selenium = require('selenium-webdriver');
const keys = require('./config/keys');

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800,
                                  height: 600,
                                  frame: false,
                                  webPreferences: {
                                    nodeIntegration: false,
                                    preload: __dirname + '/preload.js'
                                  }})

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000")
  mainWindow.webContents.openDevTools();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('ping', () => {
  console.log("ping");
  mainWindow.webContents.send("pong");
  const driver = new selenium.Builder()
    .withCapabilities(selenium.Capabilities.chrome())
    .build();
  const By = require('selenium-webdriver').By
    driver.get("https://crm.irepair.gr/auth/login");

    driver.findElement(By.xpath('//*[@id="identity"]')).sendKeys(keys.userName);
    driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(keys.passWord);
    driver.findElement(By.className('btn')).click();
    driver.wait(selenium.until.elementLocated({className: 'close'}));
    driver.findElement(By.className('close')).click();

})
