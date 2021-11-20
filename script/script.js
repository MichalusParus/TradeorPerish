function init() {
    shipPlayer = document.getElementById("player");
    profilPic = document.getElementById("foto");
    audioInit()
}
window.onload = init;


// START GAME END GAME

let gameTime = 0;
let inventoryStatus = 45;
let goldReserve = 1000;
let moraleLvl = 100;
let foodReserve = 15;
let rumReserve = 30;
let tabaccoReserve = 0;
let slavesReserve = 0;
let toolsReserve = 0;
let timberReserve = 0;
let gunsReserve = 0;
let textilReserve = 0;
let cottonReserve = 0;
let sugarReserve = 0;


function newGame() {
    document.getElementById("newgame").style.display="block";
    document.getElementById("controls").style.display="none";
    document.getElementById("infogame").style.display="none";
}
function controlsGame() {
    document.getElementById("controls").style.display="block";
    document.getElementById("newgame").style.display="none";
    document.getElementById("infogame").style.display="none";
}
function infoGame() {
    document.getElementById("controls").style.display="none";
    document.getElementById("newgame").style.display="none";
    document.getElementById("infogame").style.display="block";
}
function startGame(){
    setInterval(function() {gameNight()}, 12000);
    setInterval(function() {timeFlow(), foodEaten(), moraleDrop(), gameOver(), gameDay(), glovisConsumption(), oponaConsumption(), cordaConsumption(), castelioConsumption(), garnietConsumption(), carolinaConsumption()}, 24000);
    document.getElementById("start").style.display = "none"
    let gameName = document.getElementById("gamename").value;
    document.getElementById("name").innerText = gameName;
    document.getElementById("game").scrollTop = 800;
    if(document.getElementById("pic").checked === true){profilPic.style.background = "url(./src/foto.jpg)"; profilPic.style.backgroundSize = "cover";}
    if(document.getElementById("pic1").checked === true){profilPic.style.background = "url(./src/foto1.jpg)"; profilPic.style.backgroundSize = "cover";}
    if(document.getElementById("pic2").checked === true){profilPic.style.background = "url(./src/foto2.jpg)"; profilPic.style.backgroundSize = "cover";}
    if(document.getElementById("pic3").checked === true){profilPic.style.background = "url(./src/foto3.jpg)"; profilPic.style.backgroundSize = "cover";}
    if(document.getElementById("pic4").checked === true){profilPic.style.background = "url(./src/foto4.jpg)"; profilPic.style.backgroundSize = "cover";}
    if(document.getElementById("pic5").checked === true){profilPic.style.background = "url(./src/foto5.jpg)"; profilPic.style.backgroundSize = "cover";}
    economyStart();
    questStart();
    audioSea.play();
    glovisTradeExport();
    castelioTradeExport();
    garnietTradeExport();
    carolinaTradeExport();
}
function economyStart() {
    document.getElementById("boat1").style.animation = "empiretrade 144s infinite";
    document.getElementById("boat1").style.animationTimingFunction = "linear";
    document.getElementById("boat2").style.animation = "nativetrade 144s infinite";
    document.getElementById("boat2").style.animationTimingFunction = "linear";
    document.getElementById("boat3").style.animation = "hansatrade 144s infinite";
    document.getElementById("boat3").style.animationTimingFunction = "linear";
    document.getElementById("boat4").style.animation = "costatrade 144s infinite";
    document.getElementById("boat4").style.animationTimingFunction = "linear";
}
function timeFlow(){ 
    gameTime += 1;
    document.getElementById("score").innerHTML = gameTime;
}
function gameNight() {
    document.getElementById("nightmap").style.opacity = "1";
}
function gameDay() {
    document.getElementById("nightmap").style.opacity = "0";
}

function foodEaten() {
    foodReserve -= 1;
    document.getElementById("food").innerHTML = foodReserve;
}
function moraleDrop() {
    moraleLvl -= 10;
    document.getElementById("morale").innerHTML = moraleLvl;
}
function giveRum(){
    if (rumReserve >= 10) {
        rumReserve -= 10;
        inventoryStatus -= 10;
        moraleLvl += 30;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("morale").innerHTML = moraleLvl;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        rumDrink.play();
        setTimeout(function() {rumDrink.play()}, 1000);
    }
}
function giveTabacco(){
    if (tabaccoReserve >= 10) {
        tabaccoReserve -= 10;
        inventoryStatus -= 10;
        moraleLvl += 20;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("morale").innerHTML = moraleLvl;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        tabSmoke.play();
    }   
}
function giveSlaves(){
    if (slavesReserve >= 10) {
        slavesReserve -= 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        moraleLvl += 50;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("morale").innerHTML = moraleLvl;
        snuSnu1.play();
        snuSnu2.play();
        setTimeout(function() {snuSnu1.play()}, 6700);
    }
}
function gameOver() {
    if (foodReserve <= 0) {
        alert("gameover - You and your men starved to death")
    }
    if (moraleLvl <= 0) {
        alert("gameover - Your men rebelled and kill you")
    }
}

    









// AUDIO

function audioInit() {
    audioSea = document.getElementById("audiosea");
    audioSea.volume = 0.1;
    audioTown = document.getElementById("city");
    audioTown.volume = 0.2;
    dockbell = document.getElementById("bells");
    dockbell.volume = 0.2;
    drunkenS = document.getElementById("drunkensailor1");
    drunkenS.volume = 0.3;
    wellerman1 = document.getElementById("wellerman1");
    wellerman1.volume = 0.3;
    rumDrink = document.getElementById("rumaudio");
    tabSmoke = document.getElementById("tabaccoaudio");
    snuSnu1 = document.getElementById("snusnuaudio");
    snuSnu2 = document.getElementById("snusnuaudio2");
    log1 = document.getElementById("loga1");
    log2 = document.getElementById("loga2");
    log3 = document.getElementById("loga3");
    log4 = document.getElementById("loga4");
    log5 = document.getElementById("loga5");
    log6 = document.getElementById("loga6");
    log7 = document.getElementById("loga7");
    log8 = document.getElementById("loga8");
    log9 = document.getElementById("loga9");
    log10 = document.getElementById("loga10");
    log11 = document.getElementById("loga11");
    log12 = document.getElementById("loga12");
    log13 = document.getElementById("loga13");
    log14 = document.getElementById("loga14");
    log15 = document.getElementById("loga15");
    log16 = document.getElementById("loga16");
    log17 = document.getElementById("loga17");
    log18 = document.getElementById("loga18");
    log19 = document.getElementById("loga19");
    log20 = document.getElementById("loga20");
    log21 = document.getElementById("loga21");
    log22 = document.getElementById("loga22");
    log23 = document.getElementById("loga23");
    log24 = document.getElementById("loga24");
}

function audioMuted() {
    let audioMuted = document.querySelectorAll("audio");
    for (i = 0; i < audioMuted.length; i++) {
        audioMuted[i].muted = true;
        }
    document.getElementById("muted").style.display = "none";
    document.getElementById("audioon").style.display = "block";
}
function audioOn() {
    let audioMuted = document.querySelectorAll("audio");
    for (i = 0; i < audioMuted.length; i++) {
        audioMuted[i].muted = false;
        }
    document.getElementById("audioon").style.display = "none";
    document.getElementById("muted").style.display = "block";
}
function drunkenSailor() {
    drunkenS.play();
    wellerman1.pause();
}
function wellerman() {
    drunkenS.pause();
    wellerman1.play();
}









// PLAYER MOVEMENT

let keyPr = [false, false, false, false];

function keyPressed(e) {
    let key_code = e.which || e.keyCode;
    if (key_code == 65) {
        keyPr[0] = true;
    }
    if (key_code == 87) {
        keyPr[1] = true;
    }
    if (key_code == 68) {
        keyPr[2] = true;
    }
    if (key_code == 83) {
        keyPr[3] = true;
    }
    playerMovement()
}

function keyRelesed(e) {
    let key_code = e.which || e.keyCode;
    if (key_code == 65) {
        keyPr[0] = false;
    }
    if (key_code == 87) {
        keyPr[1] = false;
    }
    if (key_code == 68) {
        keyPr[2] = false;
    }
    if (key_code == 83) {
        keyPr[3] = false;
    }
    playerMovement()
}

function playerMovement(){
    let rect = shipPlayer.getBoundingClientRect();
    let gameMap = document.getElementById("game");
    let src = gameMap.scrollTop;
    if (keyPr[0] == true && keyPr[1] == false && keyPr[2] == false && keyPr[3] == false && rect.x > 345) {
        shipPlayer.style.left = parseInt(shipPlayer.style.left) - 5 + "px";
        shipPlayer.style.background = "url(./src/northwest.gif)";
        shipPlayer.style.backgroundSize = "cover"
        keyPr = [false, false, false, false]
    }
    if (keyPr[0] == true && keyPr[1] == true && keyPr[2] == false && keyPr[3] == false && rect.x > 345 && rect.y + src > 425) {
        shipPlayer.style.left = parseInt(shipPlayer.style.left) - 5 + "px";
        shipPlayer.style.top = parseInt(shipPlayer.style.top) - 5 + "px";
        shipPlayer.style.background = "url(./src/northwest.gif)";
        shipPlayer.style.backgroundSize = "cover"
    }
    if (keyPr[0] == false && keyPr[1] == true && keyPr[2] == false && keyPr[3] == false && rect.y + src > 425) {
        shipPlayer.style.top = parseInt(shipPlayer.style.top) - 5 + "px";
        shipPlayer.style.background = "url(./src/northwest.gif)";
        shipPlayer.style.backgroundSize = "cover"
    }
    if (keyPr[0] == false && keyPr[1] == true && keyPr[2] == true && keyPr[3] == false && rect.y + src > 425 && rect.x < 1257) {
        shipPlayer.style.top = parseInt(shipPlayer.style.top) - 5 + "px";
        shipPlayer.style.left = parseInt(shipPlayer.style.left) + 5 + "px";
        shipPlayer.style.background = "url(./src/northeast.gif)";
        shipPlayer.style.backgroundSize = "cover"
    }
    if (keyPr[0] == false && keyPr[1] == false && keyPr[2] == true && keyPr[3] == false && rect.x < 1270) {
        shipPlayer.style.left = parseInt(shipPlayer.style.left) + 5 + "px";
        shipPlayer.style.background = "url(./src/northeast.gif)";
        shipPlayer.style.backgroundSize = "cover"
    }
    if (keyPr[0] == false && keyPr[1] == false && keyPr[2] == true && keyPr[3] == true && rect.x < 1257 && rect.y + src < 2400) {
        shipPlayer.style.left = parseInt(shipPlayer.style.left) + 5 + "px";
        shipPlayer.style.top = parseInt(shipPlayer.style.top) + 5 + "px";
        shipPlayer.style.background = "url(./src/southeast.gif)";
        shipPlayer.style.backgroundSize = "cover"
    }
    if (keyPr[0] == false && keyPr[1] == false && keyPr[2] == false && keyPr[3] == true && rect.y + src < 2400) {
        shipPlayer.style.top = parseInt(shipPlayer.style.top) + 5 + "px";
        shipPlayer.style.background = "url(./src/southeast.gif)";
        shipPlayer.style.backgroundSize = "cover"
    }
    if (keyPr[0] == true && keyPr[1] == false && keyPr[2] == false && keyPr[3] == true && rect.y + src < 2400 && rect.x > 345) {
        shipPlayer.style.left = parseInt(shipPlayer.style.left) - 5 + "px";
        shipPlayer.style.top = parseInt(shipPlayer.style.top) + 5 + "px";
        shipPlayer.style.background = "url(./src/southwest.gif)";
        shipPlayer.style.backgroundSize = "cover"
    }
}










// TOWN MENU SCREEN

function menuHome() {
    document.getElementById("menuhome").style.display="block";
}
function menuHomeOff() {
    document.getElementById("menuhome").style.display="none";
}

function menuCaerGlovis() {
    document.getElementById("menucaerglovis").style.display="block";
    audioTown.play();
}
function menuCaerGlovisOff() {
    document.getElementById("menucaerglovis").style.display="none";
    audioTown.pause();
}

function menuOponaLuHana() {
    document.getElementById("menuoponaluhana").style.display="block";
    audioTown.play();
}
function menuOponaLuHanaOff() {
    document.getElementById("menuoponaluhana").style.display="none";
    audioTown.pause();
}

function menuLaCorda() {
    document.getElementById("menulacorda").style.display="block";
    audioTown.play();
}
function menuLaCordaOff() {
    document.getElementById("menulacorda").style.display="none";
    audioTown.pause();
}

function menuCastelio() {
    document.getElementById("menucastelio").style.display="block";
    audioTown.play();
}
function menuCastelioOff() {
    document.getElementById("menucastelio").style.display="none";
    audioTown.pause();
}

function menuGarniet() {
    document.getElementById("menugarniet").style.display="block";
    audioTown.play();
}
function menuGarnietOff() {
    document.getElementById("menugarniet").style.display="none";
    audioTown.pause();
}

function menuSaintCarolina() {
    document.getElementById("menusaintcarolina").style.display="block";
    audioTown.play();
}
function menuSaintCarolinaOff() {
    document.getElementById("menusaintcarolina").style.display="none";
    audioTown.pause();
}









// TOWN DOCKING

setInterval(function() {townDockingOff(), townDocking()}, 500);


function townDocking() {
    let shipPlayer = document.getElementById("player");
    let rect = shipPlayer.getBoundingClientRect();
    let gameMap = document.getElementById("game");
    let src = gameMap.scrollTop;
    if (rect.x > 1150 && rect.y + src > 1150 && rect.y + src < 1500) {
        document.getElementById("dockhome").style.display="block";
    }
    if (rect.x > 1100 && rect.y + src < 600) {
        document.getElementById("dockglovis").style.display="block";
    }
    if (rect.x < 550 && rect.y + src < 550) {
        document.getElementById("dockopona").style.display="block";
    }
    if (rect.x < 550 && rect.y + src > 900 && rect.y + src < 1250) {
        document.getElementById("dockcorda").style.display="block";
    }
    if (rect.x < 550 && rect.y + src > 1450 && rect.y + src < 1800) {
        document.getElementById("dockcastelio").style.display="block";
    }
    if (rect.x < 600 && rect.y + src > 2150) {
        document.getElementById("dockgarniet").style.display="block";
    }
    if (rect.x > 1100 && rect.y + src > 2150) {
        document.getElementById("dockcarolina").style.display="block";
    }
}
function townDockingOff() {
    let x = document.getElementsByClassName("dock");
    let i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    let shipPlayer = document.getElementById("player");
    shipPlayer.style.backgroundSize = "cover"
    shipPlayer.style.transition = "0s"
}
function homeDock(e) {
    shipPlayer.style.left = 1430 + "px";
    shipPlayer.style.top = 1200 + "px";
    shipPlayer.style.transition = "5s";
    document.getElementById("dockhome").style.zIndex = "-1";
    document.getElementById("dockhomeoff").style.zIndex = "4";
    document.getElementsByTagName("BODY")[0].onkeydown = "0";
    document.getElementById("homestorage").style.height = "auto";
    document.getElementById("lvldiv").style.display = "block";
    document.getElementById("qm5").style.opacity = "1";
    setTimeout(function() {
        document.getElementById("shiphomebig").style.left = 260 + "px";
        document.getElementById("shiphomebig").style.bottom = 10 + "px";
    }, 2000);   
}
function homeDockOff(e) {
    shipPlayer.style.left = 1300 + "px";
    shipPlayer.style.top = 1200 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockhomeoff").style.zIndex = "-1";
    document.getElementById("dockhome").style.zIndex = "4";
    document.getElementById("homestorage").style.height= 55 + "px";
    document.getElementById("lvldiv").style.display = "none";
    document.getElementById("shiphomebig").style.left = -150 + "px";
    document.getElementById("shiphomebig").style.bottom = -200 + "px";
    document.getElementById("qm5").style.opacity = "0";
    setTimeout(function() {
        document.getElementsByTagName("BODY")[0].onkeydown = keyPressed;
    }, 4000);  
    dockbell.play();
}
function glovisDock() {
    shipPlayer.style.left = 1325 + "px";
    shipPlayer.style.top = 255 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockglovis").style.zIndex = "-1";
    document.getElementById("dockglovisoff").style.zIndex = "4";
    document.getElementsByTagName("BODY")[0].onkeydown = "0";
    document.getElementById("glovismarket").style.height= "auto"
    document.getElementById("qm1").style.opacity = "1";
    document.getElementById("qm3").style.opacity = "1";
    setTimeout(function() {
        document.getElementById("shipglovisbig").style.left = 285 + "px";
        document.getElementById("shipglovisbig").style.bottom = 30 + "px";
    }, 2000);  
}
function glovisDockOff() {
    shipPlayer.style.left = 1200 + "px";
    shipPlayer.style.top = 400 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockglovisoff").style.zIndex = "-1";
    document.getElementById("dockglovis").style.zIndex = "4";
    document.getElementById("glovismarket").style.height= 55 + "px";
    document.getElementById("shipglovisbig").style.left = -150 + "px";
    document.getElementById("shipglovisbig").style.bottom = -200 + "px";
    document.getElementById("qm1").style.opacity = "0";
    document.getElementById("qm3").style.opacity = "0";
    setTimeout(function() {
        document.getElementsByTagName("BODY")[0].onkeydown = keyPressed;
    }, 4000); 
    dockbell.play();
}
function oponaDock() {
    shipPlayer.style.left = 400 + "px";
    shipPlayer.style.top = 245 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockopona").style.zIndex = "-1";
    document.getElementById("dockoponaoff").style.zIndex = "4";
    document.getElementById("oponamarket").style.height = "auto";
    document.getElementsByTagName("BODY")[0].onkeydown = "0";
    document.getElementById("qm5").style.opacity = "1";
    setTimeout(function() {
        document.getElementById("shipoponabig").style.left = 335 + "px";
        document.getElementById("shipoponabig").style.bottom = 30 + "px";
    }, 2000);  
}
function oponaDockOff() {
    shipPlayer.style.left = 500 + "px";
    shipPlayer.style.top = 400 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockoponaoff").style.zIndex = "-1";
    document.getElementById("dockopona").style.zIndex = "4";
    document.getElementById("oponamarket").style.height= 55 + "px";
    document.getElementById("shipoponabig").style.left = -150 + "px";
    document.getElementById("shipoponabig").style.bottom = -200 + "px";
    document.getElementById("qm5").style.opacity = "0";
    setTimeout(function() {
        document.getElementsByTagName("BODY")[0].onkeydown = keyPressed;
    }, 4000); 
    dockbell.play();
}
function cordaDock() {
    shipPlayer.style.left = 270 + "px";
    shipPlayer.style.top = 910 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockcorda").style.zIndex = "-1";
    document.getElementById("dockcordaoff").style.zIndex = "4";
    document.getElementsByTagName("BODY")[0].onkeydown = "keyRelesed(event)";
    document.getElementById("cordamarket").style.height= "auto";
    document.getElementById("qm4").style.opacity = "1";
    document.getElementById("qm6").style.opacity = "1";
    setTimeout(function() {
        document.getElementById("shipcordabig").style.left = 670 + "px";
        document.getElementById("shipcordabig").style.top = 70 + "px";
    }, 2000); 
}
function cordaDockOff() {
    shipPlayer.style.left = 350 + "px";
    shipPlayer.style.top = 980 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockcordaoff").style.zIndex = "-1";
    document.getElementById("dockcorda").style.zIndex = "4";
    document.getElementById("cordamarket").style.height= 55 + "px";
    document.getElementById("shipcordabig").style.left = 600 + "px";
    document.getElementById("shipcordabig").style.top = -200 + "px";
    document.getElementById("qm4").style.opacity = "0";
    document.getElementById("qm6").style.opacity = "0";
    setTimeout(function() {
        document.getElementsByTagName("BODY")[0].onkeydown = keyPressed;
    }, 4000); 
    dockbell.play();
}
function castelioDock() {
    shipPlayer.style.left = 265 + "px";
    shipPlayer.style.top = 1510 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockcastelio").style.zIndex = "-1";
    document.getElementById("dockcasteliooff").style.zIndex = "4";
    document.getElementsByTagName("BODY")[0].onkeydown = "keyRelesed(event)";
    document.getElementById("casteliomarket").style.height= "auto";
    document.getElementById("qm2").style.opacity = "1";
    setTimeout(function() {
        document.getElementById("shipcasteliobig").style.left = 640 + "px";
        document.getElementById("shipcasteliobig").style.top = 190 + "px";
    }, 2000); 
}
function castelioDockOff() {
    shipPlayer.style.left = 400 + "px";
    shipPlayer.style.top = 1500 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockcasteliooff").style.zIndex = "-1";
    document.getElementById("dockcastelio").style.zIndex = "4";
    document.getElementById("casteliomarket").style.height= 55 + "px";
    document.getElementById("shipcasteliobig").style.left = 700 + "px";
    document.getElementById("shipcasteliobig").style.top = -200 + "px";
    document.getElementById("qm2").style.opacity = "0";
    setTimeout(function() {
        document.getElementsByTagName("BODY")[0].onkeydown = keyPressed;
    }, 4000); 
    dockbell.play();
}
function garnietDock() {
    shipPlayer.style.left = 290 + "px";
    shipPlayer.style.top = 2370 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockgarniet").style.zIndex = "-1";
    document.getElementById("dockgarnietoff").style.zIndex = "4";
    document.getElementsByTagName("BODY")[0].onkeydown = "0";
    document.getElementById("garnietmarket").style.height= "auto"
    setTimeout(function() {
        document.getElementById("shipgarnietbig").style.left = 560 + "px";
        document.getElementById("shipgarnietbig").style.top = 20 + "px";
    }, 2000); 
}
function garnietDockOff() {
    shipPlayer.style.left = 400 + "px";
    shipPlayer.style.top = 2200 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockgarnietoff").style.zIndex = "-1";
    document.getElementById("dockgarniet").style.zIndex = "4";
    document.getElementById("garnietmarket").style.height= 55 + "px";
    document.getElementById("shipgarnietbig").style.left = 700 + "px";
    document.getElementById("shipgarnietbig").style.top = -200 + "px";
    setTimeout(function() {
        document.getElementsByTagName("BODY")[0].onkeydown = keyPressed;
    }, 4000); 
    dockbell.play();
}
function carolinaDock() {
    shipPlayer.style.left = 1420 + "px";
    shipPlayer.style.top = 2340 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockcarolina").style.zIndex = "-1";
    document.getElementById("dockcarolinaoff").style.zIndex = "4";
    document.getElementsByTagName("BODY")[0].onkeydown = "0";
    document.getElementById("carolinamarket").style.height= "auto"
    setTimeout(function() {
        document.getElementById("shipcarolinabig").style.left = 195 + "px";
        document.getElementById("shipcarolinabig").style.top = 55 + "px";
    }, 2000); 
}
function carolinaDockOff() {
    shipPlayer.style.left = 1250 + "px";
    shipPlayer.style.top = 2200 + "px";
    shipPlayer.style.transition = "8s"
    document.getElementById("dockcarolinaoff").style.zIndex = "-1";
    document.getElementById("dockcarolina").style.zIndex = "4";
    document.getElementById("carolinamarket").style.height= 55 + "px";
    document.getElementById("shipcarolinabig").style.left = 0 + "px";
    document.getElementById("shipcarolinabig").style.top = -200 + "px";
    setTimeout(function() {
        document.getElementsByTagName("BODY")[0].onkeydown = keyPressed;
    }, 4000); 
    dockbell.play();
}









// QUEST LINE

function questStart() {
    document.getElementById("game").scrollTop = 800;
    document.getElementsByTagName("BODY")[0].onkeydown = "0";
    shipPlayer.style.transition = "5s linear";
    shipPlayer.style.left = 1525 + "px";
    shipPlayer.style.top = 1000 + "px";
    document.getElementById("dockhome").style.opacity="0";
    document.getElementById("dockhomeoff").style.opacity="0";
    setTimeout(function() {
        shipPlayer.style.transition = "3s linear";
        shipPlayer.style.left = 1280 + "px";
        shipPlayer.style.top = 1000 + "px";
    }, 5000); 
    setTimeout(function() {
        shipPlayer.style.background = "url(./src/southeast.gif)";
        shipPlayer.style.backgroundSize = "cover"
        shipPlayer.style.transition = "top 3s linear";
        shipPlayer.style.left = 1280 + "px";
        shipPlayer.style.top = 1250 + "px";
    }, 8000); 
    setTimeout(function() {homeDock()}, 11000);
    setTimeout(function() {
        document.getElementById("dockhome").style.opacity="1", 
        document.getElementById("dockhomeoff").style.opacity="1",
        menuHome()}, 12900);
    setTimeout(function() {
        document.getElementById("firstman").style.opacity ="1";
        document.getElementById("firstman").style.top = 320 + "px";
        document.getElementById("firstman").style.left = 480 + "px";
        document.getElementById("firstman").style.transition = "top 4s linear, left 4s linear";
    }, 22500);
    setTimeout(function() {
        log1.play();
        document.getElementById("log1").style.display = "block";
    }, 26500);
}
function lvlUp1() {
    document.getElementById("homelvl1").style.opacity = "1";
    document.getElementById("log1").style.display = "none";
    setTimeout(function() {
        log2.play();
        log1.pause();
        document.getElementById("log2").style.display = "block";
        document.getElementById("lvl1info").style.opacity = "1";
        document.getElementById("lvl2").style.display = "block";
        document.getElementById("homeicon").style.background = "url(./src/homelvl1.png)";
    }, 4000);

}
function quest11() {
    log3.play();
    log2.pause();
    document.getElementById("log2").style.display = "none";
    document.getElementById("log3").style.display = "block";
    let homeName = document.getElementById("homename").value;
    document.getElementById("homenamemenu").innerText = homeName;
    document.getElementById("homenamemap").innerText = homeName;
}
function quest12() {
    log4.play();
    log3.pause();
    document.getElementById("log3").style.display = "none";
    document.getElementById("log4").style.display = "block";
}
function quest13() {
    log5.play();
    log4.pause();
    document.getElementById("log4").style.display = "none";
    document.getElementById("log5").style.display = "block";
}
function quest14() {
    log5.pause();
    document.getElementById("log5").style.display = "none";
    document.getElementById("firstman").style.opacity = "0";
    document.getElementById("qm1").style.display = "block";
    menuHomeOff();
    homeDockOff();
}
function quest20() {
    log6.play();
    document.getElementById("log6").style.display = "block";
    document.getElementById("qm1").style.display = "none";
}
function quest21() {
    log7.play();
    log6.pause();
    document.getElementById("log6").style.display = "none";
    document.getElementById("log7").style.display = "block";
}
function quest22() {
    log8.play();
    log7.pause();
    document.getElementById("log8").style.display = "block";
    document.getElementById("log7").style.display = "none";
}
function quest23() {
    log9.play();
    log8.pause();
    document.getElementById("log9").style.display = "block";
    document.getElementById("log8").style.display = "none";
}
function quest24() {
    log9.pause();
    document.getElementById("log9").style.display = "none";
    document.getElementById("qm2").style.display = "block";
}
function quest30() {
    log10.play();
    document.getElementById("log10").style.display = "block";
    document.getElementById("qm2").style.display = "none";
}
function quest31() {
        log11.play();
        log10.pause();  
        document.getElementById("log10").style.display = "none";
        document.getElementById("log11").style.display = "block";
}
function quest32() {
    if (goldReserve >= 400 && inventoryStatus <= 100) {
        goldReserve -= 400;
        rumReserve += 100;
        inventoryStatus += 100;
        document.getElementById("inventory").innerText = inventoryStatus;
        document.getElementById("rum").innerText = rumReserve;
        document.getElementById("gold").innerText = goldReserve.toFixed(1);
        log12.play();
        log11.pause();
        document.getElementById("log12").style.display = "block";
        document.getElementById("log11").style.display = "none";
    }
    if (goldReserve < 400) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 100) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
}
function quest33() {
    log12.pause();
    document.getElementById("log12").style.display = "none";
    document.getElementById("qm3").style.display = "block";
}
function quest40() {
    log13.play();
    document.getElementById("log13").style.display = "block";
    document.getElementById("qm3").style.display = "none";
}
function quest41() {
    if (rumReserve >= 100) {
        rumReserve -= 100;
        inventoryStatus -= 100;
        log14.play();
        log13.pause();
        document.getElementById("log14").style.display = "block";
        document.getElementById("log13").style.display = "none";
        document.getElementById("inventory").innerText = inventoryStatus;
        document.getElementById("rum").innerText = rumReserve;
    }
    if (rumReserve < 100) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}
function quest42() {
    rumReserve += 50;
    slavesReserve += 30;
    inventoryStatus += 80;
    log15.play();
    log14.pause();
    document.getElementById("log15").style.display = "block";
    document.getElementById("log14").style.display = "none";
    document.getElementById("inventory").innerText = inventoryStatus;
    document.getElementById("rum").innerText = rumReserve;
    document.getElementById("slaves").innerText = slavesReserve;
}
function quest43() {
    log15.pause();
    document.getElementById("log15").style.display = "none";
    document.getElementById("qm4").style.display = "block";
}
function quest50() {
    log16.play();
    document.getElementById("log16").style.display = "block";
    document.getElementById("qm4").style.display = "none";
}
function quest51() {
    log16.pause();
    log17.play();
    document.getElementById("log16").style.display = "none";
    document.getElementById("log17").style.display = "block";
}
function quest52() {
    if (slavesReserve >= 30) {
        goldReserve += 900;
        slavesReserve -= 30;
        inventoryStatus -= 30;
        log18.play();
        log17.pause();
        document.getElementById("log17").style.display = "none";
        document.getElementById("log18").style.display = "block";
        document.getElementById("slaves").innerText = slavesReserve;
        document.getElementById("inventory").innerText = inventoryStatus;
        document.getElementById("gold").innerText = goldReserve.toFixed(1);
    }
    if (slavesReserve < 30) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}
function quest53() {
    log19.play();
    log18.pause();
    document.getElementById("log18").style.display = "none";
    document.getElementById("log19").style.display = "block";
}
function quest54() {
    log19.pause();
    document.getElementById("log19").style.display = "none";
    document.getElementById("qm5").style.display = "block";
}
function quest60() {
    log20.play();
    document.getElementById("log20").style.display = "block";
    document.getElementById("qm5").style.display = "none"; 
} 
function quest61() {
    if (gunsReserve >= 100) {
        log21.play();
        log20.pause();
        gunsReserve -= 100
        inventoryStatus -= 100;
        document.getElementById("log21").style.display = "block";
        document.getElementById("log20").style.display = "none";
        document.getElementById("oponaquest").style.display = "block";  
        document.getElementById("guns").innerText = gunsReserve;
        document.getElementById("inventory").innerText = inventoryStatus;
    } 
    if (gunsReserve < 100) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
} 
function quest62() {
    log21.pause();
    document.getElementById("log21").style.display = "none";  
    document.getElementById("qm6").style.display = "block"; 
} 
function quest70() {
    log22.play();
    document.getElementById("log22").style.display = "block";
    document.getElementById("qm6").style.display = "none";    
}
function quest71() {
    if (slavesReserve >= 50) {
        slavesReserve -= 50;
        inventoryStatus -= 50;
        log22.pause();
        log23.play();
        document.getElementById("log22").style.display = "none";  
        document.getElementById("log23").style.display = "block"; 
        document.getElementById("slaves").innerText = slavesReserve;
        document.getElementById("inventory").innerText = inventoryStatus;
    }
    if (slavesReserve < 100) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}
function quest72() {
    log24.play();
    log23.pause();
    document.getElementById("log23").style.display = "none";
    document.getElementById("log24").style.display = "block";    
}
function quest73() {
    log24.pause();
    document.getElementById("log24").style.display = "none";   
}






// HOME TOWN LVL

let haveStorage = false;
let haveFarm = false;
let haveWoodcutter = false;


setInterval(function() {goldInfo()}, 1000);

function goldInfo() {
    let x = document.getElementsByClassName("goldinfo");
    let y = document.getElementsByClassName("timberinfo");
    let z = document.getElementsByClassName("toolsinfo");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = goldReserve.toFixed(1);
    }
    for (i = 0; i < y.length; i++) {
        y[i].innerHTML = timberReserve;
    }
    for (i = 0; i < z.length; i++) {
        z[i].innerHTML = toolsReserve;
    }    
}

function lvlUp2() {
    if (goldReserve > 500) {
    goldReserve -= 500;
    document.getElementById("homelvl1").style.opacity = "0";
    document.getElementById("homelvl2").style.opacity = "1";
    document.getElementById("lvl2").style.display = "none";
    document.getElementById("lvl3").style.display = "block";
    document.getElementById("buildwarehouse").style.display = "block";
    document.getElementById("lvl2info").style.opacity = "1";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("homeicon").style.background ="url(./src/homelvl2.png)";
    }
}
function lvlUp3() {
    if (goldReserve >= 800 && timberReserve >= 100 && toolsReserve >= 50  && haveStorage === true) {
    goldReserve -= 800;
    timberReserve -= 100;
    toolsReserve -= 50;
    inventoryStatus -= 150;
    document.getElementById("homelvl2").style.opacity = "0";
    document.getElementById("homelvl3").style.opacity = "1";
    document.getElementById("lvl3").style.display = "none";
    document.getElementById("lvl4").style.display = "block";
    document.getElementById("buildwoodcutter").style.display = "block";
    document.getElementById("buildfarm").style.display = "block";
    document.getElementById("lvl3info").style.opacity = "1";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("timber").innerHTML = timberReserve;
    document.getElementById("tools").innerHTML = toolsReserve;
    document.getElementById("homeicon").style.background ="url(./src/homelvl3.png)";
    document.getElementById("inventory").innerText = inventoryStatus;
    }
}
function lvlUp4() {
    if (goldReserve > 1500 && timberReserve >= 100 && toolsReserve >= 50 && haveFarm === true && haveWoodcutter === true) {
    goldReserve -= 1500;
    timberReserve -= 100;
    toolsReserve -= 50;
    inventoryStatus -= 150;
    document.getElementById("homelvl3").style.opacity = "0";
    document.getElementById("homelvl4").style.opacity = "1";
    document.getElementById("lvl4").style.display = "none";
    document.getElementById("lvl4info").style.opacity = "1";
    document.getElementById("warehouse").style.opacity = "0";
    document.getElementById("buildvillage").style.display = "block";
    document.getElementById("buildproduction").style.display = "block";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("timber").innerHTML = timberReserve;
    document.getElementById("tools").innerHTML = toolsReserve;
    document.getElementById("homeicon").style.background ="url(./src/Homelvl4.png)";
    document.getElementById("inventory").innerText = inventoryStatus;
    }
}
function buildWarehouse() {
    if (goldReserve >= 150 && timberReserve >= 50 && toolsReserve >= 20) {
    goldReserve -= 150;
    timberReserve -= 50;
    toolsReserve -= 20;
    inventoryStatus -= 70;
    haveStorage = true;
    document.getElementById("warehouse").style.opacity = "1";
    document.getElementById("buildwarehouse").style.display = "none";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("homestoragebuild").style.opacity="1";
    document.getElementById("timber").innerHTML = timberReserve;
    document.getElementById("tools").innerHTML = toolsReserve;
    document.getElementById("havestorage").innerHTML = 1;
    document.getElementById("inventory").innerText = inventoryStatus;
    }
}
function buildWoodCutter() {
    if (goldReserve > 400 && timberReserve >= 30 && toolsReserve >= 10) {
    goldReserve -= 400;
    timberReserve -= 30;
    toolsReserve -= 10;
    inventoryStatus -= 40;
    haveWoodcutter = true;
    document.getElementById("woodcutter").style.opacity = "1";
    document.getElementById("timbertip").style.opacity = "1";
    document.getElementById("timber").innerHTML = timberReserve;
    document.getElementById("tools").innerHTML = toolsReserve;
    document.getElementById("buildwoodcutter").style.display = "none";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("havewoodcutter").innerHTML = 1; 
    document.getElementById("inventory").innerText = inventoryStatus;
    setInterval(function() {
        timberHomeStock += 20;
        document.getElementById("timberhomestock").innerHTML = timberHomeStock; 
    }, 144000);
    }
}
function buildFarm() {
    if (goldReserve > 500 && timberReserve >= 30 && toolsReserve >= 10) {
    goldReserve -= 500;
    timberReserve -= 30;
    toolsReserve -= 10;
    inventoryStatus -= 40;
    haveFarm = true;
    document.getElementById("farma").style.opacity = "1";
    document.getElementById("foodtip").style.opacity = "1";
    document.getElementById("timber").innerHTML = timberReserve;
    document.getElementById("tools").innerHTML = toolsReserve;
    document.getElementById("buildfarm").style.display = "none";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("havefarm").innerHTML = 1;
    document.getElementById("inventory").innerText = inventoryStatus;
    setInterval(function() {
        foodHomeStock += 40;
        document.getElementById("foodhomestock").innerHTML = foodHomeStock; 
    }, 288000);
    }
}
function buildVillage() {
    if (goldReserve > 1000 && timberReserve >= 100 && toolsReserve >= 50) {
    goldReserve -= 1000;
    timberReserve -= 100;
    toolsReserve -= 50;
    inventoryStatus -= 150;
    document.getElementById("village").style.opacity = "1";
    document.getElementById("rumtip").style.opacity = "1";
    document.getElementById("buildvillage").style.display = "none";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("timber").innerHTML = timberReserve;
    document.getElementById("tools").innerHTML = toolsReserve;
    document.getElementById("inventory").innerText = inventoryStatus;
    setInterval(function() {
        if(sugarHomeStock > 20){
        rumHomeStock += 20;
        sugarHomeStock -= 20;
        document.getElementById("rumhomestock").innerHTML = rumHomeStock; 
        document.getElementById("sugarhomestock").innerHTML = sugarHomeStock; 
        }
        }, 144000);      
    }
}
function buildProduction() {
    if (goldReserve > 1000 && timberReserve >= 100 && toolsReserve >= 50) {
    goldReserve -= 1000;
    timberReserve -= 100;
    toolsReserve -= 50;
    inventoryStatus -= 150;
    document.getElementById("production").style.opacity = "1";
    document.getElementById("sugartip").style.opacity = "1";
    document.getElementById("buildproduction").style.display = "none";
    document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
    document.getElementById("timber").innerHTML = timberReserve;
    document.getElementById("tools").innerHTML = toolsReserve;
    document.getElementById("inventory").innerText = inventoryStatus;
    setInterval(function() {
        sugarHomeStock += 60;
        document.getElementById("sugarhomestock").innerHTML = sugarHomeStock; 
    }, 144000);
    }
}

