const {
    app,
    BrowserWindow,
    ipcMain,
    globalShortcut
} = require('electron');
const path = require('path');
const Store = require('electron-store');
const store = new Store();

if (store.has('issetupfinished')) {} else {
    store.set('issetupfinished', false);
    store.set('isdarkmode', true);
}


let startWindow;
let EditorWindow;

function createWindow() {
    startWindow = new BrowserWindow({
        width: 700,
        height: 500,
        frame: false,
        resizable: false,
        transparent: true,
        icon: path.join(__dirname, 'img/SingleLogo.png'),
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, 'startpreload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    startWindow.loadFile('html/start.html');

    //startWindow.webContents.on("devtools-opened", function() {
    //    startWindow.webContents.closeDevTools();
    //});
}

ipcMain.on('loginfinished', (event, darkmode) => {
    console.log(darkmode);
    startWindow.hide();
    store.set('issetupfinished', true);
    store.set('isdarkmode', darkmode);

    createEditorWindow();

});

function createEditorWindow() {
    EditorWindow = new BrowserWindow({
        width: 1550,
        height: 900,
        minHeight: 900,
        minWidth: 1550,
        frame: false,
        resizable: true,
        transparent: true,
        setresizable: true,
        icon: path.join(__dirname, 'img/SingleLogo.png'),
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, 'startpreload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    EditorWindow.loadFile('html/editor.html');
    EditorWindow.focus();

    //startWindow.webContents.on("devtools-opened", function() {
    //    startWindow.webContents.closeDevTools();
    //});

    startWindow.close();
}

ipcMain.on('resetall', (event) => {
    store.set('issetupfinished', false);
    store.set('isdarkmode', true);
    EditorWindow.close();
});

ipcMain.on('gettheme', (event) => {
    event.reply('settheme', store.get('isdarkmode'));
})

ipcMain.on('settheme', (event, isdark) => {
    store.set('isdarkmode', isdark);
})

app.whenReady().then(() => {
    if (store.get('issetupfinished')) {
        createEditorWindow();
    } else {
        createWindow();
    }

    //app.on('activate', function() {
    //    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    //});
});

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('minimizestartwindow', (event) => {
    startWindow.minimize();
});