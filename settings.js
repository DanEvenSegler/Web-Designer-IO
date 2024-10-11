const { ipcRenderer } = require('electron');

ipcRenderer.send('gettheme');

function bodyisloaded() {
    ipcRenderer.send('gettheme');

    ipcRenderer.on('settheme', (event, theme) => {
        if (theme) {
            activedarktheme1();
        } else {
            activelighttheme1();
        }
    });
}

setInterval(() => {
    let height = document.getElementById('startscreencontent').clientHeight;
    document.getElementById('startscreen').style.marginTop = (height - 650 - 15) / 2 + "px";
}, 1);

setInterval(() => {
    let height = document.getElementById('marketplace').clientHeight;
    document.getElementById('marketplacecontent').style.marginTop = (height - 700 - 15) / 2 + "px";
}, 1);

function closestartdialog() {
    document.getElementById("startscreencontent").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("startscreencontent").style.display = "none";
    }, 200);
}

function OpenLastProject() {
    document.getElementById("startscreencontent").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("startscreencontent").style.display = "none";
        document.getElementById("content").style.visibility = "visible";
        //document.documentElement.style.setProperty('--content-display', "block");
    }, 200);
}

function showstartdialog() {
    document.getElementById("startscreencontent").style.display = "block";
    document.getElementById("startscreencontent").style.opacity = "1";
}

function showstartscreenuserinfo() {
    document.getElementById("startscreenuserinfopage").style.transform = "translate(0px, 0px)";
    document.getElementById("startscreennewprojectspage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenlastfilespage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenhelppage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreensettingspage").style.transform = "translate(0px, 100%)";
}

function showstartscreennewproject() {
    document.getElementById("startscreenuserinfopage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreennewprojectspage").style.transform = "translate(0px, 0px)";
    document.getElementById("startscreenlastfilespage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenhelppage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreensettingspage").style.transform = "translate(0px, 100%)";
}

function showstartscreenlastfiles() {
    document.getElementById("startscreenuserinfopage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreennewprojectspage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenlastfilespage").style.transform = "translate(0px, 0px)";
    document.getElementById("startscreenhelppage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreensettingspage").style.transform = "translate(0px, 100%)";
}

function showstartscreendocumentation() {
    document.getElementById("startscreenuserinfopage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreennewprojectspage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenlastfilespage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenhelppage").style.transform = "translate(0px, 0px)";
    document.getElementById("startscreensettingspage").style.transform = "translate(0px, 100%)";
}

function showstartscreensettings() {
    document.getElementById("startscreenuserinfopage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreennewprojectspage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenlastfilespage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreenhelppage").style.transform = "translate(0px, 100%)";
    document.getElementById("startscreensettingspage").style.transform = "translate(0px, 0px)";
}

function ResetAll() {
    ipcRenderer.send('resetall');
}

const win = remote.getCurrentWindow();

function CloseEditor() {
    win.close();
}

function MinimizeEditor() {
    win.minimize();
}

let maximized = false;
let height;
let width;

function MaximizeEditor() {
    if (!win.isMaximized()) {
        height = win.getSize().height;
        width = win.getSize().width;
        win.maximize();
        win.setResizable(false);
        document.getElementById("maindiv").style.borderRadius = "0";
        document.getElementById("navbar").style.borderRadius = "0";
        document.getElementById("startscreencontent").style.borderRadius = "0";
        document.getElementById("graybackgroundbanner").style.borderRadius = "0";
        document.getElementById("content").style.borderRadius = "0";
        document.getElementById("editorleftsidebar").style.borderRadius = "0";
        document.getElementById("editorrightsidebar").style.borderRadius = "0";
        maximized = true;
    } else {
        win.unmaximize();
        win.setResizable(true);
        document.getElementById("maindiv").style.borderRadius = "20px";
        document.getElementById("navbar").style.borderRadius = "20px 20px 0px 0px";
        document.getElementById("startscreencontent").style.borderRadius = "0px 0px 20px 20px";
        document.getElementById("graybackgroundbanner").style.borderRadius = "0px 0px 20px 20px";
        document.getElementById("content").style.borderRadius = "0px 0px 20px 20px";
        document.getElementById("editorleftsidebar").style.borderRadius = "0px 0px 0px 20px";
        document.getElementById("editorrightsidebar").style.borderRadius = "0px 0px 20px 0px";
        maximized = false;
        //win.restore();
    }
}

function SetFullscreen() {
    win.setFullScreenable(true);
    win.setFullScreen(true);
    win.setResizable(false);
    document.getElementById("maindiv").style.borderRadius = "0";
    document.getElementById("navbar").style.borderRadius = "0";
    document.getElementById("startscreencontent").style.borderRadius = "0";
    document.getElementById("graybackgroundbanner").style.borderRadius = "0";
    document.getElementById("graybackgroundbanner1").style.borderRadius = "0";
    document.getElementById("content").style.borderRadius = "0";
    document.getElementById("editorleftsidebar").style.borderRadius = "0";
    document.getElementById("editorrightsidebar").style.borderRadius = "0";
    document.getElementById("navbar").style.webkitAppRegion = "none";
}

function SetWindowScreen() {
    win.setFullScreen(false);
    win.unmaximize();
    win.setResizable(true);
    win.setFullScreenable(false);
    document.getElementById("navbar").style.webkitAppRegion = "drag";
    document.getElementById("maindiv").style.borderRadius = "20px";
    document.getElementById("navbar").style.borderRadius = "20px 20px 0px 0px";
    document.getElementById("startscreencontent").style.borderRadius = "0px 0px 20px 20px";
    document.getElementById("graybackgroundbanner").style.borderRadius = "0px 0px 20px 20px";
    document.getElementById("content").style.borderRadius = "0px 0px 20px 20px";
    document.getElementById("editorleftsidebar").style.borderRadius = "0px 0px 0px 20px";
    document.getElementById("editorrightsidebar").style.borderRadius = "0px 0px 20px 0px";
    document.getElementById("graybackgroundbanner1").style.borderRadius = "0px 0px 20px 20px";
}

function ShowElements() {
    document.getElementById("editorleftsidebarcontentelements").style.transform = "translate(0, 0)";
    document.getElementById("editorleftsidebarcontentplugins").style.transform = "translate(-100%, 0)";
    document.getElementById("BlocksButton").style.background = "var(--dropbuttondropdownhover)";
    document.getElementById("ElementsButton").style.background = "var(--page-background)";
}

function ShowPlugins() {
    document.getElementById("editorleftsidebarcontentelements").style.transform = "translate(-100%, 0)";
    document.getElementById("editorleftsidebarcontentplugins").style.transform = "translate(0, 0)";
    document.getElementById("BlocksButton").style.background = "var(--page-background)";
    document.getElementById("ElementsButton").style.background = "var(--dropbuttondropdownhover)";
}

function ShowCSS() {
    document.getElementById("editorrightsidebarcontentcss").style.transform = "translate(0, 0)";
    document.getElementById("editorrightsidebarcontentlogic").style.transform = "translate(100%, 0)";
    document.getElementById("CSSButton").style.background = "var(--dropbuttondropdownhover)";
    document.getElementById("LogicButton").style.background = "var(--page-background)";
}

function ShowLogic() {
    document.getElementById("editorrightsidebarcontentcss").style.transform = "translate(100%, 0)";
    document.getElementById("editorrightsidebarcontentlogic").style.transform = "translate(0, 0)";
    document.getElementById("LogicButton").style.background = "var(--dropbuttondropdownhover)";
    document.getElementById("CSSButton").style.background = "var(--page-background)";
}

function CreateVisuallScript() {
    var node = document.createElement("button");
    node.className = "createlogicbutton";
    node.innerText = "Visuelles Script Öffnen";
    document.getElementById('editorrightsidebarcontentlogic').appendChild(document.createElement("hr"));
    document.getElementById('editorrightsidebarcontentlogic').appendChild(node);
}

function ShowMarketplace() {
    document.getElementById("marketplace").style.display = "block";
    document.getElementById("marketplace").style.opacity = "1";
}

function HideMarketplace() {
    document.getElementById("marketplace").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("marketplace").style.display = "none";
    }, 200);
}

function ShowWebEditor() {
    document.getElementById("scripteditorwindow").style.display = "none";

    document.getElementById("EditorEdit").style.background = "var(--dropbuttondropdownhover)";
    document.getElementById("ScriptEdit").style.background = "var(--page-background)";
}

function ShowScriptEditor() {
    document.getElementById("scripteditorwindow").style.display = "block";

    document.getElementById("EditorEdit").style.background = "var(--page-background)";
    document.getElementById("ScriptEdit").style.background = "var(--dropbuttondropdownhover)";
}

//-----------------------------------

let contentitem;
let typeitem;
let textitem;

function drag(event, content, type, text) {
    event.dataTransfer.setData("text", event.target.id);
    contentitem = content;
    typeitem = type;
    textitem = text;
}

function drop(event) {
    event.preventDefault();
    g = document.createElement(typeitem);
    g.className = contentitem;
    g.innerText = textitem;
    event.target.appendChild(g);
}

function allowDrop(event) {
    event.preventDefault();
}

function ondragleavecopy(event) {}

function ondragendcopy(event) {}

function denyDrop(event) {
    event.stopPropagation();
}const { ipcRenderer } = require('electron');
let colorclicked = false;
let darkmode = true;

document.querySelector('body').addEventListener("load", startshowanimation());

function startshowanimation() {
    setTimeout(function() {
        document.getElementById("logoanima").classList.add("fadeOutLeft");
        setTimeout(function() {
            document.getElementById("logodiv").classList.add("fadeOutNone");
        }, 500);
        setTimeout(function() {
            document.getElementById("logodiv").style.display = "none";
        }, 1400);
    }, 1500);
}

document.getElementById("minimizebutton").addEventListener("click", function() {
    ipcRenderer.send('minimizestartwindow');
});

document.getElementById("closebutton").addEventListener("click", function() {
    window.close();
});

//ipcRenderer.on('asynchronous-reply', (event) => {
//    console.log("Hello From Main Process");
//});

document.getElementById("page1nextbutton").addEventListener("click", function() {
    document.getElementById("page1").style.transform = "translate(-100%, 0)";
    document.getElementById("page2").style.transform = "translate(0, 0)";
    document.getElementById("indicator1").classList.remove("indicatoractive");
    document.getElementById("indicator2").classList.add("indicatoractive");
});

document.getElementById("darkmode").addEventListener("mouseover", function() {
    if (colorclicked) {

    } else {
        document.documentElement.style.setProperty('--page-background', "#212121");
        document.documentElement.style.setProperty('--navbar-background', "#191919");
        document.documentElement.style.setProperty('--button-background', "#2E2E2E");
        document.documentElement.style.setProperty('--text-color', "white");
        document.documentElement.style.setProperty('--closebutton-background', "#212121");
        document.documentElement.style.setProperty('--buttonhover-background', "#3B3B3B");
        document.documentElement.style.setProperty('--svg-background', "#191919");
        document.documentElement.style.setProperty('--svg-images-background', "#0B58A8");
    }
});

document.getElementById("lightmode").addEventListener("mouseover", function() {
    if (colorclicked) {

    } else {
        document.documentElement.style.setProperty('--page-background', "#D9D9D9");
        document.documentElement.style.setProperty('--navbar-background', "#535353");
        document.documentElement.style.setProperty('--button-background', "#A8A8A8");
        document.documentElement.style.setProperty('--text-color', "black");
        document.documentElement.style.setProperty('--closebutton-background', "#A8A8A8");
        document.documentElement.style.setProperty('--buttonhover-background', "white");
        document.documentElement.style.setProperty('--svg-background', "white");
        document.documentElement.style.setProperty('--svg-images-background', "#127CEB");
    }
});

document.getElementById("page2backbutton").addEventListener("click", function() {
    document.getElementById("page1").style.transform = "translate(0, 0)";
    document.getElementById("page2").style.transform = "translate(100%, 0)";
    document.getElementById("indicator1").classList.add("indicatoractive");
    document.getElementById("indicator2").classList.remove("indicatoractive");
});

document.getElementById("darkmode").addEventListener("click", function() {
    colorclicked = true;
    document.getElementById("page2").style.transform = "translate(-100%, 0)";
    document.getElementById("page3").style.transform = "translate(0, 0)";
    document.getElementById("indicator2").classList.remove("indicatoractive");
    document.getElementById("indicator3").classList.add("indicatoractive");
    darkmode = true;
});

document.getElementById("lightmode").addEventListener("click", function() {
    colorclicked = true;
    document.getElementById("page2").style.transform = "translate(-100%, 0)";
    document.getElementById("page3").style.transform = "translate(0, 0)";
    document.getElementById("indicator2").classList.remove("indicatoractive");
    document.getElementById("indicator3").classList.add("indicatoractive");
    darkmode = false;
});

document.getElementById("page3backbutton").addEventListener("click", function() {
    colorclicked = false;
    document.getElementById("page2").style.transform = "translate(0, 0)";
    document.getElementById("page3").style.transform = "translate(100%, 0)";
    document.getElementById("indicator2").classList.add("indicatoractive");
    document.getElementById("indicator3").classList.remove("indicatoractive");
});

document.getElementById("trialtest").addEventListener("click", function() {
    document.getElementById("page3").style.transform = "translate(-100%, 0)";
    document.getElementById("page4").style.transform = "translate(0, 0)";
    document.getElementById("indicator4").classList.add("indicatoractive");
    document.getElementById("indicator3").classList.remove("indicatoractive");
});

document.getElementById("page4backbutton").addEventListener("click", function() {
    document.getElementById("page3").style.transform = "translate(0, 0)";
    document.getElementById("page4").style.transform = "translate(100%, 0)";
    document.getElementById("indicator3").classList.add("indicatoractive");
    document.getElementById("indicator4").classList.remove("indicatoractive");
});

document.getElementById("page4nextbutton").addEventListener("click", function() {
    document.getElementById("page6").style.transform = "translate(0, 0)";
    document.getElementById("page4").style.transform = "translate(-100%, 0)";
    document.getElementById("indicator5").classList.add("indicatoractive");
    document.getElementById("indicator4").classList.remove("indicatoractive");
});

document.getElementById("login").addEventListener("click", function() {
    document.getElementById("page3").style.transform = "translate(-100%, 0)";
    document.getElementById("page5").style.transform = "translate(0, 0)";
    document.getElementById("indicator4").classList.add("indicatoractive");
    document.getElementById("indicator3").classList.remove("indicatoractive");
});

document.getElementById("page5backbutton").addEventListener("click", function() {
    document.getElementById("page3").style.transform = "translate(0, 0)";
    document.getElementById("page5").style.transform = "translate(100%, 0)";
    document.getElementById("indicator3").classList.add("indicatoractive");
    document.getElementById("indicator4").classList.remove("indicatoractive");
});

document.getElementById("page5nextbutton").addEventListener("click", function() {
    document.getElementById("page5").style.transform = "translate(-100%, 0)";
    document.getElementById("page7").style.transform = "translate(0, 0)";
    document.getElementById("indicator5").classList.add("indicatoractive");
    document.getElementById("indicator4").classList.remove("indicatoractive");
});

document.getElementById("page6nextbutton").addEventListener("click", function() {
    ipcRenderer.send('loginfinished', darkmode);
});

document.getElementById("page7nextbutton").addEventListener("click", function() {
    ipcRenderer.send('loginfinished', darkmode);
});function activedarktheme() {
    document.documentElement.style.setProperty('--page-background', "#212121");
    document.documentElement.style.setProperty('--navbar-background', "#191919");
    document.documentElement.style.setProperty('--dropbutton-top-background', "#212121");
    document.documentElement.style.setProperty('--dropbutton-bottom-background', "#2E2E2E");
    document.documentElement.style.setProperty('--dropbuttonhover-top-background', "#212121");
    document.documentElement.style.setProperty('--text-color', "white");
    document.documentElement.style.setProperty('--closebutton-background', "#212121");
    document.documentElement.style.setProperty('--buttonhover-background', "#3B3B3B");
    document.documentElement.style.setProperty('--svg-background', "#191919");
    document.documentElement.style.setProperty('--dropbuttondropdownhover', "#3B3B3B");
    document.documentElement.style.setProperty('--svg-images-background', "#0B58A8");
    ipcRenderer.send('settheme', true);
};

function activelighttheme() {
    document.documentElement.style.setProperty('--page-background', "#D9D9D9");
    document.documentElement.style.setProperty('--navbar-background', "#535353");
    document.documentElement.style.setProperty('--dropbutton-top-background', "#A8A8A8");
    document.documentElement.style.setProperty('--dropbutton-bottom-background', "#A8A8A8");
    document.documentElement.style.setProperty('--dropbuttonhover-top-background', "#A8A8A8");
    document.documentElement.style.setProperty('--text-color', "black");
    document.documentElement.style.setProperty('--closebutton-background', "#A8A8A8");
    document.documentElement.style.setProperty('--buttonhover-background', "white");
    document.documentElement.style.setProperty('--svg-background', "white");
    document.documentElement.style.setProperty('--dropbuttondropdownhover', "white");
    document.documentElement.style.setProperty('--svg-images-background', "#127CEB");
    ipcRenderer.send('settheme', false);
};

function activedarktheme1() {
    document.documentElement.style.setProperty('--page-background', "#212121");
    document.documentElement.style.setProperty('--navbar-background', "#191919");
    document.documentElement.style.setProperty('--dropbutton-top-background', "#212121");
    document.documentElement.style.setProperty('--dropbutton-bottom-background', "#2E2E2E");
    document.documentElement.style.setProperty('--dropbuttonhover-top-background', "#212121");
    document.documentElement.style.setProperty('--text-color', "white");
    document.documentElement.style.setProperty('--closebutton-background', "#212121");
    document.documentElement.style.setProperty('--buttonhover-background', "#3B3B3B");
    document.documentElement.style.setProperty('--svg-background', "#191919");
    document.documentElement.style.setProperty('--dropbuttondropdownhover', "#3B3B3B");
    document.documentElement.style.setProperty('--svg-images-background', "#0B58A8");
};

function activelighttheme1() {
    document.documentElement.style.setProperty('--page-background', "#D9D9D9");
    document.documentElement.style.setProperty('--navbar-background', "#535353");
    document.documentElement.style.setProperty('--dropbutton-top-background', "#A8A8A8");
    document.documentElement.style.setProperty('--dropbutton-bottom-background', "#A8A8A8");
    document.documentElement.style.setProperty('--dropbuttonhover-top-background', "#A8A8A8");
    document.documentElement.style.setProperty('--text-color', "black");
    document.documentElement.style.setProperty('--closebutton-background', "#A8A8A8");
    document.documentElement.style.setProperty('--buttonhover-background', "white");
    document.documentElement.style.setProperty('--svg-background', "white");
    document.documentElement.style.setProperty('--dropbuttondropdownhover', "white");
    document.documentElement.style.setProperty('--svg-images-background', "#127CEB");
}