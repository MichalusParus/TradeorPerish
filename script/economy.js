// HOME STORAGE

let foodHomeStock = 0;
let rumHomeStock = 0;
let timberHomeStock = 0;
let toolsHomeStock = 0;
let textilHomeStock = 0;
let gunsHomeStock = 0;
let slavesHomeStock = 0;
let cottonHomeStock = 0;
let tabaccoHomeStock = 0;
let sugarHomeStock = 0;


function foodHomeTake() {
    if (foodHomeStock >= 10 && inventoryStatus <= 190){
        foodReserve += 10;
        foodHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("foodhomestock").innerHTML = foodHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(foodHomeStock < 10) {
        document.getElementById("foodhomestock").style.background = "red";
        setTimeout(function(){document.getElementById("foodhomestock").style.background = "transparent"}, 1000)
    }
}
function foodHomeGive() {
    if (foodReserve >= 10) {
        foodReserve -= 10;
        foodHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("foodhomestock").innerHTML = foodHomeStock;
    }
    if (foodReserve < 10) {
        document.getElementById("food").style.background = "red";
        setTimeout(function(){document.getElementById("food").style.background = "transparent"}, 1000)
    }
}
function rumHomeTake() {
    if (rumHomeStock >= 10 && inventoryStatus <= 190){
        rumReserve += 10;
        rumHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("rumhomestock").innerHTML = rumHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(rumHomeStock < 10) {
        document.getElementById("rumhomestock").style.background = "red";
        setTimeout(function(){document.getElementById("rumhomestock").style.background = "transparent"}, 1000)
    }
}
function rumHomeGive() {
    if (rumReserve >= 10) {
        rumReserve -= 10;
        rumHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("rumhomestock").innerHTML = rumHomeStock;
    }
    if (rumReserve < 10) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}
function timberHomeTake() {
    if (timberHomeStock >= 10 && inventoryStatus <= 190){
        timberReserve += 10;
        timberHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("timberhomestock").innerHTML = timberHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(timberHomeStock < 10) {
        document.getElementById("timberhomestock").style.background = "red";
        setTimeout(function(){document.getElementById("timberhomestock").style.background = "transparent"}, 1000)
    }
}
function timberHomeGive() {
    if (timberReserve >= 10) {
        timberReserve -= 10;
        timberHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("timberhomestock").innerHTML = timberHomeStock;
    }
    if (timberReserve < 10) {
        document.getElementById("timber").style.background = "red";
        setTimeout(function(){document.getElementById("timber").style.background = "transparent"}, 1000)
    }
}
function toolsHomeTake() {
    if (toolsHomeStock >= 10 && inventoryStatus <= 190){
        toolsReserve += 10;
        toolsHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("toolshomestock").innerHTML = toolsHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(toolsHomeStock < 10) {
        document.getElementById("toolshomestock").style.background = "red";
        setTimeout(function(){document.getElementById("toolshomestock").style.background = "transparent"}, 1000);
    }
}
function toolsHomeGive() {
    if (toolsReserve >= 10) {
        toolsReserve -= 10;
        toolsHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("toolshomestock").innerHTML = toolsHomeStock;
    }
    if (toolsReserve < 10) {
        document.getElementById("tools").style.background = "red";
        setTimeout(function(){document.getElementById("tools").style.background = "transparent"}, 1000)
    }
}
function textilHomeTake() {
    if (textilHomeStock >= 10 && inventoryStatus <= 190){
        textilReserve += 10;
        textilHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("textilhomestock").innerHTML = textilHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(textilHomeStock < 10) {
        document.getElementById("textilhomestock").style.background = "red";
        setTimeout(function(){document.getElementById("textilhomestock").style.background = "transparent"}, 1000)
    }
}
function textilHomeGive() {
    if (textilReserve >= 10) {
        textilReserve -= 10;
        textilHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("textilhomestock").innerHTML = textilHomeStock;
    }
    if (textilReserve < 10) {
        document.getElementById("textil").style.background = "red";
        setTimeout(function(){document.getElementById("textil").style.background = "transparent"}, 1000)
    }
}
function gunsHomeTake() {
    if (gunsHomeStock >= 10 && inventoryStatus <= 190){
        gunsReserve += 10;
        gunsHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gunshomestock").innerHTML = gunsHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(gunsHomeStock < 10) {
        document.getElementById("gunshomestock").style.background = "red";
        setTimeout(function(){document.getElementById("gunshomestock").style.background = "transparent"}, 1000)
    }
}
function gunsHomeGive() {
    if (gunsReserve >= 10) {
        gunsReserve -= 10;
        gunsHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gunshomestock").innerHTML = gunsHomeStock;
    }
    if (gunsReserve < 10) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
}
function slavesHomeTake() {
    if (slavesHomeStock >= 10 && inventoryStatus <= 190){
        slavesReserve += 10;
        slavesHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("slaveshomestock").innerHTML = slavesHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(slavesHomeStock < 10) {
        document.getElementById("slaveshomestock").style.background = "red";
        setTimeout(function(){document.getElementById("slaveshomestock").style.background = "transparent"}, 1000)
    }
}
function slavesHomeGive() {
    if (slavesReserve >= 10) {
        slavesReserve -= 10;
        slavesHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("slaveshomestock").innerHTML = slavesHomeStock;
    }
    if (slavesReserve < 10) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}
function cottonHomeTake() {
    if (cottonHomeStock >= 10 && inventoryStatus <= 190){
        cottonReserve += 10;
        cottonHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("cottonhomestock").innerHTML = cottonHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(cottonHomeStock < 10) {
        document.getElementById("cottonhomestock").style.background = "red";
        setTimeout(function(){document.getElementById("cottonhomestock").style.background = "transparent"}, 1000)
    }
}
function cottonHomeGive() {
    if (cottonReserve >= 10) {
        cottonReserve -= 10;
        cottonHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("cottonhomestock").innerHTML = cottonHomeStock;
    }
    if (cottonReserve < 10) {
        document.getElementById("cotton").style.background = "red";
        setTimeout(function(){document.getElementById("cotton").style.background = "transparent"}, 1000)
    }
}
function tabaccoHomeTake() {
    if (tabaccoHomeStock >= 10 && inventoryStatus <= 190){
        tabaccoReserve += 10;
        tabaccoHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("tabaccohomestock").innerHTML = tabaccoHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(tabaccoHomeStock < 10) {
        document.getElementById("tabaccohomestock").style.background = "red";
        setTimeout(function(){document.getElementById("tabaccohomestock").style.background = "transparent"}, 1000)
    }
}
function tabaccoHomeGive() {
    if (tabaccoReserve >= 10) {
        tabaccoReserve -= 10;
        tabaccoHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("tabaccohomestock").innerHTML = tabaccoHomeStock;
    }
    if (tabaccoReserve < 10) {
        document.getElementById("tabacco").style.background = "red";
        setTimeout(function(){document.getElementById("tabacco").style.background = "transparent"}, 1000)
    }
}
function sugarHomeTake() {
    if (sugarHomeStock >= 10 && inventoryStatus <= 190){
        sugarReserve += 10;
        sugarHomeStock -= 10;
        inventoryStatus += 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("sugarhomestock").innerHTML = sugarHomeStock;
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(sugarHomeStock < 10) {
        document.getElementById("sugarhomestock").style.background = "red";
        setTimeout(function(){document.getElementById("sugarhomestock").style.background = "transparent"}, 1000)
    }
}
function sugarHomeGive() {
    if (sugarReserve >= 10) {
        sugarReserve -= 10;
        sugarHomeStock += 10;
        inventoryStatus -= 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("sugarhomestock").innerHTML = sugarHomeStock;
    }
    if (sugarReserve < 10) {
        document.getElementById("sugar").style.background = "red";
        setTimeout(function(){document.getElementById("sugar").style.background = "transparent"}, 1000)
    }
}


// VARIABLE
// CAER GLOVIS

let foodGlovisStock = 2200;
let foodGlovisStockAvailable = foodGlovisStock - 1200;
let foodGlovisPrice = (1200 * 50)/ foodGlovisStock;
let foodGlovisPriceSell = (foodGlovisStock * foodGlovisPrice) / (foodGlovisStock + 10); 
let rumGlovisStock = 330;
let rumGlovisStockAvailable = rumGlovisStock - 300;
let rumGlovisPrice = (300 * 220)/ rumGlovisStock;
let rumGlovisPriceSell = (rumGlovisStock * rumGlovisPrice) / (rumGlovisStock + 10); 
let timberGlovisStock = 2200;
let timberGlovisStockAvailable = timberGlovisStock - 1200;
let timberGlovisPrice = (1200 * 60)/ timberGlovisStock;
let timberGlovisPriceSell = (timberGlovisStock * timberGlovisPrice) / (timberGlovisStock + 10); 
let toolsGlovisStock = 2200;
let toolsGlovisStockAvailable = toolsGlovisStock - 300;
let toolsGlovisPrice = (300 * 160)/ toolsGlovisStock;
let toolsGlovisPriceSell = (toolsGlovisStock * toolsGlovisPrice) / (toolsGlovisStock + 10); 
let textilGlovisStock = 100;
let textilGlovisStockAvailable = textilGlovisStock - 60;
let textilGlovisPrice = (60 * 500)/ textilGlovisStock;
let textilGlovisPriceSell = (textilGlovisStock * textilGlovisPrice) / (textilGlovisStock + 10);
let gunsGlovisStock = 100;
let gunsGlovisStockAvailable = gunsGlovisStock - 60;
let gunsGlovisPrice = (60 * 750)/ gunsGlovisStock;
let gunsGlovisPriceSell = (gunsGlovisStock * gunsGlovisPrice) / (gunsGlovisStock + 10);
let slavesGlovisStock = 100;
let slavesGlovisStockAvailable = slavesGlovisStock - 60;
let slavesGlovisPrice = (60 * 400)/ slavesGlovisStock;
let slavesGlovisPriceSell = (slavesGlovisStock * slavesGlovisPrice) / (slavesGlovisStock + 10);
let cottonGlovisStock = 30;
let cottonGlovisStockAvailable = cottonGlovisStock - 10;
let cottonGlovisPrice = (100 * 50)/ cottonGlovisStock;
let cottonGlovisPriceSell = (cottonGlovisStock * cottonGlovisPrice) / (cottonGlovisStock + 10);
let sugarGlovisStock = 30;
let sugarGlovisStockAvailable = sugarGlovisStock - 10;
let sugarGlovisPrice = (50 * 100)/ sugarGlovisStock;
let sugarGlovisPriceSell = (sugarGlovisStock * sugarGlovisPrice) / (sugarGlovisStock + 10);
let tabaccoGlovisStock = 30;
let tabaccoGlovisStockAvailable = tabaccoGlovisStock - 10;
let tabaccoGlovisPrice = (50 * 150)/ tabaccoGlovisStock;
let tabaccoGlovisPriceSell = (tabaccoGlovisStock * tabaccoGlovisPrice) / (tabaccoGlovisStock + 10); 


// VARIABLE
// OPONA-LU-HANA

let foodOponaStock = 440;
let foodOponaStockAvailable = foodOponaStock - 240;
let foodOponaPrice = (240 * 50)/ foodOponaStock;
let foodOponaPriceSell = (foodOponaStock * foodOponaPrice) / (foodOponaStock + 10); 
let rumOponaStock = 100;
let rumOponaStockAvailable = rumOponaStock - 60;
let rumOponaPrice = (60 * 250)/ rumOponaStock;
let rumOponaPriceSell = (rumOponaStock * rumOponaPrice) / (rumOponaStock + 10); 
let timberOponaStock = 440;
let timberOponaStockAvailable = timberOponaStock - 240;
let timberOponaPrice = (240 * 60)/ timberOponaStock;
let timberOponaPriceSell = (timberOponaStock * timberOponaPrice) / (timberOponaStock + 10); 
let toolsOponaStock = 100;
let toolsOponaStockAvailable = toolsOponaStock - 60;
let toolsOponaPrice = (60 * 250)/ toolsOponaStock;
let toolsOponaPriceSell = (toolsOponaStock * toolsOponaPrice) / (toolsOponaStock + 10); 
let textilOponaStock = 20;
let textilOponaStockAvailable = textilOponaStock - 12;
let textilOponaPrice = (12 * 700)/ textilOponaStock;
let textilOponaPriceSell = (textilOponaStock * textilOponaPrice) / (textilOponaStock + 10);
let gunsOponaStock = 20;
let gunsOponaStockAvailable = gunsOponaStock - 12;
let gunsOponaPrice = (12 * 750)/ gunsOponaStock;
let gunsOponaPriceSell = (gunsOponaStock * gunsOponaPrice) / (gunsOponaStock + 10);
let slavesOponaStock = 400;
let slavesOponaStockAvailable = slavesOponaStock - 12;
let slavesOponaPrice = (300 * 60)/ slavesOponaStock;
let slavesOponaPriceSell = (slavesOponaStock * slavesOponaPrice) / (slavesOponaStock + 10);
let cottonOponaStock = 30;
let cottonOponaStockAvailable = cottonOponaStock - 10;
let cottonOponaPrice = (100 * 50)/ cottonOponaStock;
let cottonOponaPriceSell = (cottonOponaStock * cottonOponaPrice) / (cottonOponaStock + 10);
let sugarOponaStock = 30;
let sugarOponaStockAvailable = sugarOponaStock - 10;
let sugarOponaPrice = (50 * 100)/ sugarOponaStock;
let sugarOponaPriceSell = (sugarOponaStock * sugarOponaPrice) / (sugarOponaStock + 10);
let tabaccoOponaStock = 610;
let tabaccoOponaStockAvailable = tabaccoOponaStock - 10;
let tabaccoOponaPrice = (1000 * 100)/ tabaccoOponaStock;
let tabaccoOponaPriceSell = (tabaccoOponaStock * tabaccoOponaPrice) / (tabaccoOponaStock + 10); 


// VARIABLE
// LA CORDA

let foodCordaStock = 1800;
let foodCordaStockAvailable = foodCordaStock - 960;
let foodCordaPrice = (960 * 50)/ foodCordaStock;
let foodCordaPriceSell = (foodCordaStock * foodCordaPrice) / (foodCordaStock + 10); 
let rumCordaStock = 2000;
let rumCordaStockAvailable = rumCordaStock - 240;
let rumCordaPrice = (240 * 200)/ rumCordaStock;
let rumCordaPriceSell = (rumCordaStock * rumCordaPrice) / (rumCordaStock + 10); 
let timberCordaStock = 1800;
let timberCordaStockAvailable = timberCordaStock - 960;
let timberCordaPrice = (960 * 60)/ timberCordaStock;
let timberCordaPriceSell = (timberCordaStock * timberCordaPrice) / (timberCordaStock + 10); 
let toolsCordaStock = 400;
let toolsCordaStockAvailable = toolsCordaStock - 240;
let toolsCordaPrice = (240 * 300)/ toolsCordaStock;
let toolsCordaPriceSell = (toolsCordaStock * toolsCordaPrice) / (toolsCordaStock + 10); 
let textilCordaStock = 90;
let textilCordaStockAvailable = textilCordaStock - 48;
let textilCordaPrice = (48 * 500)/ textilCordaStock;
let textilCordaPriceSell = (textilCordaStock * textilCordaPrice) / (textilCordaStock + 10);
let gunsCordaStock = 90;
let gunsCordaStockAvailable = gunsCordaStock - 48;
let gunsCordaPrice = (48 * 750)/ gunsCordaStock;
let gunsCordaPriceSell = (gunsCordaStock * gunsCordaPrice) / (gunsCordaStock + 10);
let slavesCordaStock = 280;
let slavesCordaStockAvailable = slavesCordaStock - 180;
let slavesCordaPrice = (180 * 500)/ slavesCordaStock;
let slavesCordaPriceSell = (slavesCordaStock * slavesCordaPrice) / (slavesCordaStock + 10);
let cottonCordaStock = 30;
let cottonCordaStockAvailable = cottonCordaStock - 10;
let cottonCordaPrice = (100 * 50)/ cottonCordaStock;
let cottonCordaPriceSell = (cottonCordaStock * cottonCordaPrice) / (cottonCordaStock + 10);
let sugarCordaStock = 1600;
let sugarCordaStockAvailable = sugarCordaStock - 10;
let sugarCordaPrice = (500 * 100)/ sugarCordaStock;
let sugarCordaPriceSell = (sugarCordaStock * sugarCordaPrice) / (sugarCordaStock + 10);
let tabaccoCordaStock = 30;
let tabaccoCordaStockAvailable = tabaccoCordaStock - 10;
let tabaccoCordaPrice = (50 * 150)/ tabaccoCordaStock;
let tabaccoCordaPriceSell = (tabaccoCordaStock * tabaccoCordaPrice) / (tabaccoCordaStock + 10);


// VARIABLE
// CASTELIO

let foodCastelioStock = 1400;
let foodCastelioStockAvailable = foodCastelioStock - 720;
let foodCastelioPrice = (720 * 50)/ foodCastelioStock;
let foodCastelioPriceSell = (foodCastelioStock * foodCastelioPrice) / (foodCastelioStock + 10); 
let rumCastelioStock = 400;
let rumCastelioStockAvailable = rumCastelioStock - 180;
let rumCastelioPrice = (180 * 180)/ rumCastelioStock;
let rumCastelioPriceSell = (rumCastelioStock * rumCastelioPrice) / (rumCastelioStock + 10); 
let timberCastelioStock = 1300;
let timberCastelioStockAvailable = timberCastelioStock - 720;
let timberCastelioPrice = (720 * 60)/ timberCastelioStock;
let timberCastelioPriceSell = (timberCastelioStock * timberCastelioPrice) / (timberCastelioStock + 10); 
let toolsCastelioStock = 350;
let toolsCastelioStockAvailable = toolsCastelioStock - 180;
let toolsCastelioPrice = (180 * 300)/ toolsCastelioStock;
let toolsCastelioPriceSell = (toolsCastelioStock * toolsCastelioPrice) / (toolsCastelioStock + 10); 
let textilCastelioStock = 70;
let textilCastelioStockAvailable = textilCastelioStock - 36;
let textilCastelioPrice = (36 * 500)/ textilCastelioStock;
let textilCastelioPriceSell = (textilCastelioStock * textilCastelioPrice) / (textilCastelioStock + 10);
let gunsCastelioStock = 420;
let gunsCastelioStockAvailable = gunsCastelioStock - 180;
let gunsCastelioPrice = (180 * 750)/ gunsCastelioStock;
let gunsCastelioPriceSell = (gunsCastelioStock * gunsCastelioPrice) / (gunsCastelioStock + 10);
let slavesCastelioStock = 70;
let slavesCastelioStockAvailable = slavesCastelioStock - 36;
let slavesCastelioPrice = (36 * 400)/ slavesCastelioStock;
let slavesCastelioPriceSell = (slavesCastelioStock * slavesCastelioPrice) / (slavesCastelioStock + 10);
let cottonCastelioStock = 1800;
let cottonCastelioStockAvailable = cottonCastelioStock - 10;
let cottonCastelioPrice = (1000 * 100)/ cottonCastelioStock;
let cottonCastelioPriceSell = (cottonCastelioStock * cottonCastelioPrice) / (cottonCastelioStock + 10);
let sugarCastelioStock = 100;
let sugarCastelioStockAvailable = sugarCastelioStock - 10;
let sugarCastelioPrice = (50 * 100)/ sugarCastelioStock;
let sugarCastelioPriceSell = (sugarCastelioStock * sugarCastelioPrice) / (sugarCastelioStock + 10);
let tabaccoCastelioStock = 30;
let tabaccoCastelioStockAvailable = tabaccoCastelioStock - 10;
let tabaccoCastelioPrice = (50 * 150)/ tabaccoCastelioStock;
let tabaccoCastelioPriceSell = (tabaccoCastelioStock * tabaccoCastelioPrice) / (tabaccoCastelioStock + 10); 


// VARIABLE
// GARNIET

let foodGarnietStock = 3000;
let foodGarnietStockAvailable = foodGarnietStock - 1680;
let foodGarnietPrice = (1680 * 50)/ foodGarnietStock;
let foodGarnietPriceSell = (foodGarnietStock * foodGarnietPrice) / (foodGarnietStock + 10); 
let rumGarnietStock = 700;
let rumGarnietStockAvailable = rumGarnietStock - 420;
let rumGarnietPrice = (420 * 220)/ rumGarnietStock;
let rumGarnietPriceSell = (rumGarnietStock * rumGarnietPrice) / (rumGarnietStock + 10); 
let timberGarnietStock = 3000;
let timberGarnietStockAvailable = timberGarnietStock - 1680;
let timberGarnietPrice = (1680 * 60)/ timberGarnietStock;
let timberGarnietPriceSell = (timberGarnietStock * timberGarnietPrice) / (timberGarnietStock + 10); 
let toolsGarnietStock = 800;
let toolsGarnietStockAvailable = toolsGarnietStock - 420;
let toolsGarnietPrice = (420 * 200)/ toolsGarnietStock;
let toolsGarnietPriceSell = (toolsGarnietStock * toolsGarnietPrice) / (toolsGarnietStock + 10); 
let textilGarnietStock = 160;
let textilGarnietStockAvailable = textilGarnietStock - 84;
let textilGarnietPrice = (84 * 500)/ textilGarnietStock;
let textilGarnietPriceSell = (textilGarnietStock * textilGarnietPrice) / (textilGarnietStock + 10);
let gunsGarnietStock = 750;
let gunsGarnietStockAvailable = gunsGarnietStock - 84;
let gunsGarnietPrice = (84 * 650)/ gunsGarnietStock;
let gunsGarnietPriceSell = (gunsGarnietStock * gunsGarnietPrice) / (gunsGarnietStock + 10);
let slavesGarnietStock = 160;
let slavesGarnietStockAvailable = slavesGarnietStock - 84;
let slavesGarnietPrice = (84 * 400)/ slavesGarnietStock;
let slavesGarnietPriceSell = (slavesGarnietStock * slavesGarnietPrice) / (slavesGarnietStock + 10);
let cottonGarnietStock = 30;
let cottonGarnietStockAvailable = cottonGarnietStock - 10;
let cottonGarnietPrice = (100 * 50)/ cottonGarnietStock;
let cottonGarnietPriceSell = (cottonGarnietStock * cottonGarnietPrice) / (cottonGarnietStock + 10);
let sugarGarnietStock = 30;
let sugarGarnietStockAvailable = sugarGarnietStock - 10;
let sugarGarnietPrice = (50 * 100)/ sugarGarnietStock;
let sugarGarnietPriceSell = (sugarGarnietStock * sugarGarnietPrice) / (sugarGarnietStock + 10);
let tabaccoGarnietStock = 30;
let tabaccoGarnietStockAvailable = tabaccoGarnietStock - 10;
let tabaccoGarnietPrice = (50 * 150)/ tabaccoGarnietStock;
let tabaccoGarnietPriceSell = (tabaccoGarnietStock * tabaccoGarnietPrice) / (tabaccoGarnietStock + 10); 



// VARIABLE
// SAINT CAROLINA

let foodCarolinaStock = 4200;
let foodCarolinaStockAvailable = foodCarolinaStock - 2400;
let foodCarolinaPrice = (2400 * 50)/ foodCarolinaStock;
let foodCarolinaPriceSell = (foodCarolinaStock * foodCarolinaPrice) / (foodCarolinaStock + 10); 
let rumCarolinaStock = 900;
let rumCarolinaStockAvailable = rumCarolinaStock - 600;
let rumCarolinaPrice = (600 * 220)/ rumCarolinaStock;
let rumCarolinaPriceSell = (rumCarolinaStock * rumCarolinaPrice) / (rumCarolinaStock + 10); 
let timberCarolinaStock = 4200;
let timberCarolinaStockAvailable = timberCarolinaStock - 2400;
let timberCarolinaPrice = (2400 * 60)/ timberCarolinaStock;
let timberCarolinaPriceSell = (timberCarolinaStock * timberCarolinaPrice) / (timberCarolinaStock + 10); 
let toolsCarolinaStock = 1100;
let toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
let toolsCarolinaPrice = (600 * 200)/ toolsCarolinaStock;
let toolsCarolinaPriceSell = (toolsCarolinaStock * toolsCarolinaPrice) / (toolsCarolinaStock + 10); 
let textilCarolinaStock = 700;
let textilCarolinaStockAvailable = textilCarolinaStock - 120;
let textilCarolinaPrice = (120 * 500)/ textilCarolinaStock;
let textilCarolinaPriceSell = (textilCarolinaStock * textilCarolinaPrice) / (textilCarolinaStock + 10);
let gunsCarolinaStock = 700;
let gunsCarolinaStockAvailable = gunsCarolinaStock - 120;
let gunsCarolinaPrice = (120 * 750)/ gunsCarolinaStock;
let gunsCarolinaPriceSell = (gunsCarolinaStock * gunsCarolinaPrice) / (gunsCarolinaStock + 10);
let slavesCarolinaStock = 700;
let slavesCarolinaStockAvailable = slavesCarolinaStock - 120;
let slavesCarolinaPrice = (120 * 400)/ slavesCarolinaStock;
let slavesCarolinaPriceSell = (slavesCarolinaStock * slavesCarolinaPrice) / (slavesCarolinaStock + 10);
let cottonCarolinaStock = 1000;
let cottonCarolinaStockAvailable = cottonCarolinaStock - 10;
let cottonCarolinaPrice = (500 * 750)/ cottonCarolinaStock;
let cottonCarolinaPriceSell = (cottonCarolinaStock * cottonCarolinaPrice) / (cottonCarolinaStock + 10);
let sugarCarolinaStock = 500;
let sugarCarolinaStockAvailable = sugarCarolinaStock - 10;
let sugarCarolinaPrice = (500 * 300)/ sugarCarolinaStock;
let sugarCarolinaPriceSell = (sugarCarolinaStock * sugarCarolinaPrice) / (sugarCarolinaStock + 10);
let tabaccoCarolinaStock = 600;
let tabaccoCarolinaStockAvailable = tabaccoCarolinaStock - 10;
let tabaccoCarolinaPrice = (1000 * 300)/ tabaccoCarolinaStock;
let tabaccoCarolinaPriceSell = (tabaccoCarolinaStock * tabaccoCarolinaPrice) / (tabaccoCarolinaStock + 10); 


// CAER GLOVIS
// CITY AI

setInterval(function() {priceGlovisActualization(),glovisStockAvailable()}, 1000);
setInterval(function() {glovisProduction(), glovisTradeExport()}, 144000);
setInterval(function() {glovisFoodProduction()}, 288000);

function glovisStockAvailable() {
    document.getElementById("foodglovisstock").innerHTML = foodGlovisStockAvailable;
    document.getElementById("rumglovisstock").innerHTML = rumGlovisStockAvailable;
    document.getElementById("timberglovisstock").innerHTML = timberGlovisStockAvailable;
    document.getElementById("toolsglovisstock").innerHTML = toolsGlovisStockAvailable;
    document.getElementById("textilglovisstock").innerHTML = textilGlovisStockAvailable;
    document.getElementById("gunsglovisstock").innerHTML = gunsGlovisStockAvailable;
    document.getElementById("slavesglovisstock").innerHTML = slavesGlovisStockAvailable;
    document.getElementById("cottonglovisstock").innerHTML = cottonGlovisStockAvailable;
    document.getElementById("tabaccoglovisstock").innerHTML = tabaccoGlovisStockAvailable;
    document.getElementById("sugarglovisstock").innerHTML = sugarGlovisStockAvailable;
    if(foodGlovisStock < 1200){
        foodGlovisStockAvailable = 0; 
        document.getElementById("foodglovisstock").innerHTML = 0
    }
    if(rumGlovisStock < 300){
        rumGlovisStockAvailable = 0; 
        document.getElementById("rumglovisstock").innerHTML = 0
    }
    if(timberGlovisStock < 1200){
        timberGlovisStockAvailable = 0; 
        document.getElementById("timberglovisstock").innerHTML = 0
    }
    if(toolsGlovisStock < 300){
        toolsGlovisStockAvailable = 0; 
        document.getElementById("toolsglovisstock").innerHTML = 0
    }
    if(textilGlovisStock < 60){
        textilGlovisStockAvailable = 0; 
        document.getElementById("textilglovisstock").innerHTML = 0
    }
    if(gunsGlovisStock < 60){
        gunsGlovisStockAvailable = 0; 
        document.getElementById("gunsglovisstock").innerHTML = 0
    }
    if(slavesGlovisStock < 60){
        slavesGlovisStockAvailable = 0; 
        document.getElementById("slavesglovisstock").innerHTML = 0
    }
    if(cottonGlovisStock < 10){
        cottonGlovisStockAvailable = 0; 
        document.getElementById("cottonglovisstock").innerHTML = 0
    }
    if(sugarGlovisStock < 10){
        sugarGlovisStockAvailable = 0; 
        document.getElementById("sugarglovisstock").innerHTML = 0
    }
    if(tabaccoGlovisStock < 10){
        tabaccoGlovisStockAvailable = 0; 
        document.getElementById("tabaccoglovisstock").innerHTML = 0
    }
}

function priceGlovisActualization(){
    foodGlovisPrice = (1200 * 50)/ foodGlovisStock;
    foodGlovisPriceSell = (foodGlovisStock * foodGlovisPrice) / (foodGlovisStock + 10);
    rumGlovisPrice = (300 * 220)/ rumGlovisStock;
    rumGlovisPriceSell = (rumGlovisStock * rumGlovisPrice) / (rumGlovisStock + 10); 
    timberGlovisPrice = (1200 * 60)/ timberGlovisStock;
    timberGlovisPriceSell = (timberGlovisStock * timberGlovisPrice) / (timberGlovisStock + 10);
    toolsGlovisPrice = (300 * 160)/ toolsGlovisStock;
    toolsGlovisPriceSell = (toolsGlovisStock * toolsGlovisPrice) / (toolsGlovisStock + 10);
    textilGlovisPrice = (60 * 500)/ textilGlovisStock;
    textilGlovisPriceSell = (textilGlovisStock * textilGlovisPrice) / (textilGlovisStock + 10);
    gunsGlovisPrice = (60 * 750)/ gunsGlovisStock;
    gunsGlovisPriceSell = (gunsGlovisStock * gunsGlovisPrice) / (gunsGlovisStock + 10);  
    slavesGlovisPrice = (60 * 400)/ slavesGlovisStock;
    slavesGlovisPriceSell = (slavesGlovisStock * slavesGlovisPrice) / (slavesGlovisStock + 10);
    cottonGlovisPrice = (100 * 50)/ cottonGlovisStock;
    cottonGlovisPriceSell = (cottonGlovisStock * cottonGlovisPrice) / (cottonGlovisStock + 10);
    sugarGlovisPrice = (50 * 100)/ sugarGlovisStock;
    sugarGlovisPriceSell = (sugarGlovisStock * sugarGlovisPrice) / (sugarGlovisStock + 10);
    tabaccoGlovisPrice = (50 * 150)/ tabaccoGlovisStock;
    tabaccoGlovisPriceSell = (tabaccoGlovisStock * tabaccoGlovisPrice) / (tabaccoGlovisStock + 10); 
    document.getElementById("foodglovisprice").innerHTML = foodGlovisPrice.toFixed(1);
    document.getElementById("foodglovispricesell").innerHTML = foodGlovisPriceSell.toFixed(1);
    document.getElementById("rumglovisprice").innerHTML = rumGlovisPrice.toFixed(1);
    document.getElementById("rumglovispricesell").innerHTML = rumGlovisPriceSell.toFixed(1);
    document.getElementById("timberglovisprice").innerHTML = timberGlovisPrice.toFixed(1);
    document.getElementById("timberglovispricesell").innerHTML = timberGlovisPriceSell.toFixed(1);
    document.getElementById("toolsglovisprice").innerHTML = toolsGlovisPrice.toFixed(1);
    document.getElementById("toolsglovispricesell").innerHTML = toolsGlovisPriceSell.toFixed(1);
    document.getElementById("textilglovisprice").innerHTML = textilGlovisPrice.toFixed(1);
    document.getElementById("textilglovispricesell").innerHTML = textilGlovisPriceSell.toFixed(1);
    document.getElementById("gunsglovisprice").innerHTML = gunsGlovisPrice.toFixed(1);
    document.getElementById("gunsglovispricesell").innerHTML = gunsGlovisPriceSell.toFixed(1);
    document.getElementById("slavesglovisprice").innerHTML = slavesGlovisPrice.toFixed(1);
    document.getElementById("slavesglovispricesell").innerHTML = slavesGlovisPriceSell.toFixed(1);
    document.getElementById("cottonglovisprice").innerHTML = cottonGlovisPrice.toFixed(1);
    document.getElementById("cottonglovispricesell").innerHTML = cottonGlovisPriceSell.toFixed(1);
    document.getElementById("tabaccoglovisprice").innerHTML = tabaccoGlovisPrice.toFixed(1);
    document.getElementById("tabaccoglovispricesell").innerHTML = tabaccoGlovisPriceSell.toFixed(1);
    document.getElementById("tabaccoglovisprice").innerHTML = tabaccoGlovisPrice.toFixed(1);
    document.getElementById("tabaccoglovispricesell").innerHTML = tabaccoGlovisPriceSell.toFixed(1);
    document.getElementById("sugarglovisprice").innerHTML = sugarGlovisPrice.toFixed(1);
    document.getElementById("sugarglovispricesell").innerHTML = sugarGlovisPriceSell.toFixed(1);
}

function glovisConsumption() {
    foodGlovisStock -= 100;
    foodGlovisStockAvailable = foodGlovisStock - 1200;
    document.getElementById("foodglovisstock").innerHTML = foodGlovisStockAvailable;
    rumGlovisStock -= 25;
    rumGlovisStockAvailable = rumGlovisStock - 300;
    document.getElementById("rumglovisstock").innerHTML = rumGlovisStockAvailable;
    timberGlovisStock -= 100;
    timberGlovisStockAvailable = timberGlovisStock - 1200;
    document.getElementById("timberglovisstock").innerHTML = timberGlovisStockAvailable;
    toolsGlovisStock -= 25;
    toolsGlovisStockAvailable = toolsGlovisStock - 300;
    document.getElementById("toolsglovisstock").innerHTML = toolsGlovisStockAvailable;
    textilGlovisStock -= 5;
    textilGlovisStockAvailable = textilGlovisStock - 60;
    document.getElementById("textilglovisstock").innerHTML = textilGlovisStockAvailable;
    gunsGlovisStock -= 5;
    gunsGlovisStockAvailable = gunsGlovisStock - 60;
    document.getElementById("gunsglovisstock").innerHTML = gunsGlovisStockAvailable;
    slavesGlovisStock -= 5;
    slavesGlovisStockAvailable = slavesGlovisStock - 60;
    document.getElementById("slavesglovisstock").innerHTML = slavesGlovisStockAvailable;
}
function glovisProduction() {
    timberGlovisStock += 780;
    timberGlovisStockAvailable = timberGlovisStock - 1200;
    document.getElementById("timberglovisstock").innerHTML = timberGlovisStockAvailable;
    toolsGlovisStock += 1100;
    toolsGlovisStockAvailable = toolsGlovisStock - 300;
    document.getElementById("toolsglovisstock").innerHTML = toolsGlovisStockAvailable;
    glovisOverflow()
}
function glovisFoodProduction() {
    foodGlovisStock += 1300;
    foodGlovisStockAvailable = foodGlovisStock - 1200;
    document.getElementById("foodglovisstock").innerHTML = foodGlovisStockAvailable;
}
function glovisTradeExport() {
    setTimeout(function() {
        toolsGlovisStock -= 500;
        toolsGlovisStockAvailable = toolsGlovisStock - 300;
        document.getElementById("toolsglovisstock").innerHTML = toolsGlovisStockAvailable;
    }, 3000);
    setTimeout(function() {
        toolsGarnietStock += 235;
        toolsGarnietStockAvailable = toolsGarnietStock - 420;
        document.getElementById("toolsgarnietstock").innerHTML = toolsGarnietStockAvailable;
    }, 40000);
    setTimeout(function() {
        toolsCarolinaStock += 265;
        toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
        document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStockAvailable;
        rumCarolinaStock -= 160;
        rumCarolinaStockAvailable = rumCarolinaStock - 600;
        document.getElementById("rumcarolinastock").innerHTML = rumCarolinaStockAvailable;
    }, 70000);
    setTimeout(function() {
        rumGlovisStock += 160;
        rumGlovisStockAvailable = rumGlovisStock - 300;
        document.getElementById("rumglovisstock").innerHTML = rumGlovisStockAvailable;
    }, 130000);
}
function glovisOverflow() {
    if (foodGlovisStock > 2000) {foodGlovisStock -= 600}
    if (rumGlovisStock > 1000) {rumGlovisStock -= 300}
    if (timberGlovisStock > 3000) {timberGlovisStock -= 600}
    if (toolsGlovisStock > 2000) {toolsGlovisStock -= 400}
    if (textilGlovisStock > 150) {textilGlovisStock -= 60}
    if (gunsGlovisStock > 150) {gunsGlovisStock -= 60}
    if (slavesGlovisStock > 150) {slavesGlovisStock -= 60}
    if (cottonGlovisStock > 100) {cottonGlovisStock -= 80}
    if (sugarGlovisStock > 100) {sugarGlovisStock -= 80}
    if (tabaccoGlovisStock > 100) {tabaccoGlovisStock -= 80}
}



// CAER GLOVIS
// Food

function foodGlovisBuy() {
    if (goldReserve >= foodGlovisPrice && foodGlovisStock > 1200 && inventoryStatus <= 190){
        goldReserve -= foodGlovisPrice;
        foodReserve += 10;
        foodGlovisStock -= 10;
        foodGlovisPrice = (1200 * 50)/ foodGlovisStock;
        foodGlovisPriceSell = (foodGlovisStock * foodGlovisPrice) / (foodGlovisStock + 10);
        inventoryStatus += 10;
        foodGlovisStockAvailable = foodGlovisStock - 1200;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodglovisstock").innerHTML = foodGlovisStockAvailable;
        document.getElementById("foodglovisprice").innerHTML = foodGlovisPrice.toFixed(1);
        document.getElementById("foodglovispricesell").innerHTML = foodGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < foodGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(foodGlovisStock <= 1200) {
        document.getElementById("foodglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("foodglovisstock").style.background = "transparent"}, 1000)
    }
}
function foodGlovisSell() {
    if (foodReserve > 10) {
        foodReserve -= 10;
        foodGlovisStock += 10;
        goldReserve += foodGlovisPriceSell;
        foodGlovisPrice = (1200 * 50)/ foodGlovisStock;
        foodGlovisPriceSell = (foodGlovisStock * foodGlovisPrice) / (foodGlovisStock + 10)  
        inventoryStatus -= 10;
        foodGlovisStockAvailable = foodGlovisStock - 1200;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodglovisstock").innerHTML = foodGlovisStockAvailable;
        document.getElementById("foodglovisprice").innerHTML = foodGlovisPrice.toFixed(1);
        document.getElementById("foodglovispricesell").innerHTML = foodGlovisPriceSell.toFixed(1);
    }
    if (foodReserve < 10) {
        document.getElementById("food").style.background = "red";
        setTimeout(function(){document.getElementById("food").style.background = "transparent"}, 1000)
    }
}



// CAER GLOVIS
//  Rum

function rumGlovisBuy() {
    if (goldReserve >= rumGlovisPrice && rumGlovisStock > 300 && inventoryStatus <= 190){
        goldReserve -= rumGlovisPrice;
        rumReserve += 10;
        rumGlovisStock -= 10;
        rumGlovisPrice = (300 * 220)/ rumGlovisStock;
        rumGlovisPriceSell = (rumGlovisStock * rumGlovisPrice) / (rumGlovisStock + 10);
        inventoryStatus += 10;
        rumGlovisStockAvailable = rumGlovisStock - 300;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumglovisstock").innerHTML = rumGlovisStockAvailable;
        document.getElementById("rumglovisprice").innerHTML = rumGlovisPrice.toFixed(1);
        document.getElementById("rumglovispricesell").innerHTML = rumGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < rumGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(rumGlovisStock <= 300) {
        document.getElementById("rumglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("rumglovisstock").style.background = "transparent"}, 1000)
    }
}
function rumGlovisSell() {
    if (rumReserve >= 10){
        rumReserve -= 10;
        rumGlovisStock += 10;
        goldReserve += rumGlovisPriceSell;
        rumGlovisPrice = (300 * 220)/ rumGlovisStock;
        rumGlovisPriceSell = (rumGlovisStock * rumGlovisPrice) / (rumGlovisStock + 10)  
        inventoryStatus -= 10;
        rumGlovisStockAvailable = rumGlovisStock - 300;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumglovisstock").innerHTML = rumGlovisStockAvailable;
        document.getElementById("rumglovisprice").innerHTML = rumGlovisPrice.toFixed(1);
        document.getElementById("rumglovispricesell").innerHTML = rumGlovisPriceSell.toFixed(1);
    }
    if (rumReserve < 10) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Timber

function timberGlovisBuy() {
    if (goldReserve >= timberGlovisPrice && timberGlovisStock > 1200 && inventoryStatus <= 190){
        goldReserve -= timberGlovisPrice;
        timberReserve += 10;
        timberGlovisStock -= 10;
        timberGlovisPrice = (1200 * 60)/ timberGlovisStock;
        timberGlovisPriceSell = (timberGlovisStock * timberGlovisPrice) / (timberGlovisStock + 10);
        inventoryStatus += 10;
        timberGlovisStockAvailable = timberGlovisStock - 1200;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timberglovisstock").innerHTML = timberGlovisStockAvailable;
        document.getElementById("timberglovisprice").innerHTML = timberGlovisPrice.toFixed(1);
        document.getElementById("timberglovispricesell").innerHTML = timberGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < timberGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(timberGlovisStock <= 1200) {
        document.getElementById("timberglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("timberglovisstock").style.background = "transparent"}, 1000)
    }
}
function timberGlovisSell() {
    if (timberReserve >= 10){
        timberReserve -= 10;
        timberGlovisStock += 10;
        goldReserve += timberGlovisPriceSell;
        timberGlovisPrice = (1200 * 60)/ timberGlovisStock;
        timberGlovisPriceSell = (timberGlovisStock * timberGlovisPrice) / (timberGlovisStock + 10)  
        inventoryStatus -= 10;
        timberGlovisStockAvailable = timberGlovisStock - 1200;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timberglovisstock").innerHTML = timberGlovisStockAvailable;
        document.getElementById("timberglovisprice").innerHTML = timberGlovisPrice.toFixed(1);
        document.getElementById("timberglovispricesell").innerHTML = timberGlovisPriceSell.toFixed(1);
    }
    if (timberReserve < 10) {
        document.getElementById("timber").style.background = "red";
        setTimeout(function(){document.getElementById("timber").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Tools

function toolsGlovisBuy() {
    if (goldReserve >= toolsGlovisPrice && toolsGlovisStock > 300 && inventoryStatus <= 190){
        goldReserve -= toolsGlovisPrice;
        toolsReserve += 10;
        toolsGlovisStock -= 10;
        toolsGlovisPrice = (300 * 160)/ toolsGlovisStock;
        toolsGlovisPriceSell = (toolsGlovisStock * toolsGlovisPrice) / (toolsGlovisStock + 10); 
        inventoryStatus += 10;
        toolsGlovisStockAvailable = toolsGlovisStock - 300;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolsglovisstock").innerHTML = toolsGlovisStockAvailable;
        document.getElementById("toolsglovisprice").innerHTML = toolsGlovisPrice.toFixed(1);
        document.getElementById("toolsglovispricesell").innerHTML = toolsGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < toolsGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(toolsGlovisStock <= 300) {
        document.getElementById("toolsglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("toolsglovisstock").style.background = "transparent"}, 1000)
    }
}
function toolsGlovisSell() {
    if (toolsReserve >= 10){
        toolsReserve -= 10;
        toolsGlovisStock += 10;
        goldReserve += toolsGlovisPriceSell;
        toolsGlovisPrice = (300 * 160)/ toolsGlovisStock;
        toolsGlovisPriceSell = (toolsGlovisStock * toolsGlovisPrice) / (toolsGlovisStock + 10)  
        inventoryStatus -= 10;
        toolsGlovisStockAvailable = toolsGlovisStock - 300;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolsglovisstock").innerHTML = toolsGlovisStockAvailable;
        document.getElementById("toolsglovisprice").innerHTML = toolsGlovisPrice.toFixed(1);
        document.getElementById("toolsglovispricesell").innerHTML = toolsGlovisPriceSell.toFixed(1);
    }
    if (toolsReserve < 10) {
        document.getElementById("tools").style.background = "red";
        setTimeout(function(){document.getElementById("tools").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Textil

function textilGlovisBuy() {
    if (goldReserve >= textilGlovisPrice && textilGlovisStock > 60 && inventoryStatus <= 190){
        goldReserve -= textilGlovisPrice;
        textilReserve += 10;
        textilGlovisStock -= 10;
        textilGlovisPrice = (60 * 500)/ textilGlovisStock;
        textilGlovisPriceSell = (textilGlovisStock * textilGlovisPrice) / (textilGlovisStock + 10);
        inventoryStatus += 10;
        textilGlovisStockAvailable = textilGlovisStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilglovisstock").innerHTML = textilGlovisStockAvailable;
        document.getElementById("textilglovisprice").innerHTML = textilGlovisPrice.toFixed(1);
        document.getElementById("textilglovispricesell").innerHTML = textilGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < textilGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(textilGlovisStock <= 60) {
        document.getElementById("textilglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("textilglovisstock").style.background = "transparent"}, 1000)
    }
}
function textilGlovisSell() {
    if (textilReserve >= 10){
        textilReserve -= 10;
        textilGlovisStock += 10;
        goldReserve += textilGlovisPriceSell;
        textilGlovisPrice = (60 * 500)/ textilGlovisStock;
        textilGlovisPriceSell = (textilGlovisStock * textilGlovisPrice) / (textilGlovisStock + 10)  
        inventoryStatus -= 10;
        textilGlovisStockAvailable = textilGlovisStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilglovisstock").innerHTML = textilGlovisStockAvailable;
        document.getElementById("textilglovisprice").innerHTML = textilGlovisPrice.toFixed(1);
        document.getElementById("textilglovispricesell").innerHTML = textilGlovisPriceSell.toFixed(1);
    }
    if (textilReserve < 10) {
        document.getElementById("textil").style.background = "red";
        setTimeout(function(){document.getElementById("textil").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Guns

function gunsGlovisBuy() {
    if (goldReserve >= gunsGlovisPrice && gunsGlovisStock > 60 && inventoryStatus <= 190){
        goldReserve -= gunsGlovisPrice;
        gunsReserve += 10;
        gunsGlovisStock -= 10;
        gunsGlovisPrice = (60 * 750)/ gunsGlovisStock;
        gunsGlovisPriceSell = (gunsGlovisStock * gunsGlovisPrice) / (gunsGlovisStock + 10);
        inventoryStatus += 10;
        gunsGlovisStockAvailable = gunsGlovisStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunsglovisstock").innerHTML = gunsGlovisStockAvailable;
        document.getElementById("gunsglovisprice").innerHTML = gunsGlovisPrice.toFixed(1);
        document.getElementById("gunsglovispricesell").innerHTML = gunsGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < gunsGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(gunsGlovisStock <= 60) {
        document.getElementById("gunsglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("gunsglovisstock").style.background = "transparent"}, 1000)
    }
}
function gunsGlovisSell() {
    if (gunsReserve >= 10){
        gunsReserve -= 10;
        gunsGlovisStock += 10;
        goldReserve += gunsGlovisPriceSell;
        gunsGlovisPrice = (60 * 750)/ gunsGlovisStock;
        gunsGlovisPriceSell = (gunsGlovisStock * gunsGlovisPrice) / (gunsGlovisStock + 10)  
        inventoryStatus -= 10;
        gunsGlovisStockAvailable = gunsGlovisStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunsglovisstock").innerHTML = gunsGlovisStockAvailable;
        document.getElementById("gunsglovisprice").innerHTML = gunsGlovisPrice.toFixed(1);
        document.getElementById("gunsglovispricesell").innerHTML = gunsGlovisPriceSell.toFixed(1);
    }
    if (gunsReserve < 10) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Slaves

function slavesGlovisBuy() {
    if (goldReserve >= slavesGlovisPrice && slavesGlovisStock > 60 && inventoryStatus <= 190){
        goldReserve -= slavesGlovisPrice;
        slavesReserve += 10;
        slavesGlovisStock -= 10;
        slavesGlovisPrice = (60 * 400)/ slavesGlovisStock;
        slavesGlovisPriceSell = (slavesGlovisStock * slavesGlovisPrice) / (slavesGlovisStock + 10);
        inventoryStatus += 10;
        slavesGlovisStockAvailable = slavesGlovisStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavesglovisstock").innerHTML = slavesGlovisStockAvailable;
        document.getElementById("slavesglovisprice").innerHTML = slavesGlovisPrice.toFixed(1);
        document.getElementById("slavesglovispricesell").innerHTML = slavesGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < slavesGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(slavesGlovisStock <= 60) {
        document.getElementById("slavesglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("slavesglovisstock").style.background = "transparent"}, 1000)
    }
}
function slavesGlovisSell() {
    if (slavesReserve >= 10){
        slavesReserve -= 10;
        slavesGlovisStock += 10;
        goldReserve += slavesGlovisPriceSell;
        slavesGlovisPrice = (60 * 400)/ slavesGlovisStock;
        slavesGlovisPriceSell = (slavesGlovisStock * slavesGlovisPrice) / (slavesGlovisStock + 10)  
        inventoryStatus -= 10;
        slavesGlovisStockAvailable = slavesGlovisStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavesglovisstock").innerHTML = slavesGlovisStockAvailable;
        document.getElementById("slavesglovisprice").innerHTML = slavesGlovisPrice.toFixed(1);
        document.getElementById("slavesglovispricesell").innerHTML = slavesGlovisPriceSell.toFixed(1);
    }
    if (slavesReserve < 10) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Cotton

function cottonGlovisBuy() {
    if (goldReserve >= cottonGlovisPrice && cottonGlovisStock >= 20 && inventoryStatus <= 190){
        goldReserve -= cottonGlovisPrice;
        cottonReserve += 10;
        cottonGlovisStock -= 10;
        cottonGlovisPrice = (100 * 50)/ cottonGlovisStock;
        cottonGlovisPriceSell = (cottonGlovisStock * cottonGlovisPrice) / (cottonGlovisStock + 10); 
        inventoryStatus += 10;
        cottonGlovisStockAvailable = cottonGlovisStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottonglovisstock").innerHTML = cottonGlovisStockAvailable;
        document.getElementById("cottonglovisprice").innerHTML = cottonGlovisPrice.toFixed(1);
        document.getElementById("cottonglovispricesell").innerHTML = cottonGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < cottonGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(cottonGlovisStock < 20) {
        document.getElementById("cottonglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("cottonglovisstock").style.background = "transparent"}, 1000)
    }
}
function cottonGlovisSell() {
    if (cottonReserve >= 10){
        cottonReserve -= 10;
        cottonGlovisStock += 10;
        goldReserve += cottonGlovisPriceSell;
        cottonGlovisPrice = (100 * 50)/ cottonGlovisStock;
        cottonGlovisPriceSell = (cottonGlovisStock * cottonGlovisPrice) / (cottonGlovisStock + 10) 
        inventoryStatus -= 10;
        cottonGlovisStockAvailable = cottonGlovisStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottonglovisstock").innerHTML = cottonGlovisStockAvailable;
        document.getElementById("cottonglovisprice").innerHTML = cottonGlovisPrice.toFixed(1);
        document.getElementById("cottonglovispricesell").innerHTML = cottonGlovisPriceSell.toFixed(1);
    }
    if (cottonReserve < 10) {
        document.getElementById("cotton").style.background = "red";
        setTimeout(function(){document.getElementById("cotton").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Sugar

function sugarGlovisBuy() {
    if (goldReserve >= sugarGlovisPrice && sugarGlovisStock >= 20 && inventoryStatus <= 190){
        goldReserve -= sugarGlovisPrice;
        sugarReserve += 10;
        sugarGlovisStock -= 10;
        sugarGlovisPrice = (50 * 100)/ sugarGlovisStock;
        sugarGlovisPriceSell = (sugarGlovisStock * sugarGlovisPrice) / (sugarGlovisStock + 10);
        inventoryStatus += 10;
        sugarGlovisStockAvailable = sugarGlovisStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarglovisstock").innerHTML = sugarGlovisStockAvailable;
        document.getElementById("sugarglovisprice").innerHTML = sugarGlovisPrice.toFixed(1);
        document.getElementById("sugarglovispricesell").innerHTML = sugarGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < sugarGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(sugarGlovisStock < 20) {
        document.getElementById("sugarglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("sugarglovisstock").style.background = "transparent"}, 1000)
    }
}
function sugarGlovisSell() {
    if (sugarReserve >= 10){
        sugarReserve -= 10;
        sugarGlovisStock += 10;
        goldReserve += sugarGlovisPriceSell;
        sugarGlovisPrice = (50 * 100)/ sugarGlovisStock;
        sugarGlovisPriceSell = (sugarGlovisStock * sugarGlovisPrice) / (sugarGlovisStock + 10)  
        inventoryStatus -= 10;
        sugarGlovisStockAvailable = sugarGlovisStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarglovisstock").innerHTML = sugarGlovisStockAvailable;
        document.getElementById("sugarglovisprice").innerHTML = sugarGlovisPrice.toFixed(1);
        document.getElementById("sugarglovispricesell").innerHTML = sugarGlovisPriceSell.toFixed(1);
    }
    if (sugarReserve < 10) {
        document.getElementById("sugar").style.background = "red";
        setTimeout(function(){document.getElementById("sugar").style.background = "transparent"}, 1000)
    }
}


// CAER GLOVIS
// Tabacco

function tabaccoGlovisBuy() {
    if (goldReserve >= tabaccoGlovisPrice && tabaccoGlovisStock >= 20 && inventoryStatus <= 190){
        goldReserve -= tabaccoGlovisPrice;
        tabaccoReserve += 10;
        tabaccoGlovisStock -= 10;
        tabaccoGlovisPrice = (50 * 150)/ tabaccoGlovisStock;
        tabaccoGlovisPriceSell = (tabaccoGlovisStock * tabaccoGlovisPrice) / (tabaccoGlovisStock + 10);
        inventoryStatus += 10;
        tabaccoGlovisStockAvailable = tabaccoGlovisStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccoglovisstock").innerHTML = tabaccoGlovisStockAvailable;
        document.getElementById("tabaccoglovisprice").innerHTML = tabaccoGlovisPrice.toFixed(1);
        document.getElementById("tabaccoglovispricesell").innerHTML = tabaccoGlovisPriceSell.toFixed(1);
    }
    if (goldReserve < tabaccoGlovisPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(tabaccoGlovisStock < 20) {
        document.getElementById("tabaccoglovisstock").style.background = "red";
        setTimeout(function(){document.getElementById("tabaccoglovisstock").style.background = "transparent"}, 1000)
    }
}
function tabaccoGlovisSell() {
    if (tabaccoReserve >= 10){
        tabaccoReserve -= 10;
        tabaccoGlovisStock += 10;
        goldReserve += tabaccoGlovisPriceSell;
        tabaccoGlovisPrice = (50 * 150)/ tabaccoGlovisStock;
        tabaccoGlovisPriceSell = (tabaccoGlovisStock * tabaccoGlovisPrice) / (tabaccoGlovisStock + 10) ; 
        inventoryStatus -= 10;
        tabaccoGlovisStockAvailable = tabaccoGlovisStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccoglovisstock").innerHTML = tabaccoGlovisStockAvailable;
        document.getElementById("tabaccoglovisprice").innerHTML = tabaccoGlovisPrice.toFixed(1);
        document.getElementById("tabaccoglovispricesell").innerHTML = tabaccoGlovisPriceSell.toFixed(1);
    }
    if (tabaccoReserve < 10) {
        document.getElementById("tabacco").style.background = "red";
        setTimeout(function(){document.getElementById("tabacco").style.background = "transparent"}, 1000)
    }
}








// OPONA-LU-HANA
// CITY AI

setInterval(function() {priceOponaActualization(),oponaStockAvailable()}, 1000);
setInterval(function() {oponaProduction()}, 144000);
setInterval(function() {oponaFoodProduction()}, 288000);

function oponaStockAvailable() {
    document.getElementById("foodoponastock").innerHTML = foodOponaStockAvailable;
    document.getElementById("rumoponastock").innerHTML = rumOponaStockAvailable;
    document.getElementById("timberoponastock").innerHTML = timberOponaStockAvailable;
    document.getElementById("toolsoponastock").innerHTML = toolsOponaStockAvailable;
    document.getElementById("textiloponastock").innerHTML = textilOponaStockAvailable;
    document.getElementById("gunsoponastock").innerHTML = gunsOponaStockAvailable;
    document.getElementById("slavesoponastock").innerHTML = slavesOponaStockAvailable;
    document.getElementById("cottonoponastock").innerHTML = cottonOponaStockAvailable;
    document.getElementById("tabaccooponastock").innerHTML = tabaccoOponaStockAvailable;
    document.getElementById("sugaroponastock").innerHTML = sugarOponaStockAvailable;
    if(foodOponaStock < 240){
        foodOponaStockAvailable = 0; 
        document.getElementById("foodoponastock").innerHTML = 0
    }
    if(rumOponaStock < 60){
        rumOponaStockAvailable = 0; 
        document.getElementById("rumoponastock").innerHTML = 0
    }
    if(timberOponaStock < 240){
        timberOponaStockAvailable = 0; 
        document.getElementById("timberoponastock").innerHTML = 0
    }
    if(toolsOponaStock < 60){
        toolsOponaStockAvailable = 0; 
        document.getElementById("toolsoponastock").innerHTML = 0
    }
    if(textilOponaStock < 12){
        textilOponaStockAvailable = 0; 
        document.getElementById("textiloponastock").innerHTML = 0
    }
    if(gunsOponaStock < 12){
        gunsOponaStockAvailable = 0; 
        document.getElementById("gunsoponastock").innerHTML = 0
    }
    if(slavesOponaStock < 12){
        slavesOponaStockAvailable = 0; 
        document.getElementById("slavesoponastock").innerHTML = 0
    }
    if(cottonOponaStock < 10){
        cottonOponaStockAvailable = 0; 
        document.getElementById("cottonoponastock").innerHTML = 0
    }
    if(sugarOponaStock < 10){
        sugarOponaStockAvailable = 0; 
        document.getElementById("sugaroponastock").innerHTML = 0
    }
    if(tabaccoOponaStock < 10){
        tabaccoOponaStockAvailable = 0; 
        document.getElementById("tabaccooponastock").innerHTML = 0
    }
}

function priceOponaActualization(){
    foodOponaPrice = (240 * 50)/ foodOponaStock;
    foodOponaPriceSell = (foodOponaStock * foodOponaPrice) / (foodOponaStock + 10);
    rumOponaPrice = (60 * 250)/ rumOponaStock;
    rumOponaPriceSell = (rumOponaStock * rumOponaPrice) / (rumOponaStock + 10); 
    timberOponaPrice = (240 * 60)/ timberOponaStock;
    timberOponaPriceSell = (timberOponaStock * timberOponaPrice) / (timberOponaStock + 10);
    toolsOponaPrice = (60 * 250)/ toolsOponaStock;
    toolsOponaPriceSell = (toolsOponaStock * toolsOponaPrice) / (toolsOponaStock + 10);
    textilOponaPrice = (12 * 700)/ textilOponaStock;
    textilOponaPriceSell = (textilOponaStock * textilOponaPrice) / (textilOponaStock + 10);
    gunsOponaPrice = (12 * 750)/ gunsOponaStock;
    gunsOponaPriceSell = (gunsOponaStock * gunsOponaPrice) / (gunsOponaStock + 10);  
    slavesOponaPrice = (300 * 60)/ slavesOponaStock;
    slavesOponaPriceSell = (slavesOponaStock * slavesOponaPrice) / (slavesOponaStock + 10);
    cottonOponaPrice = (100 * 50)/ cottonOponaStock;
    cottonOponaPriceSell = (cottonOponaStock * cottonOponaPrice) / (cottonOponaStock + 10);
    sugarOponaPrice = (50 * 100)/ sugarOponaStock;
    sugarOponaPriceSell = (sugarOponaStock * sugarOponaPrice) / (sugarOponaStock + 10);
    tabaccoOponaPrice = (1000 * 100)/ tabaccoOponaStock;
    tabaccoOponaPriceSell = (tabaccoOponaStock * tabaccoOponaPrice) / (tabaccoOponaStock + 10); 
    document.getElementById("foodoponaprice").innerHTML = foodOponaPrice.toFixed(1);
    document.getElementById("foodoponapricesell").innerHTML = foodOponaPriceSell.toFixed(1);
    document.getElementById("rumoponaprice").innerHTML = rumOponaPrice.toFixed(1);
    document.getElementById("rumoponapricesell").innerHTML = rumOponaPriceSell.toFixed(1);
    document.getElementById("timberoponaprice").innerHTML = timberOponaPrice.toFixed(1);
    document.getElementById("timberoponapricesell").innerHTML = timberOponaPriceSell.toFixed(1);
    document.getElementById("toolsoponaprice").innerHTML = toolsOponaPrice.toFixed(1);
    document.getElementById("toolsoponapricesell").innerHTML = toolsOponaPriceSell.toFixed(1);
    document.getElementById("textiloponaprice").innerHTML = textilOponaPrice.toFixed(1);
    document.getElementById("textiloponapricesell").innerHTML = textilOponaPriceSell.toFixed(1);
    document.getElementById("gunsoponaprice").innerHTML = gunsOponaPrice.toFixed(1);
    document.getElementById("gunsoponapricesell").innerHTML = gunsOponaPriceSell.toFixed(1);
    document.getElementById("slavesoponaprice").innerHTML = slavesOponaPrice.toFixed(1);
    document.getElementById("slavesoponapricesell").innerHTML = slavesOponaPriceSell.toFixed(1);
    document.getElementById("cottonoponaprice").innerHTML = cottonOponaPrice.toFixed(1);
    document.getElementById("cottonoponapricesell").innerHTML = cottonOponaPriceSell.toFixed(1);
    document.getElementById("tabaccooponaprice").innerHTML = tabaccoOponaPrice.toFixed(1);
    document.getElementById("tabaccooponapricesell").innerHTML = tabaccoOponaPriceSell.toFixed(1);
    document.getElementById("tabaccooponaprice").innerHTML = tabaccoOponaPrice.toFixed(1);
    document.getElementById("tabaccooponapricesell").innerHTML = tabaccoOponaPriceSell.toFixed(1);
    document.getElementById("sugaroponaprice").innerHTML = sugarOponaPrice.toFixed(1);
    document.getElementById("sugaroponapricesell").innerHTML = sugarOponaPriceSell.toFixed(1);
}

function oponaConsumption() {
    foodOponaStock -= 20;
    foodOponaStockAvailable = foodOponaStock - 240;
    document.getElementById("foodoponastock").innerHTML = foodOponaStockAvailable;
    rumOponaStock -= 5;
    rumOponaStockAvailable = rumOponaStock - 12;
    document.getElementById("rumoponastock").innerHTML = rumOponaStockAvailable;
    timberOponaStock -= 20;
    timberOponaStockAvailable = timberOponaStock - 240;
    document.getElementById("timberoponastock").innerHTML = timberOponaStockAvailable;
    toolsOponaStock -= 5;
    toolsOponaStockAvailable = toolsOponaStock - 12;
    document.getElementById("toolsoponastock").innerHTML = toolsOponaStockAvailable;
    textilOponaStock -= 1;
    textilOponaStockAvailable = textilOponaStock - 12;
    document.getElementById("textiloponastock").innerHTML = textilOponaStockAvailable;
    gunsOponaStock -= 1;
    gunsOponaStockAvailable = gunsOponaStock - 12;
    document.getElementById("gunsoponastock").innerHTML = gunsOponaStockAvailable;
    slavesOponaStock -= 1;
    slavesOponaStockAvailable = slavesOponaStock - 12;
    document.getElementById("slavesoponastock").innerHTML = slavesOponaStockAvailable;
}
function oponaProduction() {
    timberOponaStock += 140;
    timberOponaStockAvailable = timberOponaStock - 240;
    document.getElementById("timberoponastock").innerHTML = timberOponaStockAvailable;
    slavesOponaStock += 255;
    slavesOponaStockAvailable = slavesOponaStock - 12;
    document.getElementById("slavesoponastock").innerHTML = toolsOponaStockAvailable;
    tabaccoOponaStock += 600;
    tabaccoOponaStockAvailable = tabaccoOponaStock - 10;
    document.getElementById("tabaccooponastock").innerHTML = toolsOponaStockAvailable;
    oponaOverflow()
}
function oponaFoodProduction() {
    foodOponaStock += 280;
    foodOponaStockAvailable = foodOponaStock - 240;
    document.getElementById("foodoponastock").innerHTML = foodOponaStockAvailable;
}
function oponaOverflow() {
    if (foodOponaStock > 350) {foodOponaStock -= 100}
    if (rumOponaStock > 150) {rumOponaStock -= 70}
    if (timberOponaStock > 350) {timberOponaStock -= 100}
    if (toolsOponaStock > 150) {toolsOponaStock -= 70}
    if (textilOponaStock > 30) {textilOponaStock -= 12}
    if (gunsOponaStock > 30) {gunsOponaStock -= 12}
    if (slavesOponaStock > 1500) {slavesOponaStock -= 600}
    if (cottonOponaStock > 50) {cottonOponaStock -= 50}
    if (sugarOponaStock > 50) {sugarOponaStock -= 50}
    if (tabaccoOponaStock > 1400) {tabaccoOponaStock -= 600}
}



// OPONA-LU-HANA
// Food

function foodOponaBuy() {
    if (goldReserve >= foodOponaPrice && foodOponaStock > 240 && inventoryStatus <= 190){
        goldReserve -= foodOponaPrice;
        foodReserve += 10;
        foodOponaStock -= 10;
        foodOponaPrice = (240 * 50)/ foodOponaStock;
        foodOponaPriceSell = (foodOponaStock * foodOponaPrice) / (foodOponaStock + 10);
        inventoryStatus += 10;
        foodOponaStockAvailable = foodOponaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodoponastock").innerHTML = foodOponaStockAvailable;
        document.getElementById("foodoponaprice").innerHTML = foodOponaPrice.toFixed(1);
        document.getElementById("foodoponapricesell").innerHTML = foodOponaPriceSell.toFixed(1);
    }
    if (goldReserve < foodOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(foodOponaStock <= 240) {
        document.getElementById("foodoponastock").style.background = "red";
        setTimeout(function(){document.getElementById("foodoponastock").style.background = "transparent"}, 1000)
    }
}
function foodOponaSell() {
    if (foodReserve > 10) {
        foodReserve -= 10;
        foodOponaStock += 10;
        goldReserve += foodOponaPriceSell;
        foodOponaPrice = (240 * 50)/ foodOponaStock;
        foodOponaPriceSell = (foodOponaStock * foodOponaPrice) / (foodOponaStock + 10)  
        inventoryStatus -= 10;
        foodOponaStockAvailable = foodOponaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodoponastock").innerHTML = foodOponaStockAvailable;
        document.getElementById("foodoponaprice").innerHTML = foodOponaPrice.toFixed(1);
        document.getElementById("foodoponapricesell").innerHTML = foodOponaPriceSell.toFixed(1);
    }
    if (foodReserve < 10) {
        document.getElementById("food").style.background = "red";
        setTimeout(function(){document.getElementById("food").style.background = "transparent"}, 1000)
    }
}



// OPONA-LU-HANA
//  Rum

function rumOponaBuy() {
    if (goldReserve >= rumOponaPrice && rumOponaStock > 60 && inventoryStatus <= 190){
        goldReserve -= rumOponaPrice;
        rumReserve += 10;
        rumOponaStock -= 10;
        rumOponaPrice = (60 * 250)/ rumOponaStock;
        rumOponaPriceSell = (rumOponaStock * rumOponaPrice) / (rumOponaStock + 10);
        inventoryStatus += 10;
        rumOponaStockAvailable = rumOponaStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumoponastock").innerHTML = rumOponaStockAvailable;
        document.getElementById("rumoponaprice").innerHTML = rumOponaPrice.toFixed(1);
        document.getElementById("rumoponapricesell").innerHTML = rumOponaPriceSell.toFixed(1);
    }
    if (goldReserve < rumOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(rumOponaStock <= 60) {
        document.getElementById("rumoponastock").style.background = "red";
        setTimeout(function(){document.getElementById("rumoponastock").style.background = "transparent"}, 1000)
    }
}
function rumOponaSell() {
    if (rumReserve >= 10){
        rumReserve -= 10;
        rumOponaStock += 10;
        goldReserve += rumOponaPriceSell;
        rumOponaPrice = (60 * 250)/ rumOponaStock;
        rumOponaPriceSell = (rumOponaStock * rumOponaPrice) / (rumOponaStock + 10)  
        inventoryStatus -= 10;
        rumOponaStockAvailable = rumOponaStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumoponastock").innerHTML = rumOponaStockAvailable;
        document.getElementById("rumoponaprice").innerHTML = rumOponaPrice.toFixed(1);
        document.getElementById("rumoponapricesell").innerHTML = rumOponaPriceSell.toFixed(1);
    }
    if (rumReserve < 10) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Timber

function timberOponaBuy() {
    if (goldReserve >= timberOponaPrice && timberOponaStock > 240 && inventoryStatus <= 190){
        goldReserve -= timberOponaPrice;
        timberReserve += 10;
        timberOponaStock -= 10;
        timberOponaPrice = (240 * 60)/ timberOponaStock;
        timberOponaPriceSell = (timberOponaStock * timberOponaPrice) / (timberOponaStock + 10);
        inventoryStatus += 10;
        timberOponaStockAvailable = timberOponaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timberoponastock").innerHTML = timberOponaStockAvailable;
        document.getElementById("timberoponaprice").innerHTML = timberOponaPrice.toFixed(1);
        document.getElementById("timberoponapricesell").innerHTML = timberOponaPriceSell.toFixed(1);
    }
    if (goldReserve < timberOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(timberOponaStock <= 240) {
        document.getElementById("timberoponastock").style.background = "red";
        setTimeout(function(){document.getElementById("timberoponastock").style.background = "transparent"}, 1000)
    }
}
function timberOponaSell() {
    if (timberReserve >= 10){
        timberReserve -= 10;
        timberOponaStock += 10;
        goldReserve += timberOponaPriceSell;
        timberOponaPrice = (240 * 60)/ timberOponaStock;
        timberOponaPriceSell = (timberOponaStock * timberOponaPrice) / (timberOponaStock + 10)  
        inventoryStatus -= 10;
        timberOponaStockAvailable = timberOponaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timberoponastock").innerHTML = timberOponaStockAvailable;
        document.getElementById("timberoponaprice").innerHTML = timberOponaPrice.toFixed(1);
        document.getElementById("timberoponapricesell").innerHTML = timberOponaPriceSell.toFixed(1);
    }
    if (timberReserve < 10) {
        document.getElementById("timber").style.background = "red";
        setTimeout(function(){document.getElementById("timber").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Tools

function toolsOponaBuy() {
    if (goldReserve >= toolsOponaPrice && toolsOponaStock > 60 && inventoryStatus <= 190){
        goldReserve -= toolsOponaPrice;
        toolsReserve += 10;
        toolsOponaStock -= 10;
        toolsOponaPrice = (60 * 250)/ toolsOponaStock;
        toolsOponaPriceSell = (toolsOponaStock * toolsOponaPrice) / (toolsOponaStock + 10); 
        inventoryStatus += 10;
        toolsOponaStockAvailable = toolsOponaStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolsoponastock").innerHTML = toolsOponaStockAvailable;
        document.getElementById("toolsoponaprice").innerHTML = toolsOponaPrice.toFixed(1);
        document.getElementById("toolsoponapricesell").innerHTML = toolsOponaPriceSell.toFixed(1);
    }
    if (goldReserve < toolsOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(toolsOponaStock <= 60) {
        document.getElementById("toolsoponastock").style.background = "red";
        setTimeout(function(){document.getElementById("toolsoponastock").style.background = "transparent"}, 1000)
    }
}
function toolsOponaSell() {
    if (toolsReserve >= 10){
        toolsReserve -= 10;
        toolsOponaStock += 10;
        goldReserve += toolsOponaPriceSell;
        toolsOponaPrice = (60 * 250)/ toolsOponaStock;
        toolsOponaPriceSell = (toolsOponaStock * toolsOponaPrice) / (toolsOponaStock + 10)  
        inventoryStatus -= 10;
        toolsOponaStockAvailable = toolsOponaStock - 60;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolsoponastock").innerHTML = toolsOponaStockAvailable;
        document.getElementById("toolsoponaprice").innerHTML = toolsOponaPrice.toFixed(1);
        document.getElementById("toolsoponapricesell").innerHTML = toolsOponaPriceSell.toFixed(1);
    }
    if (toolsReserve < 10) {
        document.getElementById("tools").style.background = "red";
        setTimeout(function(){document.getElementById("tools").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Textil

function textilOponaBuy() {
    if (goldReserve >= textilOponaPrice && textilOponaStock > 12 && inventoryStatus <= 190){
        goldReserve -= textilOponaPrice;
        textilReserve += 10;
        textilOponaStock -= 10;
        textilOponaPrice = (12 * 700)/ textilOponaStock;
        textilOponaPriceSell = (textilOponaStock * textilOponaPrice) / (textilOponaStock + 10);
        inventoryStatus += 10;
        textilOponaStockAvailable = textilOponaStock - 12;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textiloponastock").innerHTML = textilOponaStockAvailable;
        document.getElementById("textiloponaprice").innerHTML = textilOponaPrice.toFixed(1);
        document.getElementById("textiloponapricesell").innerHTML = textilOponaPriceSell.toFixed(1);
    }
    if (goldReserve < textilOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(textilOponaStock <= 12) {
        document.getElementById("textiloponastock").style.background = "red";
        setTimeout(function(){document.getElementById("textiloponastock").style.background = "transparent"}, 1000)
    }
}
function textilOponaSell() {
    if (textilReserve >= 10){
        textilReserve -= 10;
        textilOponaStock += 10;
        goldReserve += textilOponaPriceSell;
        textilOponaPrice = (12 * 700)/ textilOponaStock;
        textilOponaPriceSell = (textilOponaStock * textilOponaPrice) / (textilOponaStock + 10)  
        inventoryStatus -= 10;
        textilOponaStockAvailable = textilOponaStock - 12;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textiloponastock").innerHTML = textilOponaStockAvailable;
        document.getElementById("textiloponaprice").innerHTML = textilOponaPrice.toFixed(1);
        document.getElementById("textiloponapricesell").innerHTML = textilOponaPriceSell.toFixed(1);
    }
    if (textilReserve < 10) {
        document.getElementById("textil").style.background = "red";
        setTimeout(function(){document.getElementById("textil").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Guns

function gunsOponaBuy() {
    if (goldReserve >= gunsOponaPrice && gunsOponaStock > 12 && inventoryStatus <= 190){
        goldReserve -= gunsOponaPrice;
        gunsReserve += 10;
        gunsOponaStock -= 10;
        gunsOponaPrice = (12 * 750)/ gunsOponaStock;
        gunsOponaPriceSell = (gunsOponaStock * gunsOponaPrice) / (gunsOponaStock + 10);
        inventoryStatus += 10;
        gunsOponaStockAvailable = gunsOponaStock - 12;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunsoponastock").innerHTML = gunsOponaStockAvailable;
        document.getElementById("gunsoponaprice").innerHTML = gunsOponaPrice.toFixed(1);
        document.getElementById("gunsoponapricesell").innerHTML = gunsOponaPriceSell.toFixed(1);
    }
    if (goldReserve < gunsOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(gunsOponaStock <= 12) {
        document.getElementById("gunsoponastock").style.background = "red";
        setTimeout(function(){document.getElementById("gunsoponastock").style.background = "transparent"}, 1000)
    }
}
function gunsOponaSell() {
    if (gunsReserve >= 10){
        gunsReserve -= 10;
        gunsOponaStock += 10;
        goldReserve += gunsOponaPriceSell;
        gunsOponaPrice = (12 * 750)/ gunsOponaStock;
        gunsOponaPriceSell = (gunsOponaStock * gunsOponaPrice) / (gunsOponaStock + 10)  
        inventoryStatus -= 10;
        gunsOponaStockAvailable = gunsOponaStock - 12;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunsoponastock").innerHTML = gunsOponaStockAvailable;
        document.getElementById("gunsoponaprice").innerHTML = gunsOponaPrice.toFixed(1);
        document.getElementById("gunsoponapricesell").innerHTML = gunsOponaPriceSell.toFixed(1);
    }
    if (gunsReserve < 10) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Slaves

function slavesOponaBuy() {
    if (goldReserve >= slavesOponaPrice && slavesOponaStock > 12 && inventoryStatus <= 190){
        goldReserve -= slavesOponaPrice;
        slavesReserve += 10;
        slavesOponaStock -= 10;
        slavesOponaPrice = (300 * 60)/ slavesOponaStock;
        slavesOponaPriceSell = (slavesOponaStock * slavesOponaPrice) / (slavesOponaStock + 10);
        inventoryStatus += 10;
        slavesOponaStockAvailable = slavesOponaStock - 12;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavesoponastock").innerHTML = slavesOponaStockAvailable;
        document.getElementById("slavesoponaprice").innerHTML = slavesOponaPrice.toFixed(1);
        document.getElementById("slavesoponapricesell").innerHTML = slavesOponaPriceSell.toFixed(1);
    }
    if (goldReserve < slavesOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(slavesOponaStock <= 12) {
        document.getElementById("slavesoponastock").style.background = "red";
        setTimeout(function(){document.getElementById("slavesoponastock").style.background = "transparent"}, 1000)
    }
}
function slavesOponaSell() {
    if (slavesReserve >= 10){
        slavesReserve -= 10;
        slavesOponaStock += 10;
        goldReserve += slavesOponaPriceSell;
        slavesOponaPrice = (300 * 60)/ slavesOponaStock;
        slavesOponaPriceSell = (slavesOponaStock * slavesOponaPrice) / (slavesOponaStock + 10)  
        inventoryStatus -= 10;
        slavesOponaStockAvailable = slavesOponaStock - 12;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavesoponastock").innerHTML = slavesOponaStockAvailable;
        document.getElementById("slavesoponaprice").innerHTML = slavesOponaPrice.toFixed(1);
        document.getElementById("slavesoponapricesell").innerHTML = slavesOponaPriceSell.toFixed(1);
    }
    if (slavesReserve < 10) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Cotton

function cottonOponaBuy() {
    if (goldReserve >= cottonOponaPrice && cottonOponaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= cottonOponaPrice;
        cottonReserve += 10;
        cottonOponaStock -= 10;
        cottonOponaPrice = (100 * 50)/ cottonOponaStock;
        cottonOponaPriceSell = (cottonOponaStock * cottonOponaPrice) / (cottonOponaStock + 10); 
        inventoryStatus += 10;
        cottonOponaStockAvailable = cottonOponaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottonoponastock").innerHTML = cottonOponaStockAvailable;
        document.getElementById("cottonoponaprice").innerHTML = cottonOponaPrice.toFixed(1);
        document.getElementById("cottonoponapricesell").innerHTML = cottonOponaPriceSell.toFixed(1);
    }
    if (goldReserve < cottonOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(cottonOponaStock < 20) {
        document.getElementById("cottonoponastock").style.background = "red";
        setTimeout(function(){document.getElementById("cottonoponastock").style.background = "transparent"}, 1000)
    }
}
function cottonOponaSell() {
    if (cottonReserve >= 10){
        cottonReserve -= 10;
        cottonOponaStock += 10;
        goldReserve += cottonOponaPriceSell;
        cottonOponaPrice = (100 * 50)/ cottonOponaStock;
        cottonOponaPriceSell = (cottonOponaStock * cottonOponaPrice) / (cottonOponaStock + 10) 
        inventoryStatus -= 10;
        cottonOponaStockAvailable = cottonOponaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottonoponastock").innerHTML = cottonOponaStockAvailable;
        document.getElementById("cottonoponaprice").innerHTML = cottonOponaPrice.toFixed(1);
        document.getElementById("cottonoponapricesell").innerHTML = cottonOponaPriceSell.toFixed(1);
    }
    if (cottonReserve < 10) {
        document.getElementById("cotton").style.background = "red";
        setTimeout(function(){document.getElementById("cotton").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Sugar

function sugarOponaBuy() {
    if (goldReserve >= sugarOponaPrice && sugarOponaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= sugarOponaPrice;
        sugarReserve += 10;
        sugarOponaStock -= 10;
        sugarOponaPrice = (50 * 100)/ sugarOponaStock;
        sugarOponaPriceSell = (sugarOponaStock * sugarOponaPrice) / (sugarOponaStock + 10);
        inventoryStatus += 10;
        sugarOponaStockAvailable = sugarOponaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugaroponastock").innerHTML = sugarOponaStockAvailable;
        document.getElementById("sugaroponaprice").innerHTML = sugarOponaPrice.toFixed(1);
        document.getElementById("sugaroponapricesell").innerHTML = sugarOponaPriceSell.toFixed(1);
    }
    if (goldReserve < sugarOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(sugarOponaStock < 20) {
        document.getElementById("sugaroponastock").style.background = "red";
        setTimeout(function(){document.getElementById("sugaroponastock").style.background = "transparent"}, 1000)
    }
}
function sugarOponaSell() {
    if (sugarReserve >= 10){
        sugarReserve -= 10;
        sugarOponaStock += 10;
        goldReserve += sugarOponaPriceSell;
        sugarOponaPrice = (50 * 100)/ sugarOponaStock;
        sugarOponaPriceSell = (sugarOponaStock * sugarOponaPrice) / (sugarOponaStock + 10)  
        inventoryStatus -= 10;
        sugarOponaStockAvailable = sugarOponaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugaroponastock").innerHTML = sugarOponaStockAvailable;
        document.getElementById("sugaroponaprice").innerHTML = sugarOponaPrice.toFixed(1);
        document.getElementById("sugaroponapricesell").innerHTML = sugarOponaPriceSell.toFixed(1);
    }
    if (sugarReserve < 10) {
        document.getElementById("sugar").style.background = "red";
        setTimeout(function(){document.getElementById("sugar").style.background = "transparent"}, 1000)
    }
}


// OPONA-LU-HANA
// Tabacco

function tabaccoOponaBuy() {
    if (goldReserve >= tabaccoOponaPrice && tabaccoOponaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= tabaccoOponaPrice;
        tabaccoReserve += 10;
        tabaccoOponaStock -= 10;
        tabaccoOponaPrice = (1000 * 100)/ tabaccoOponaStock;
        tabaccoOponaPriceSell = (tabaccoOponaStock * tabaccoOponaPrice) / (tabaccoOponaStock + 10);
        inventoryStatus += 10;
        tabaccoOponaStockAvailable = tabaccoOponaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccooponastock").innerHTML = tabaccoOponaStockAvailable;
        document.getElementById("tabaccooponaprice").innerHTML = tabaccoOponaPrice.toFixed(1);
        document.getElementById("tabaccooponapricesell").innerHTML = tabaccoOponaPriceSell.toFixed(1);
    }
    if (goldReserve < tabaccoOponaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(tabaccoOponaStock < 20) {
        document.getElementById("tabaccooponastock").style.background = "red";
        setTimeout(function(){document.getElementById("tabaccooponastock").style.background = "transparent"}, 1000)
    }
}
function tabaccoOponaSell() {
    if (tabaccoReserve >= 10){
        tabaccoReserve -= 10;
        tabaccoOponaStock += 10;
        goldReserve += tabaccoOponaPriceSell;
        tabaccoOponaPrice = (1000 * 100)/ tabaccoOponaStock;
        tabaccoOponaPriceSell = (tabaccoOponaStock * tabaccoOponaPrice) / (tabaccoOponaStock + 10) ; 
        inventoryStatus -= 10;
        tabaccoOponaStockAvailable = tabaccoOponaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccooponastock").innerHTML = tabaccoOponaStockAvailable;
        document.getElementById("tabaccooponaprice").innerHTML = tabaccoOponaPrice.toFixed(1);
        document.getElementById("tabaccooponapricesell").innerHTML = tabaccoOponaPriceSell.toFixed(1);
    }
    if (tabaccoReserve < 10) {
        document.getElementById("tabacco").style.background = "red";
        setTimeout(function(){document.getElementById("tabacco").style.background = "transparent"}, 1000)
    }
}









 


// LA CORDA
// CITY AI

setInterval(function() {priceCordaActualization(),cordaStockAvailable()}, 1000);
setInterval(function() {cordaProduction()}, 144000);
setInterval(function() {cordaFoodProduction()}, 288000);

function cordaStockAvailable() {
    document.getElementById("foodcordastock").innerHTML = foodCordaStockAvailable;
    document.getElementById("rumcordastock").innerHTML = rumCordaStockAvailable;
    document.getElementById("timbercordastock").innerHTML = timberCordaStockAvailable;
    document.getElementById("toolscordastock").innerHTML = toolsCordaStockAvailable;
    document.getElementById("textilcordastock").innerHTML = textilCordaStockAvailable;
    document.getElementById("gunscordastock").innerHTML = gunsCordaStockAvailable;
    document.getElementById("slavescordastock").innerHTML = slavesCordaStockAvailable;
    document.getElementById("cottoncordastock").innerHTML = cottonCordaStockAvailable;
    document.getElementById("tabaccocordastock").innerHTML = tabaccoCordaStockAvailable;
    document.getElementById("sugarcordastock").innerHTML = sugarCordaStockAvailable;
    if(foodCordaStock < 960){
        foodCordaStockAvailable = 0; 
        document.getElementById("foodcordastock").innerHTML = 0
    }
    if(rumCordaStock < 240){
        rumCordaStockAvailable = 0; 
        document.getElementById("rumcordastock").innerHTML = 0
    }
    if(timberCordaStock < 960){
        timberCordaStockAvailable = 0; 
        document.getElementById("timbercordastock").innerHTML = 0
    }
    if(toolsCordaStock < 240){
        toolsCordaStockAvailable = 0; 
        document.getElementById("toolscordastock").innerHTML = 0
    }
    if(textilCordaStock < 48){
        textilCordaStockAvailable = 0; 
        document.getElementById("textilcordastock").innerHTML = 0
    }
    if(gunsCordaStock < 48){
        gunsCordaStockAvailable = 0; 
        document.getElementById("gunscordastock").innerHTML = 0
    }
    if(slavesCordaStock < 180){
        slavesCordaStockAvailable = 0; 
        document.getElementById("slavescordastock").innerHTML = 0
    }
    if(cottonCordaStock < 10){
        cottonCordaStockAvailable = 0; 
        document.getElementById("cottoncordastock").innerHTML = 0
    }
    if(sugarCordaStock < 10){
        sugarCordaStockAvailable = 0; 
        document.getElementById("sugarcordastock").innerHTML = 0
    }
    if(tabaccoCordaStock < 10){
        tabaccoCordaStockAvailable = 0; 
        document.getElementById("tabaccocordastock").innerHTML = 0
    }
}

function priceCordaActualization(){
    foodCordaPrice = (960 * 50)/ foodCordaStock;
    foodCordaPriceSell = (foodCordaStock * foodCordaPrice) / (foodCordaStock + 10);
    rumCordaPrice = (240 * 200)/ rumCordaStock;
    rumCordaPriceSell = (rumCordaStock * rumCordaPrice) / (rumCordaStock + 10); 
    timberCordaPrice = (960 * 60)/ timberCordaStock;
    timberCordaPriceSell = (timberCordaStock * timberCordaPrice) / (timberCordaStock + 10);
    toolsCordaPrice = (240 * 300)/ toolsCordaStock;
    toolsCordaPriceSell = (toolsCordaStock * toolsCordaPrice) / (toolsCordaStock + 10);
    textilCordaPrice = (48 * 500)/ textilCordaStock;
    textilCordaPriceSell = (textilCordaStock * textilCordaPrice) / (textilCordaStock + 10);
    gunsCordaPrice = (48 * 750)/ gunsCordaStock;
    gunsCordaPriceSell = (gunsCordaStock * gunsCordaPrice) / (gunsCordaStock + 10);  
    slavesCordaPrice = (180 * 500)/ slavesCordaStock;
    slavesCordaPriceSell = (slavesCordaStock * slavesCordaPrice) / (slavesCordaStock + 10);
    cottonCordaPrice = (100 * 50)/ cottonCordaStock;
    cottonCordaPriceSell = (cottonCordaStock * cottonCordaPrice) / (cottonCordaStock + 10);
    sugarCordaPrice = (500 * 100)/ sugarCordaStock;
    sugarCordaPriceSell = (sugarCordaStock * sugarCordaPrice) / (sugarCordaStock + 10);
    tabaccoCordaPrice = (50 * 150)/ tabaccoCordaStock;
    tabaccoCordaPriceSell = (tabaccoCordaStock * tabaccoCordaPrice) / (tabaccoCordaStock + 10); 
    document.getElementById("foodcordaprice").innerHTML = foodCordaPrice.toFixed(1);
    document.getElementById("foodcordapricesell").innerHTML = foodCordaPriceSell.toFixed(1);
    document.getElementById("rumcordaprice").innerHTML = rumCordaPrice.toFixed(1);
    document.getElementById("rumcordapricesell").innerHTML = rumCordaPriceSell.toFixed(1);
    document.getElementById("timbercordaprice").innerHTML = timberCordaPrice.toFixed(1);
    document.getElementById("timbercordapricesell").innerHTML = timberCordaPriceSell.toFixed(1);
    document.getElementById("toolscordaprice").innerHTML = toolsCordaPrice.toFixed(1);
    document.getElementById("toolscordapricesell").innerHTML = toolsCordaPriceSell.toFixed(1);
    document.getElementById("textilcordaprice").innerHTML = textilCordaPrice.toFixed(1);
    document.getElementById("textilcordapricesell").innerHTML = textilCordaPriceSell.toFixed(1);
    document.getElementById("gunscordaprice").innerHTML = gunsCordaPrice.toFixed(1);
    document.getElementById("gunscordapricesell").innerHTML = gunsCordaPriceSell.toFixed(1);
    document.getElementById("slavescordaprice").innerHTML = slavesCordaPrice.toFixed(1);
    document.getElementById("slavescordapricesell").innerHTML = slavesCordaPriceSell.toFixed(1);
    document.getElementById("cottoncordaprice").innerHTML = cottonCordaPrice.toFixed(1);
    document.getElementById("cottoncordapricesell").innerHTML = cottonCordaPriceSell.toFixed(1);
    document.getElementById("tabaccocordaprice").innerHTML = tabaccoCordaPrice.toFixed(1);
    document.getElementById("tabaccocordapricesell").innerHTML = tabaccoCordaPriceSell.toFixed(1);
    document.getElementById("tabaccocordaprice").innerHTML = tabaccoCordaPrice.toFixed(1);
    document.getElementById("tabaccocordapricesell").innerHTML = tabaccoCordaPriceSell.toFixed(1);
    document.getElementById("sugarcordaprice").innerHTML = sugarCordaPrice.toFixed(1);
    document.getElementById("sugarcordapricesell").innerHTML = sugarCordaPriceSell.toFixed(1);
}

function cordaConsumption() {
    foodCordaStock -= 80;
    foodCordaStockAvailable = foodCordaStock - 960;
    document.getElementById("foodcordastock").innerHTML = foodCordaStockAvailable;
    rumCordaStock -= 20;
    rumCordaStockAvailable = rumCordaStock - 240;
    document.getElementById("rumcordastock").innerHTML = rumCordaStockAvailable;
    timberCordaStock -= 80;
    timberCordaStockAvailable = timberCordaStock - 960;
    document.getElementById("timbercordastock").innerHTML = timberCordaStockAvailable;
    toolsCordaStock -= 20;
    toolsCordaStockAvailable = toolsCordaStock - 240;
    document.getElementById("toolscordastock").innerHTML = toolsCordaStockAvailable;
    textilCordaStock -= 4;
    textilCordaStockAvailable = textilCordaStock - 48;
    document.getElementById("textilcordastock").innerHTML = textilCordaStockAvailable;
    gunsCordaStock -= 4;
    gunsCordaStockAvailable = gunsCordaStock - 48;
    document.getElementById("gunscordastock").innerHTML = gunsCordaStockAvailable;
    slavesCordaStock -= 15;
    slavesCordaStockAvailable = slavesCordaStock - 180;
    document.getElementById("slavescordastock").innerHTML = slavesCordaStockAvailable;
}
function cordaProduction() {
    rumCordaStock += 1230;
    rumCordaStockAvailable = rumCordaStock - 240;
    document.getElementById("rumcordastock").innerHTML = rumCordaStockAvailable;
    sugarCordaStock += 800;
    sugarCordaStockAvailable = sugarCordaStock - 10;
    document.getElementById("sugarcordastock").innerHTML = sugarCordaStockAvailable;
    timberCordaStock += 600;
    timberCordaStockAvailable = timberCordaStock - 960;
    document.getElementById("timbercordastock").innerHTML = timberCordaStockAvailable;
    cordaOverflow()
}
function cordaFoodProduction() {
    foodCordaStock += 1100;
    foodCordaStockAvailable = foodCordaStock - 960;
    document.getElementById("foodcordastock").innerHTML = foodCordaStockAvailable;
}

function cordaOverflow() {
    if (foodCordaStock > 2000) {foodCordaStock -= 900}
    if (rumCordaStock > 5000) {rumCordaStock -= 300}
    if (timberCordaStock > 3000) {timberCordaStock -= 700}
    if (toolsCordaStock > 750) {toolsCordaStock -= 300}
    if (textilCordaStock > 150) {textilCordaStock -= 60}
    if (gunsCordaStock > 150) {gunsCordaStock -= 60}
    if (slavesCordaStock > 350) {slavesCordaStock -= 60}
    if (cottonCordaStock > 50) {cottonCordaStock -= 50}
    if (sugarCordaStock > 2000) {sugarCordaStock -= 50}
    if (tabaccoCordaStock > 50) {tabaccoCordaStock -= 50}
}



// LA CORDA
// Food

function foodCordaBuy() {
    if (goldReserve >= foodCordaPrice && foodCordaStock > 960 && inventoryStatus <= 190){
        goldReserve -= foodCordaPrice;
        foodReserve += 10;
        foodCordaStock -= 10;
        foodCordaPrice = (960 * 50)/ foodCordaStock;
        foodCordaPriceSell = (foodCordaStock * foodCordaPrice) / (foodCordaStock + 10);
        inventoryStatus += 10;
        foodCordaStockAvailable = foodCordaStock - 960;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodcordastock").innerHTML = foodCordaStockAvailable;
        document.getElementById("foodcordaprice").innerHTML = foodCordaPrice.toFixed(1);
        document.getElementById("foodcordapricesell").innerHTML = foodCordaPriceSell.toFixed(1);
    }
    if (goldReserve < foodCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(foodCordaStock <= 960) {
        document.getElementById("foodcordastock").style.background = "red";
        setTimeout(function(){document.getElementById("foodcordastock").style.background = "transparent"}, 1000)
    }
}
function foodCordaSell() {
    if (foodReserve > 10) {
        foodReserve -= 10;
        foodCordaStock += 10;
        goldReserve += foodCordaPriceSell;
        foodCordaPrice = (960 * 50)/ foodCordaStock;
        foodCordaPriceSell = (foodCordaStock * foodCordaPrice) / (foodCordaStock + 10)  
        inventoryStatus -= 10;
        foodCordaStockAvailable = foodCordaStock - 960;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodcordastock").innerHTML = foodCordaStockAvailable;
        document.getElementById("foodcordaprice").innerHTML = foodCordaPrice.toFixed(1);
        document.getElementById("foodcordapricesell").innerHTML = foodCordaPriceSell.toFixed(1);
    }
    if (foodReserve < 10) {
        document.getElementById("food").style.background = "red";
        setTimeout(function(){document.getElementById("food").style.background = "transparent"}, 1000)
    }
}



// LA CORDA
//  Rum

function rumCordaBuy() {
    if (goldReserve >= rumCordaPrice && rumCordaStock > 240 && inventoryStatus <= 190){
        goldReserve -= rumCordaPrice;
        rumReserve += 10;
        rumCordaStock -= 10;
        rumCordaPrice = (240 * 200)/ rumCordaStock;
        rumCordaPriceSell = (rumCordaStock * rumCordaPrice) / (rumCordaStock + 10);
        inventoryStatus += 10;
        rumCordaStockAvailable = rumCordaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumcordastock").innerHTML = rumCordaStockAvailable;
        document.getElementById("rumcordaprice").innerHTML = rumCordaPrice.toFixed(1);
        document.getElementById("rumcordapricesell").innerHTML = rumCordaPriceSell.toFixed(1);
    }
    if (goldReserve < rumCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(rumCordaStock <= 240) {
        document.getElementById("rumcordastock").style.background = "red";
        setTimeout(function(){document.getElementById("rumcordastock").style.background = "transparent"}, 1000)
    }
}
function rumCordaSell() {
    if (rumReserve >= 10){
        rumReserve -= 10;
        rumCordaStock += 10;
        goldReserve += rumCordaPriceSell;
        rumCordaPrice = (240 * 200)/ rumCordaStock;
        rumCordaPriceSell = (rumCordaStock * rumCordaPrice) / (rumCordaStock + 10)  
        inventoryStatus -= 10;
        rumCordaStockAvailable = rumCordaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumcordastock").innerHTML = rumCordaStockAvailable;
        document.getElementById("rumcordaprice").innerHTML = rumCordaPrice.toFixed(1);
        document.getElementById("rumcordapricesell").innerHTML = rumCordaPriceSell.toFixed(1);
    }
    if (rumReserve < 10) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Timber

function timberCordaBuy() {
    if (goldReserve >= timberCordaPrice && timberCordaStock > 960 && inventoryStatus <= 190){
        goldReserve -= timberCordaPrice;
        timberReserve += 10;
        timberCordaStock -= 10;
        timberCordaPrice = (960 * 60)/ timberCordaStock;
        timberCordaPriceSell = (timberCordaStock * timberCordaPrice) / (timberCordaStock + 10);
        inventoryStatus += 10;
        timberCordaStockAvailable = timberCordaStock - 960;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbercordastock").innerHTML = timberCordaStockAvailable;
        document.getElementById("timbercordaprice").innerHTML = timberCordaPrice.toFixed(1);
        document.getElementById("timbercordapricesell").innerHTML = timberCordaPriceSell.toFixed(1);
    }
    if (goldReserve < timberCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(timberCordaStock <= 960) {
        document.getElementById("timbercordastock").style.background = "red";
        setTimeout(function(){document.getElementById("timbercordastock").style.background = "transparent"}, 1000)
    }
}
function timberCordaSell() {
    if (timberReserve >= 10){
        timberReserve -= 10;
        timberCordaStock += 10;
        goldReserve += timberCordaPriceSell;
        timberCordaPrice = (960 * 60)/ timberCordaStock;
        timberCordaPriceSell = (timberCordaStock * timberCordaPrice) / (timberCordaStock + 10)  
        inventoryStatus -= 10;
        timberCordaStockAvailable = timberCordaStock - 960;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbercordastock").innerHTML = timberCordaStockAvailable;
        document.getElementById("timbercordaprice").innerHTML = timberCordaPrice.toFixed(1);
        document.getElementById("timbercordapricesell").innerHTML = timberCordaPriceSell.toFixed(1);
    }
    if (timberReserve < 10) {
        document.getElementById("timber").style.background = "red";
        setTimeout(function(){document.getElementById("timber").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Tools

function toolsCordaBuy() {
    if (goldReserve >= toolsCordaPrice && toolsCordaStock > 240 && inventoryStatus <= 190){
        goldReserve -= toolsCordaPrice;
        toolsReserve += 10;
        toolsCordaStock -= 10;
        toolsCordaPrice = (240 * 300)/ toolsCordaStock;
        toolsCordaPriceSell = (toolsCordaStock * toolsCordaPrice) / (toolsCordaStock + 10); 
        inventoryStatus += 10;
        toolsCordaStockAvailable = toolsCordaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolscordastock").innerHTML = toolsCordaStockAvailable;
        document.getElementById("toolscordaprice").innerHTML = toolsCordaPrice.toFixed(1);
        document.getElementById("toolscordapricesell").innerHTML = toolsCordaPriceSell.toFixed(1);
    }
    if (goldReserve < toolsCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(toolsCordaStock <= 240) {
        document.getElementById("toolscordastock").style.background = "red";
        setTimeout(function(){document.getElementById("toolscordastock").style.background = "transparent"}, 1000)
    }
}
function toolsCordaSell() {
    if (toolsReserve >= 10){
        toolsReserve -= 10;
        toolsCordaStock += 10;
        goldReserve += toolsCordaPriceSell;
        toolsCordaPrice = (240 * 300)/ toolsCordaStock;
        toolsCordaPriceSell = (toolsCordaStock * toolsCordaPrice) / (toolsCordaStock + 10)  
        inventoryStatus -= 10;
        toolsCordaStockAvailable = toolsCordaStock - 240;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolscordastock").innerHTML = toolsCordaStockAvailable;
        document.getElementById("toolscordaprice").innerHTML = toolsCordaPrice.toFixed(1);
        document.getElementById("toolscordapricesell").innerHTML = toolsCordaPriceSell.toFixed(1);
    }
    if (toolsReserve < 10) {
        document.getElementById("tools").style.background = "red";
        setTimeout(function(){document.getElementById("tools").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Textil

function textilCordaBuy() {
    if (goldReserve >= textilCordaPrice && textilCordaStock > 48 && inventoryStatus <= 190){
        goldReserve -= textilCordaPrice;
        textilReserve += 10;
        textilCordaStock -= 10;
        textilCordaPrice = (48 * 500)/ textilCordaStock;
        textilCordaPriceSell = (textilCordaStock * textilCordaPrice) / (textilCordaStock + 10);
        inventoryStatus += 10;
        textilCordaStockAvailable = textilCordaStock - 48;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilcordastock").innerHTML = textilCordaStockAvailable;
        document.getElementById("textilcordaprice").innerHTML = textilCordaPrice.toFixed(1);
        document.getElementById("textilcordapricesell").innerHTML = textilCordaPriceSell.toFixed(1);
    }
    if (goldReserve < textilCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(textilCordaStock <= 48) {
        document.getElementById("textilcordastock").style.background = "red";
        setTimeout(function(){document.getElementById("textilcordastock").style.background = "transparent"}, 1000)
    }
}
function textilCordaSell() {
    if (textilReserve >= 10){
        textilReserve -= 10;
        textilCordaStock += 10;
        goldReserve += textilCordaPriceSell;
        textilCordaPrice = (48 * 500)/ textilCordaStock;
        textilCordaPriceSell = (textilCordaStock * textilCordaPrice) / (textilCordaStock + 10)  
        inventoryStatus -= 10;
        textilCordaStockAvailable = textilCordaStock - 48;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilcordastock").innerHTML = textilCordaStockAvailable;
        document.getElementById("textilcordaprice").innerHTML = textilCordaPrice.toFixed(1);
        document.getElementById("textilcordapricesell").innerHTML = textilCordaPriceSell.toFixed(1);
    }
    if (textilReserve < 10) {
        document.getElementById("textil").style.background = "red";
        setTimeout(function(){document.getElementById("textil").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Guns

function gunsCordaBuy() {
    if (goldReserve >= gunsCordaPrice && gunsCordaStock > 48 && inventoryStatus <= 190){
        goldReserve -= gunsCordaPrice;
        gunsReserve += 10;
        gunsCordaStock -= 10;
        gunsCordaPrice = (48 * 750)/ gunsCordaStock;
        gunsCordaPriceSell = (gunsCordaStock * gunsCordaPrice) / (gunsCordaStock + 10);
        inventoryStatus += 10;
        gunsCordaStockAvailable = gunsCordaStock - 48;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunscordastock").innerHTML = gunsCordaStockAvailable;
        document.getElementById("gunscordaprice").innerHTML = gunsCordaPrice.toFixed(1);
        document.getElementById("gunscordapricesell").innerHTML = gunsCordaPriceSell.toFixed(1);
    }
    if (goldReserve < gunsCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(gunsCordaStock <= 48) {
        document.getElementById("gunscordastock").style.background = "red";
        setTimeout(function(){document.getElementById("gunscordastock").style.background = "transparent"}, 1000)
    }
}
function gunsCordaSell() {
    if (gunsReserve >= 10){
        gunsReserve -= 10;
        gunsCordaStock += 10;
        goldReserve += gunsCordaPriceSell;
        gunsCordaPrice = (48 * 750)/ gunsCordaStock;
        gunsCordaPriceSell = (gunsCordaStock * gunsCordaPrice) / (gunsCordaStock + 10)  
        inventoryStatus -= 10;
        gunsCordaStockAvailable = gunsCordaStock - 48;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunscordastock").innerHTML = gunsCordaStockAvailable;
        document.getElementById("gunscordaprice").innerHTML = gunsCordaPrice.toFixed(1);
        document.getElementById("gunscordapricesell").innerHTML = gunsCordaPriceSell.toFixed(1);
    }
    if (gunsReserve < 10) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Slaves

function slavesCordaBuy() {
    if (goldReserve >= slavesCordaPrice && slavesCordaStock > 48 && inventoryStatus <= 190){
        goldReserve -= slavesCordaPrice;
        slavesReserve += 10;
        slavesCordaStock -= 10;
        slavesCordaPrice = (180 * 500)/ slavesCordaStock;
        slavesCordaPriceSell = (slavesCordaStock * slavesCordaPrice) / (slavesCordaStock + 10);
        inventoryStatus += 10;
        slavesCordaStockAvailable = slavesCordaStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavescordastock").innerHTML = slavesCordaStockAvailable;
        document.getElementById("slavescordaprice").innerHTML = slavesCordaPrice.toFixed(1);
        document.getElementById("slavescordapricesell").innerHTML = slavesCordaPriceSell.toFixed(1);
    }
    if (goldReserve < slavesCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(slavesCordaStock <= 48) {
        document.getElementById("slavescordastock").style.background = "red";
        setTimeout(function(){document.getElementById("slavescordastock").style.background = "transparent"}, 1000)
    }
}
function slavesCordaSell() {
    if (slavesReserve >= 10){
        slavesReserve -= 10;
        slavesCordaStock += 10;
        goldReserve += slavesCordaPriceSell;
        slavesCordaPrice = (180 * 500)/ slavesCordaStock;
        slavesCordaPriceSell = (slavesCordaStock * slavesCordaPrice) / (slavesCordaStock + 10)  
        inventoryStatus -= 10;
        slavesCordaStockAvailable = slavesCordaStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavescordastock").innerHTML = slavesCordaStockAvailable;
        document.getElementById("slavescordaprice").innerHTML = slavesCordaPrice.toFixed(1);
        document.getElementById("slavescordapricesell").innerHTML = slavesCordaPriceSell.toFixed(1);
    }
    if (slavesReserve < 10) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Cotton

function cottonCordaBuy() {
    if (goldReserve >= cottonCordaPrice && cottonCordaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= cottonCordaPrice;
        cottonReserve += 10;
        cottonCordaStock -= 10;
        cottonCordaPrice = (100 * 50)/ cottonCordaStock;
        cottonCordaPriceSell = (cottonCordaStock * cottonCordaPrice) / (cottonCordaStock + 10); 
        inventoryStatus += 10;
        cottonCordaStockAvailable = cottonCordaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottoncordastock").innerHTML = cottonCordaStockAvailable;
        document.getElementById("cottoncordaprice").innerHTML = cottonCordaPrice.toFixed(1);
        document.getElementById("cottoncordapricesell").innerHTML = cottonCordaPriceSell.toFixed(1);
    }
    if (goldReserve < cottonCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(cottonCordaStock < 20) {
        document.getElementById("cottoncordastock").style.background = "red";
        setTimeout(function(){document.getElementById("cottoncordastock").style.background = "transparent"}, 1000)
    }
}
function cottonCordaSell() {
    if (cottonReserve >= 10){
        cottonReserve -= 10;
        cottonCordaStock += 10;
        goldReserve += cottonCordaPriceSell;
        cottonCordaPrice = (100 * 50)/ cottonCordaStock;
        cottonCordaPriceSell = (cottonCordaStock * cottonCordaPrice) / (cottonCordaStock + 10) 
        inventoryStatus -= 10;
        cottonCordaStockAvailable = cottonCordaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottoncordastock").innerHTML = cottonCordaStockAvailable;
        document.getElementById("cottoncordaprice").innerHTML = cottonCordaPrice.toFixed(1);
        document.getElementById("cottoncordapricesell").innerHTML = cottonCordaPriceSell.toFixed(1);
    }
    if (cottonReserve < 10) {
        document.getElementById("cotton").style.background = "red";
        setTimeout(function(){document.getElementById("cotton").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Sugar

function sugarCordaBuy() {
    if (goldReserve >= sugarCordaPrice && sugarCordaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= sugarCordaPrice;
        sugarReserve += 10;
        sugarCordaStock -= 10;
        sugarCordaPrice = (500 * 100)/ sugarCordaStock;
        sugarCordaPriceSell = (sugarCordaStock * sugarCordaPrice) / (sugarCordaStock + 10);
        inventoryStatus += 10;
        sugarCordaStockAvailable = sugarCordaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarcordastock").innerHTML = sugarCordaStockAvailable;
        document.getElementById("sugarcordaprice").innerHTML = sugarCordaPrice.toFixed(1);
        document.getElementById("sugarcordapricesell").innerHTML = sugarCordaPriceSell.toFixed(1);
    }
    if (goldReserve < sugarCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(sugarCordaStock < 20) {
        document.getElementById("sugarcordastock").style.background = "red";
        setTimeout(function(){document.getElementById("sugarcordastock").style.background = "transparent"}, 1000)
    }
}
function sugarCordaSell() {
    if (sugarReserve >= 10){
        sugarReserve -= 10;
        sugarCordaStock += 10;
        goldReserve += sugarCordaPriceSell;
        sugarCordaPrice = (500 * 100)/ sugarCordaStock;
        sugarCordaPriceSell = (sugarCordaStock * sugarCordaPrice) / (sugarCordaStock + 10)  
        inventoryStatus -= 10;
        sugarCordaStockAvailable = sugarCordaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarcordastock").innerHTML = sugarCordaStockAvailable;
        document.getElementById("sugarcordaprice").innerHTML = sugarCordaPrice.toFixed(1);
        document.getElementById("sugarcordapricesell").innerHTML = sugarCordaPriceSell.toFixed(1);
    }
    if (sugarReserve < 10) {
        document.getElementById("sugar").style.background = "red";
        setTimeout(function(){document.getElementById("sugar").style.background = "transparent"}, 1000)
    }
}


// LA CORDA
// Tabacco

function tabaccoCordaBuy() {
    if (goldReserve >= tabaccoCordaPrice && tabaccoCordaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= tabaccoCordaPrice;
        tabaccoReserve += 10;
        tabaccoCordaStock -= 10;
        tabaccoCordaPrice = (50 * 150)/ tabaccoCordaStock;
        tabaccoCordaPriceSell = (tabaccoCordaStock * tabaccoCordaPrice) / (tabaccoCordaStock + 10);
        inventoryStatus += 10;
        tabaccoCordaStockAvailable = tabaccoCordaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccocordastock").innerHTML = tabaccoCordaStockAvailable;
        document.getElementById("tabaccocordaprice").innerHTML = tabaccoCordaPrice.toFixed(1);
        document.getElementById("tabaccocordapricesell").innerHTML = tabaccoCordaPriceSell.toFixed(1);
    }
    if (goldReserve < tabaccoCordaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(tabaccoCordaStock < 20) {
        document.getElementById("tabaccocordastock").style.background = "red";
        setTimeout(function(){document.getElementById("tabaccocordastock").style.background = "transparent"}, 1000)
    }
}
function tabaccoCordaSell() {
    if (tabaccoReserve >= 10){
        tabaccoReserve -= 10;
        tabaccoCordaStock += 10;
        goldReserve += tabaccoCordaPriceSell;
        tabaccoCordaPrice = (50 * 150)/ tabaccoCordaStock;
        tabaccoCordaPriceSell = (tabaccoCordaStock * tabaccoCordaPrice) / (tabaccoCordaStock + 10) ; 
        inventoryStatus -= 10;
        tabaccoCordaStockAvailable = tabaccoCordaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccocordastock").innerHTML = tabaccoCordaStockAvailable;
        document.getElementById("tabaccocordaprice").innerHTML = tabaccoCordaPrice.toFixed(1);
        document.getElementById("tabaccocordapricesell").innerHTML = tabaccoCordaPriceSell.toFixed(1);
    }
    if (tabaccoReserve < 10) {
        document.getElementById("tabacco").style.background = "red";
        setTimeout(function(){document.getElementById("tabacco").style.background = "transparent"}, 1000)
    }
}






// CASTELIO
// CITY AI

setInterval(function() {priceCastelioActualization(),castelioStockAvailable()}, 1000);
setInterval(function() {castelioProduction(), castelioTradeExport()}, 144000);
setInterval(function() {castelioFoodProduction()}, 288000);

function castelioStockAvailable() {
    document.getElementById("foodcasteliostock").innerHTML = foodCastelioStockAvailable;
    document.getElementById("rumcasteliostock").innerHTML = rumCastelioStockAvailable;
    document.getElementById("timbercasteliostock").innerHTML = timberCastelioStockAvailable;
    document.getElementById("toolscasteliostock").innerHTML = toolsCastelioStockAvailable;
    document.getElementById("textilcasteliostock").innerHTML = textilCastelioStockAvailable;
    document.getElementById("gunscasteliostock").innerHTML = gunsCastelioStockAvailable;
    document.getElementById("slavescasteliostock").innerHTML = slavesCastelioStockAvailable;
    document.getElementById("cottoncasteliostock").innerHTML = cottonCastelioStockAvailable;
    document.getElementById("tabaccocasteliostock").innerHTML = tabaccoCastelioStockAvailable;
    document.getElementById("sugarcasteliostock").innerHTML = sugarCastelioStockAvailable;
    if(foodCastelioStock < 720){
        foodCastelioStockAvailable = 0; 
        document.getElementById("foodcasteliostock").innerHTML = 0
    }
    if(rumCastelioStock < 180){
        rumCastelioStockAvailable = 0; 
        document.getElementById("rumcasteliostock").innerHTML = 0
    }
    if(timberCastelioStock < 720){
        timberCastelioStockAvailable = 0; 
        document.getElementById("timbercasteliostock").innerHTML = 0
    }
    if(toolsCastelioStock < 180){
        toolsCastelioStockAvailable = 0; 
        document.getElementById("toolscasteliostock").innerHTML = 0
    }
    if(textilCastelioStock < 36){
        textilCastelioStockAvailable = 0; 
        document.getElementById("textilcasteliostock").innerHTML = 0
    }
    if(gunsCastelioStock < 180){
        gunsCastelioStockAvailable = 0; 
        document.getElementById("gunscasteliostock").innerHTML = 0
    }
    if(slavesCastelioStock < 36){
        slavesCastelioStockAvailable = 0; 
        document.getElementById("slavescasteliostock").innerHTML = 0
    }
    if(cottonCastelioStock < 10){
        cottonCastelioStockAvailable = 0; 
        document.getElementById("cottoncasteliostock").innerHTML = 0
    }
    if(sugarCastelioStock < 10){
        sugarCastelioStockAvailable = 0; 
        document.getElementById("sugarcasteliostock").innerHTML = 0
    }
    if(tabaccoCastelioStock < 10){
        tabaccoCastelioStockAvailable = 0; 
        document.getElementById("tabaccocasteliostock").innerHTML = 0
    }
}

function priceCastelioActualization(){
    foodCastelioPrice = (720 * 50)/ foodCastelioStock;
    foodCastelioPriceSell = (foodCastelioStock * foodCastelioPrice) / (foodCastelioStock + 10);
    rumCastelioPrice = (180 * 180)/ rumCastelioStock;
    rumCastelioPriceSell = (rumCastelioStock * rumCastelioPrice) / (rumCastelioStock + 10); 
    timberCastelioPrice = (720 * 60)/ timberCastelioStock;
    timberCastelioPriceSell = (timberCastelioStock * timberCastelioPrice) / (timberCastelioStock + 10);
    toolsCastelioPrice = (180 * 300)/ toolsCastelioStock;
    toolsCastelioPriceSell = (toolsCastelioStock * toolsCastelioPrice) / (toolsCastelioStock + 10);
    textilCastelioPrice = (36 * 500)/ textilCastelioStock;
    textilCastelioPriceSell = (textilCastelioStock * textilCastelioPrice) / (textilCastelioStock + 10);
    gunsCastelioPrice = (180 * 750)/ gunsCastelioStock;
    gunsCastelioPriceSell = (gunsCastelioStock * gunsCastelioPrice) / (gunsCastelioStock + 10);  
    slavesCastelioPrice = (36 * 400)/ slavesCastelioStock;
    slavesCastelioPriceSell = (slavesCastelioStock * slavesCastelioPrice) / (slavesCastelioStock + 10);
    cottonCastelioPrice = (1000 * 100)/ cottonCastelioStock;
    cottonCastelioPriceSell = (cottonCastelioStock * cottonCastelioPrice) / (cottonCastelioStock + 10);
    sugarCastelioPrice = (50 * 100)/ sugarCastelioStock;
    sugarCastelioPriceSell = (sugarCastelioStock * sugarCastelioPrice) / (sugarCastelioStock + 10);
    tabaccoCastelioPrice = (50 * 150)/ tabaccoCastelioStock;
    tabaccoCastelioPriceSell = (tabaccoCastelioStock * tabaccoCastelioPrice) / (tabaccoCastelioStock + 10); 
    document.getElementById("foodcastelioprice").innerHTML = foodCastelioPrice.toFixed(1);
    document.getElementById("foodcasteliopricesell").innerHTML = foodCastelioPriceSell.toFixed(1);
    document.getElementById("rumcastelioprice").innerHTML = rumCastelioPrice.toFixed(1);
    document.getElementById("rumcasteliopricesell").innerHTML = rumCastelioPriceSell.toFixed(1);
    document.getElementById("timbercastelioprice").innerHTML = timberCastelioPrice.toFixed(1);
    document.getElementById("timbercasteliopricesell").innerHTML = timberCastelioPriceSell.toFixed(1);
    document.getElementById("toolscastelioprice").innerHTML = toolsCastelioPrice.toFixed(1);
    document.getElementById("toolscasteliopricesell").innerHTML = toolsCastelioPriceSell.toFixed(1);
    document.getElementById("textilcastelioprice").innerHTML = textilCastelioPrice.toFixed(1);
    document.getElementById("textilcasteliopricesell").innerHTML = textilCastelioPriceSell.toFixed(1);
    document.getElementById("gunscastelioprice").innerHTML = gunsCastelioPrice.toFixed(1);
    document.getElementById("gunscasteliopricesell").innerHTML = gunsCastelioPriceSell.toFixed(1);
    document.getElementById("slavescastelioprice").innerHTML = slavesCastelioPrice.toFixed(1);
    document.getElementById("slavescasteliopricesell").innerHTML = slavesCastelioPriceSell.toFixed(1);
    document.getElementById("cottoncastelioprice").innerHTML = cottonCastelioPrice.toFixed(1);
    document.getElementById("cottoncasteliopricesell").innerHTML = cottonCastelioPriceSell.toFixed(1);
    document.getElementById("tabaccocastelioprice").innerHTML = tabaccoCastelioPrice.toFixed(1);
    document.getElementById("tabaccocasteliopricesell").innerHTML = tabaccoCastelioPriceSell.toFixed(1);
    document.getElementById("tabaccocastelioprice").innerHTML = tabaccoCastelioPrice.toFixed(1);
    document.getElementById("tabaccocasteliopricesell").innerHTML = tabaccoCastelioPriceSell.toFixed(1);
    document.getElementById("sugarcastelioprice").innerHTML = sugarCastelioPrice.toFixed(1);
    document.getElementById("sugarcasteliopricesell").innerHTML = sugarCastelioPriceSell.toFixed(1);
}

function castelioConsumption() {
    foodCastelioStock -= 60;
    foodCastelioStockAvailable = foodCastelioStock - 720;
    document.getElementById("foodcasteliostock").innerHTML = foodCastelioStockAvailable;
    rumCastelioStock -= 15;
    rumCastelioStockAvailable = rumCastelioStock - 180;
    document.getElementById("rumcasteliostock").innerHTML = rumCastelioStockAvailable;
    timberCastelioStock -= 60;
    timberCastelioStockAvailable = timberCastelioStock - 720;
    document.getElementById("timbercasteliostock").innerHTML = timberCastelioStockAvailable;
    toolsCastelioStock -= 15;
    toolsCastelioStockAvailable = toolsCastelioStock - 180;
    document.getElementById("toolscasteliostock").innerHTML = toolsCastelioStockAvailable;
    textilCastelioStock -= 3;
    textilCastelioStockAvailable = textilCastelioStock - 36;
    document.getElementById("textilcasteliostock").innerHTML = textilCastelioStockAvailable;
    gunsCastelioStock -= 15;
    gunsCastelioStockAvailable = gunsCastelioStock - 180;
    document.getElementById("gunscasteliostock").innerHTML = gunsCastelioStockAvailable;
    slavesCastelioStock -= 3;
    slavesCastelioStockAvailable = slavesCastelioStock - 36;
    document.getElementById("slavescasteliostock").innerHTML = slavesCastelioStockAvailable;
}
function castelioProduction() {
    rumCastelioStock += 115;
    rumCastelioStockAvailable = rumCastelioStock - 180;
    document.getElementById("rumcasteliostock").innerHTML = rumCastelioStockAvailable;
    cottonCastelioStock += 900;
    cottonCastelioStockAvailable = cottonCastelioStock - 10;
    document.getElementById("cottoncasteliostock").innerHTML = cottonCastelioStockAvailable;
    timberCastelioStock += 450;
    timberCastelioStockAvailable = timberCastelioStock - 720;
    document.getElementById("timbercasteliostock").innerHTML = timberCastelioStockAvailable;
    castelioOverflow()
}
function castelioFoodProduction() {
    foodCastelioStock += 900;
    foodCastelioStockAvailable = foodCastelioStock - 720;
    document.getElementById("foodcasteliostock").innerHTML = foodCastelioStockAvailable;
}
function castelioTradeExport() {
    setTimeout(function() {
        cottonCastelioStock -= 800;
        cottonCastelioStockAvailable = cottonCastelioStock - 10;
        document.getElementById("cottoncasteliostock").innerHTML = cottonCastelioStockAvailable;
    }, 3000);
    setTimeout(function() {
        rumCordaStock -= 1050;
        rumCordaStockAvailable = rumCordaStock - 240;
        document.getElementById("rumcordastock").innerHTML = rumCordaStockAvailable;
        sugarCordaStock -= 700;
        sugarCordaStockAvailable = sugarCordaStock - 10;
        document.getElementById("sugarcordastock").innerHTML = sugarCordaStockAvailable;
        toolsCordaStock += 130;
        toolsCordaStockAvailable = toolsCordaStock - 240;
        document.getElementById("toolscordastock").innerHTML = toolsCordaStockAvailable;
        textilCordaStock += 38;
        textilCordaStockAvailable = textilCordaStock - 48;
        document.getElementById("textilcordastock").innerHTML = textilCordaStockAvailable;
        slavesCordaStock += 100;
        slavesCordaStockAvailable = slavesCordaStock - 180;
        document.getElementById("slavescordastock").innerHTML = slavesCordaStockAvailable;
        gunsCordaStock += 38;
        gunsCordaStockAvailable = gunsCordaStock - 48;
        document.getElementById("gunscordastock").innerHTML = gunsCordaStockAvailable;
    }, 12000);
    setTimeout(function() {
        rumGarnietStock += 235;
        rumGarnietStockAvailable = rumGarnietStock - 420;
        document.getElementById("rumgarnietstock").innerHTML = rumGarnietStockAvailable;
    }, 55000);
    setTimeout(function() {
        rumCarolinaStock += 815;
        rumCarolinaStockAvailable = rumCarolinaStock - 600;
        document.getElementById("rumcarolinastock").innerHTML = rumCarolinaStockAvailable;
        sugarCarolinaStock += 700;
        sugarCarolinaStockAvailable = sugarCarolinaStock - 10;
        document.getElementById("sugarcarolinastock").innerHTML = sugarCarolinaStockAvailable;
        toolsCarolinaStock -= 230;
        toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
        document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStockAvailable;
        textilCarolinaStock -= 63;
        textilCarolinaStockAvailable = textilCarolinaStock - 120;
        document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStockAvailable;
        slavesCarolinaStock -= 125;
        slavesCarolinaStockAvailable = slavesCarolinaStock - 120;
        document.getElementById("slavescarolinastock").innerHTML = slavesCarolinaStockAvailable;
        gunsCarolinaStock -= 133;
        gunsCarolinaStockAvailable = gunsCarolinaStock - 120;
        document.getElementById("gunscarolinastock").innerHTML = gunsCarolinaStockAvailable;
        cottonCarolinaStock += 800;
        cottonCarolinaStockAvailable = cottonCarolinaStock - 10;
        document.getElementById("cottoncarolinastock").innerHTML = cottonCarolinaStockAvailable;
    }, 76000);
    setTimeout(function() {
        toolsCastelioStock += 100;
        toolsCastelioStockAvailable = toolsCastelioStock - 240;
        document.getElementById("toolscasteliostock").innerHTML = toolsCastelioStockAvailable;
        textilCastelioStock += 25;
        textilCastelioStockAvailable = textilCastelioStock - 48;
        document.getElementById("textilcasteliostock").innerHTML = textilCastelioStockAvailable;
        slavesCastelioStock += 25;
        slavesCastelioStockAvailable = slavesCastelioStock - 48;
        document.getElementById("slavescasteliostock").innerHTML = slavesCastelioStockAvailable;
        gunsCastelioStock += 100;
        gunsCastelioStockAvailable = gunsCastelioStock - 180;
        document.getElementById("gunscasteliostock").innerHTML = gunsCastelioStockAvailable;
    }, 130000); 
}
function castelioOverflow() {
    if (foodCastelioStock > 1500) {foodCastelioStock -= 700}
    if (rumCastelioStock > 1200) {rumCastelioStock -= 300}
    if (timberCastelioStock > 2000) {timberCastelioStock -= 700}
    if (toolsCastelioStock > 600) {toolsCastelioStock -= 300}
    if (textilCastelioStock > 110) {textilCastelioStock -= 60}
    if (gunsCastelioStock > 1000) {gunsCastelioStock -= 60}
    if (slavesCastelioStock > 110) {slavesCastelioStock -= 60}
    if (cottonCastelioStock > 50) {cottonCastelioStock -= 40}
    if (sugarCastelioStock > 2000) {sugarCastelioStock -= 500}
    if (tabaccoCastelioStock > 50) {tabaccoCastelioStock -= 40}
}



// CASTELIO
// Food

function foodCastelioBuy() {
    if (goldReserve >= foodCastelioPrice && foodCastelioStock > 720 && inventoryStatus <= 190){
        goldReserve -= foodCastelioPrice;
        foodReserve += 10;
        foodCastelioStock -= 10;
        foodCastelioPrice = (720 * 50)/ foodCastelioStock;
        foodCastelioPriceSell = (foodCastelioStock * foodCastelioPrice) / (foodCastelioStock + 10);
        inventoryStatus += 10;
        foodCastelioStockAvailable = foodCastelioStock - 720;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodcasteliostock").innerHTML = foodCastelioStockAvailable;
        document.getElementById("foodcastelioprice").innerHTML = foodCastelioPrice.toFixed(1);
        document.getElementById("foodcasteliopricesell").innerHTML = foodCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < foodCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(foodCastelioStock <= 720) {
        document.getElementById("foodcasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("foodcasteliostock").style.background = "transparent"}, 1000)
    }
}
function foodCastelioSell() {
    if (foodReserve > 10) {
        foodReserve -= 10;
        foodCastelioStock += 10;
        goldReserve += foodCastelioPriceSell;
        foodCastelioPrice = (720 * 50)/ foodCastelioStock;
        foodCastelioPriceSell = (foodCastelioStock * foodCastelioPrice) / (foodCastelioStock + 10)  
        inventoryStatus -= 10;
        foodCastelioStockAvailable = foodCastelioStock - 720;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodcasteliostock").innerHTML = foodCastelioStockAvailable;
        document.getElementById("foodcastelioprice").innerHTML = foodCastelioPrice.toFixed(1);
        document.getElementById("foodcasteliopricesell").innerHTML = foodCastelioPriceSell.toFixed(1);
    }
    if (foodReserve < 10) {
        document.getElementById("food").style.background = "red";
        setTimeout(function(){document.getElementById("food").style.background = "transparent"}, 1000)
    }
}



// CASTELIO
//  Rum

function rumCastelioBuy() {
    if (goldReserve >= rumCastelioPrice && rumCastelioStock > 180 && inventoryStatus <= 190){
        goldReserve -= rumCastelioPrice;
        rumReserve += 10;
        rumCastelioStock -= 10;
        rumCastelioPrice = (180 * 180)/ rumCastelioStock;
        rumCastelioPriceSell = (rumCastelioStock * rumCastelioPrice) / (rumCastelioStock + 10);
        inventoryStatus += 10;
        rumCastelioStockAvailable = rumCastelioStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumcasteliostock").innerHTML = rumCastelioStockAvailable;
        document.getElementById("rumcastelioprice").innerHTML = rumCastelioPrice.toFixed(1);
        document.getElementById("rumcasteliopricesell").innerHTML = rumCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < rumCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(rumCastelioStock <= 180) {
        document.getElementById("rumcasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("rumcasteliostock").style.background = "transparent"}, 1000)
    }
}
function rumCastelioSell() {
    if (rumReserve >= 10){
        rumReserve -= 10;
        rumCastelioStock += 10;
        goldReserve += rumCastelioPriceSell;
        rumCastelioPrice = (180 * 180)/ rumCastelioStock;
        rumCastelioPriceSell = (rumCastelioStock * rumCastelioPrice) / (rumCastelioStock + 10)  
        inventoryStatus -= 10;
        rumCastelioStockAvailable = rumCastelioStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumcasteliostock").innerHTML = rumCastelioStockAvailable;
        document.getElementById("rumcastelioprice").innerHTML = rumCastelioPrice.toFixed(1);
        document.getElementById("rumcasteliopricesell").innerHTML = rumCastelioPriceSell.toFixed(1);
    }
    if (rumReserve < 10) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Timber

function timberCastelioBuy() {
    if (goldReserve >= timberCastelioPrice && timberCastelioStock > 720 && inventoryStatus <= 190){
        goldReserve -= timberCastelioPrice;
        timberReserve += 10;
        timberCastelioStock -= 10;
        timberCastelioPrice = (720 * 60)/ timberCastelioStock;
        timberCastelioPriceSell = (timberCastelioStock * timberCastelioPrice) / (timberCastelioStock + 10);
        inventoryStatus += 10;
        timberCastelioStockAvailable = timberCastelioStock - 720;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbercasteliostock").innerHTML = timberCastelioStockAvailable;
        document.getElementById("timbercastelioprice").innerHTML = timberCastelioPrice.toFixed(1);
        document.getElementById("timbercasteliopricesell").innerHTML = timberCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < timberCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(timberCastelioStock <= 720) {
        document.getElementById("timbercasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("timbercasteliostock").style.background = "transparent"}, 1000)
    }
}
function timberCastelioSell() {
    if (timberReserve >= 10){
        timberReserve -= 10;
        timberCastelioStock += 10;
        goldReserve += timberCastelioPriceSell;
        timberCastelioPrice = (720 * 60)/ timberCastelioStock;
        timberCastelioPriceSell = (timberCastelioStock * timberCastelioPrice) / (timberCastelioStock + 10)  
        inventoryStatus -= 10;
        timberCastelioStockAvailable = timberCastelioStock - 720;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbercasteliostock").innerHTML = timberCastelioStockAvailable;
        document.getElementById("timbercastelioprice").innerHTML = timberCastelioPrice.toFixed(1);
        document.getElementById("timbercasteliopricesell").innerHTML = timberCastelioPriceSell.toFixed(1);
    }
    if (timberReserve < 10) {
        document.getElementById("timber").style.background = "red";
        setTimeout(function(){document.getElementById("timber").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Tools

function toolsCastelioBuy() {
    if (goldReserve >= toolsCastelioPrice && toolsCastelioStock > 180 && inventoryStatus <= 190){
        goldReserve -= toolsCastelioPrice;
        toolsReserve += 10;
        toolsCastelioStock -= 10;
        toolsCastelioPrice = (180 * 300)/ toolsCastelioStock;
        toolsCastelioPriceSell = (toolsCastelioStock * toolsCastelioPrice) / (toolsCastelioStock + 10); 
        inventoryStatus += 10;
        toolsCastelioStockAvailable = toolsCastelioStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolscasteliostock").innerHTML = toolsCastelioStockAvailable;
        document.getElementById("toolscastelioprice").innerHTML = toolsCastelioPrice.toFixed(1);
        document.getElementById("toolscasteliopricesell").innerHTML = toolsCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < toolsCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(toolsCastelioStock <= 180) {
        document.getElementById("toolscasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("toolscasteliostock").style.background = "transparent"}, 1000)
    }
}
function toolsCastelioSell() {
    if (toolsReserve >= 10){
        toolsReserve -= 10;
        toolsCastelioStock += 10;
        goldReserve += toolsCastelioPriceSell;
        toolsCastelioPrice = (180 * 300)/ toolsCastelioStock;
        toolsCastelioPriceSell = (toolsCastelioStock * toolsCastelioPrice) / (toolsCastelioStock + 10)  
        inventoryStatus -= 10;
        toolsCastelioStockAvailable = toolsCastelioStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolscasteliostock").innerHTML = toolsCastelioStockAvailable;
        document.getElementById("toolscastelioprice").innerHTML = toolsCastelioPrice.toFixed(1);
        document.getElementById("toolscasteliopricesell").innerHTML = toolsCastelioPriceSell.toFixed(1);
    }
    if (toolsReserve < 10) {
        document.getElementById("tools").style.background = "red";
        setTimeout(function(){document.getElementById("tools").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Textil

function textilCastelioBuy() {
    if (goldReserve >= textilCastelioPrice && textilCastelioStock > 36 && inventoryStatus <= 190){
        goldReserve -= textilCastelioPrice;
        textilReserve += 10;
        textilCastelioStock -= 10;
        textilCastelioPrice = (36 * 500)/ textilCastelioStock;
        textilCastelioPriceSell = (textilCastelioStock * textilCastelioPrice) / (textilCastelioStock + 10);
        inventoryStatus += 10;
        textilCastelioStockAvailable = textilCastelioStock - 36;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilcasteliostock").innerHTML = textilCastelioStockAvailable;
        document.getElementById("textilcastelioprice").innerHTML = textilCastelioPrice.toFixed(1);
        document.getElementById("textilcasteliopricesell").innerHTML = textilCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < textilCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(textilCastelioStock <= 36) {
        document.getElementById("textilcasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("textilcasteliostock").style.background = "transparent"}, 1000)
    }
}
function textilCastelioSell() {
    if (textilReserve >= 10){
        textilReserve -= 10;
        textilCastelioStock += 10;
        goldReserve += textilCastelioPriceSell;
        textilCastelioPrice = (36 * 500)/ textilCastelioStock;
        textilCastelioPriceSell = (textilCastelioStock * textilCastelioPrice) / (textilCastelioStock + 10)  
        inventoryStatus -= 10;
        textilCastelioStockAvailable = textilCastelioStock - 36;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilcasteliostock").innerHTML = textilCastelioStockAvailable;
        document.getElementById("textilcastelioprice").innerHTML = textilCastelioPrice.toFixed(1);
        document.getElementById("textilcasteliopricesell").innerHTML = textilCastelioPriceSell.toFixed(1);
    }
    if (textilReserve < 10) {
        document.getElementById("textil").style.background = "red";
        setTimeout(function(){document.getElementById("textil").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Guns

function gunsCastelioBuy() {
    if (goldReserve >= gunsCastelioPrice && gunsCastelioStock > 36 && inventoryStatus <= 190){
        goldReserve -= gunsCastelioPrice;
        gunsReserve += 10;
        gunsCastelioStock -= 10;
        gunsCastelioPrice = (180 * 750)/ gunsCastelioStock;
        gunsCastelioPriceSell = (gunsCastelioStock * gunsCastelioPrice) / (gunsCastelioStock + 10);
        inventoryStatus += 10;
        gunsCastelioStockAvailable = gunsCastelioStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunscasteliostock").innerHTML = gunsCastelioStockAvailable;
        document.getElementById("gunscastelioprice").innerHTML = gunsCastelioPrice.toFixed(1);
        document.getElementById("gunscasteliopricesell").innerHTML = gunsCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < gunsCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(gunsCastelioStock <= 36) {
        document.getElementById("gunscasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("gunscasteliostock").style.background = "transparent"}, 1000)
    }
}
function gunsCastelioSell() {
    if (gunsReserve >= 10){
        gunsReserve -= 10;
        gunsCastelioStock += 10;
        goldReserve += gunsCastelioPriceSell;
        gunsCastelioPrice = (180 * 750)/ gunsCastelioStock;
        gunsCastelioPriceSell = (gunsCastelioStock * gunsCastelioPrice) / (gunsCastelioStock + 10)  
        inventoryStatus -= 10;
        gunsCastelioStockAvailable = gunsCastelioStock - 180;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunscasteliostock").innerHTML = gunsCastelioStockAvailable;
        document.getElementById("gunscastelioprice").innerHTML = gunsCastelioPrice.toFixed(1);
        document.getElementById("gunscasteliopricesell").innerHTML = gunsCastelioPriceSell.toFixed(1);
    }
    if (gunsReserve < 10) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Slaves

function slavesCastelioBuy() {
    if (goldReserve >= slavesCastelioPrice && slavesCastelioStock > 36 && inventoryStatus <= 190){
        goldReserve -= slavesCastelioPrice;
        slavesReserve += 10;
        slavesCastelioStock -= 10;
        slavesCastelioPrice = (36 * 400)/ slavesCastelioStock;
        slavesCastelioPriceSell = (slavesCastelioStock * slavesCastelioPrice) / (slavesCastelioStock + 10);
        inventoryStatus += 10;
        slavesCastelioStockAvailable = slavesCastelioStock - 36;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavescasteliostock").innerHTML = slavesCastelioStockAvailable;
        document.getElementById("slavescastelioprice").innerHTML = slavesCastelioPrice.toFixed(1);
        document.getElementById("slavescasteliopricesell").innerHTML = slavesCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < slavesCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(slavesCastelioStock <= 36) {
        document.getElementById("slavescasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("slavescasteliostock").style.background = "transparent"}, 1000)
    }
}
function slavesCastelioSell() {
    if (slavesReserve >= 10){
        slavesReserve -= 10;
        slavesCastelioStock += 10;
        goldReserve += slavesCastelioPriceSell;
        slavesCastelioPrice = (36 * 400)/ slavesCastelioStock;
        slavesCastelioPriceSell = (slavesCastelioStock * slavesCastelioPrice) / (slavesCastelioStock + 10)  
        inventoryStatus -= 10;
        slavesCastelioStockAvailable = slavesCastelioStock - 36;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavescasteliostock").innerHTML = slavesCastelioStockAvailable;
        document.getElementById("slavescastelioprice").innerHTML = slavesCastelioPrice.toFixed(1);
        document.getElementById("slavescasteliopricesell").innerHTML = slavesCastelioPriceSell.toFixed(1);
    }
    if (slavesReserve < 10) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Cotton

function cottonCastelioBuy() {
    if (goldReserve >= cottonCastelioPrice && cottonCastelioStock >= 20 && inventoryStatus <= 190){
        goldReserve -= cottonCastelioPrice;
        cottonReserve += 10;
        cottonCastelioStock -= 10;
        cottonCastelioPrice = (1000 * 100)/ cottonCastelioStock;
        cottonCastelioPriceSell = (cottonCastelioStock * cottonCastelioPrice) / (cottonCastelioStock + 10); 
        inventoryStatus += 10;
        cottonCastelioStockAvailable = cottonCastelioStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottoncasteliostock").innerHTML = cottonCastelioStockAvailable;
        document.getElementById("cottoncastelioprice").innerHTML = cottonCastelioPrice.toFixed(1);
        document.getElementById("cottoncasteliopricesell").innerHTML = cottonCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < cottonCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(cottonCastelioStock < 20) {
        document.getElementById("cottoncasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("cottoncasteliostock").style.background = "transparent"}, 1000)
    }
}
function cottonCastelioSell() {
    if (cottonReserve >= 10){
        cottonReserve -= 10;
        cottonCastelioStock += 10;
        goldReserve += cottonCastelioPriceSell;
        cottonCastelioPrice = (1000 * 100)/ cottonCastelioStock;
        cottonCastelioPriceSell = (cottonCastelioStock * cottonCastelioPrice) / (cottonCastelioStock + 10) 
        inventoryStatus -= 10;
        cottonCastelioStockAvailable = cottonCastelioStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottoncasteliostock").innerHTML = cottonCastelioStockAvailable;
        document.getElementById("cottoncastelioprice").innerHTML = cottonCastelioPrice.toFixed(1);
        document.getElementById("cottoncasteliopricesell").innerHTML = cottonCastelioPriceSell.toFixed(1);
    }
    if (cottonReserve < 10) {
        document.getElementById("cotton").style.background = "red";
        setTimeout(function(){document.getElementById("cotton").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Sugar

function sugarCastelioBuy() {
    if (goldReserve >= sugarCastelioPrice && sugarCastelioStock >= 20 && inventoryStatus <= 190){
        goldReserve -= sugarCastelioPrice;
        sugarReserve += 10;
        sugarCastelioStock -= 10;
        sugarCastelioPrice = (50 * 100)/ sugarCastelioStock;
        sugarCastelioPriceSell = (sugarCastelioStock * sugarCastelioPrice) / (sugarCastelioStock + 10);
        inventoryStatus += 10;
        sugarCastelioStockAvailable = sugarCastelioStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarcasteliostock").innerHTML = sugarCastelioStockAvailable;
        document.getElementById("sugarcastelioprice").innerHTML = sugarCastelioPrice.toFixed(1);
        document.getElementById("sugarcasteliopricesell").innerHTML = sugarCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < sugarCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(sugarCastelioStock < 20) {
        document.getElementById("sugarcasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("sugarcasteliostock").style.background = "transparent"}, 1000)
    }
}
function sugarCastelioSell() {
    if (sugarReserve >= 10){
        sugarReserve -= 10;
        sugarCastelioStock += 10;
        goldReserve += sugarCastelioPriceSell;
        sugarCastelioPrice = (50 * 100)/ sugarCastelioStock;
        sugarCastelioPriceSell = (sugarCastelioStock * sugarCastelioPrice) / (sugarCastelioStock + 10)  
        inventoryStatus -= 10;
        sugarCastelioStockAvailable = sugarCastelioStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarcasteliostock").innerHTML = sugarCastelioStockAvailable;
        document.getElementById("sugarcastelioprice").innerHTML = sugarCastelioPrice.toFixed(1);
        document.getElementById("sugarcasteliopricesell").innerHTML = sugarCastelioPriceSell.toFixed(1);
    }
    if (sugarReserve < 10) {
        document.getElementById("sugar").style.background = "red";
        setTimeout(function(){document.getElementById("sugar").style.background = "transparent"}, 1000)
    }
}


// CASTELIO
// Tabacco

function tabaccoCastelioBuy() {
    if (goldReserve >= tabaccoCastelioPrice && tabaccoCastelioStock >= 20 && inventoryStatus <= 190){
        goldReserve -= tabaccoCastelioPrice;
        tabaccoReserve += 10;
        tabaccoCastelioStock -= 10;
        tabaccoCastelioPrice = (50 * 150)/ tabaccoCastelioStock;
        tabaccoCastelioPriceSell = (tabaccoCastelioStock * tabaccoCastelioPrice) / (tabaccoCastelioStock + 10);
        inventoryStatus += 10;
        tabaccoCastelioStockAvailable = tabaccoCastelioStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccocasteliostock").innerHTML = tabaccoCastelioStockAvailable;
        document.getElementById("tabaccocastelioprice").innerHTML = tabaccoCastelioPrice.toFixed(1);
        document.getElementById("tabaccocasteliopricesell").innerHTML = tabaccoCastelioPriceSell.toFixed(1);
    }
    if (goldReserve < tabaccoCastelioPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(tabaccoCastelioStock < 20) {
        document.getElementById("tabaccocasteliostock").style.background = "red";
        setTimeout(function(){document.getElementById("tabaccocasteliostock").style.background = "transparent"}, 1000)
    }
}
function tabaccoCastelioSell() {
    if (tabaccoReserve >= 10){
        tabaccoReserve -= 10;
        tabaccoCastelioStock += 10;
        goldReserve += tabaccoCastelioPriceSell;
        tabaccoCastelioPrice = (50 * 150)/ tabaccoCastelioStock;
        tabaccoCastelioPriceSell = (tabaccoCastelioStock * tabaccoCastelioPrice) / (tabaccoCastelioStock + 10) ; 
        inventoryStatus -= 10;
        tabaccoCastelioStockAvailable = tabaccoCastelioStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccocasteliostock").innerHTML = tabaccoCastelioStockAvailable;
        document.getElementById("tabaccocastelioprice").innerHTML = tabaccoCastelioPrice.toFixed(1);
        document.getElementById("tabaccocasteliopricesell").innerHTML = tabaccoCastelioPriceSell.toFixed(1);
    }
    if (tabaccoReserve < 10) {
        document.getElementById("tabacco").style.background = "red";
        setTimeout(function(){document.getElementById("tabacco").style.background = "transparent"}, 1000)
    }
}










// GARNIET
// CITY AI

setInterval(function() {priceGarnietActualization(),garnietStockAvailable()}, 1000);
setInterval(function() {garnietProduction(), garnietTradeExport()}, 144000);
setInterval(function() {garnietFoodProduction()}, 288000);

function garnietStockAvailable() {
    document.getElementById("foodgarnietstock").innerHTML = foodGarnietStockAvailable;
    document.getElementById("rumgarnietstock").innerHTML = rumGarnietStockAvailable;
    document.getElementById("timbergarnietstock").innerHTML = timberGarnietStockAvailable;
    document.getElementById("toolsgarnietstock").innerHTML = toolsGarnietStockAvailable;
    document.getElementById("textilgarnietstock").innerHTML = textilGarnietStockAvailable;
    document.getElementById("gunsgarnietstock").innerHTML = gunsGarnietStockAvailable;
    document.getElementById("slavesgarnietstock").innerHTML = slavesGarnietStockAvailable;
    document.getElementById("cottongarnietstock").innerHTML = cottonGarnietStockAvailable;
    document.getElementById("tabaccogarnietstock").innerHTML = tabaccoGarnietStockAvailable;
    document.getElementById("sugargarnietstock").innerHTML = sugarGarnietStockAvailable;
    if(foodGarnietStock < 1680){
        foodGarnietStockAvailable = 0; 
        document.getElementById("foodgarnietstock").innerHTML = 0
    }
    if(rumGarnietStock < 420){
        rumGarnietStockAvailable = 0; 
        document.getElementById("rumgarnietstock").innerHTML = 0
    }
    if(timberGarnietStock < 1680){
        timberGarnietStockAvailable = 0; 
        document.getElementById("timbergarnietstock").innerHTML = 0
    }
    if(toolsGarnietStock < 420){
        toolsGarnietStockAvailable = 0; 
        document.getElementById("toolsgarnietstock").innerHTML = 0
    }
    if(textilGarnietStock < 84){
        textilGarnietStockAvailable = 0; 
        document.getElementById("textilgarnietstock").innerHTML = 0
    }
    if(gunsGarnietStock < 84){
        gunsGarnietStockAvailable = 0; 
        document.getElementById("gunsgarnietstock").innerHTML = 0
    }
    if(slavesGarnietStock < 84){
        slavesGarnietStockAvailable = 0; 
        document.getElementById("slavesgarnietstock").innerHTML = 0
    }
    if(cottonGarnietStock < 10){
        cottonGarnietStockAvailable = 0; 
        document.getElementById("cottongarnietstock").innerHTML = 0
    }
    if(sugarGarnietStock < 10){
        sugarGarnietStockAvailable = 0; 
        document.getElementById("sugargarnietstock").innerHTML = 0
    }
    if(tabaccoGarnietStock < 10){
        tabaccoGarnietStockAvailable = 0; 
        document.getElementById("tabaccogarnietstock").innerHTML = 0
    }
}

function priceGarnietActualization(){
    foodGarnietPrice = (1680 * 50)/ foodGarnietStock;
    foodGarnietPriceSell = (foodGarnietStock * foodGarnietPrice) / (foodGarnietStock + 10);
    rumGarnietPrice = (420 * 220)/ rumGarnietStock;
    rumGarnietPriceSell = (rumGarnietStock * rumGarnietPrice) / (rumGarnietStock + 10); 
    timberGarnietPrice = (1680 * 60)/ timberGarnietStock;
    timberGarnietPriceSell = (timberGarnietStock * timberGarnietPrice) / (timberGarnietStock + 10);
    toolsGarnietPrice = (420 * 200)/ toolsGarnietStock;
    toolsGarnietPriceSell = (toolsGarnietStock * toolsGarnietPrice) / (toolsGarnietStock + 10);
    textilGarnietPrice = (84 * 500)/ textilGarnietStock;
    textilGarnietPriceSell = (textilGarnietStock * textilGarnietPrice) / (textilGarnietStock + 10);
    gunsGarnietPrice = (84 * 650)/ gunsGarnietStock;
    gunsGarnietPriceSell = (gunsGarnietStock * gunsGarnietPrice) / (gunsGarnietStock + 10);  
    slavesGarnietPrice = (84 * 400)/ slavesGarnietStock;
    slavesGarnietPriceSell = (slavesGarnietStock * slavesGarnietPrice) / (slavesGarnietStock + 10);
    cottonGarnietPrice = (100 * 50)/ cottonGarnietStock;
    cottonGarnietPriceSell = (cottonGarnietStock * cottonGarnietPrice) / (cottonGarnietStock + 10);
    sugarGarnietPrice = (50 * 100)/ sugarGarnietStock;
    sugarGarnietPriceSell = (sugarGarnietStock * sugarGarnietPrice) / (sugarGarnietStock + 10);
    tabaccoGarnietPrice = (50 * 150)/ tabaccoGarnietStock;
    tabaccoGarnietPriceSell = (tabaccoGarnietStock * tabaccoGarnietPrice) / (tabaccoGarnietStock + 10); 
    document.getElementById("foodgarnietprice").innerHTML = foodGarnietPrice.toFixed(1);
    document.getElementById("foodgarnietpricesell").innerHTML = foodGarnietPriceSell.toFixed(1);
    document.getElementById("rumgarnietprice").innerHTML = rumGarnietPrice.toFixed(1);
    document.getElementById("rumgarnietpricesell").innerHTML = rumGarnietPriceSell.toFixed(1);
    document.getElementById("timbergarnietprice").innerHTML = timberGarnietPrice.toFixed(1);
    document.getElementById("timbergarnietpricesell").innerHTML = timberGarnietPriceSell.toFixed(1);
    document.getElementById("toolsgarnietprice").innerHTML = toolsGarnietPrice.toFixed(1);
    document.getElementById("toolsgarnietpricesell").innerHTML = toolsGarnietPriceSell.toFixed(1);
    document.getElementById("textilgarnietprice").innerHTML = textilGarnietPrice.toFixed(1);
    document.getElementById("textilgarnietpricesell").innerHTML = textilGarnietPriceSell.toFixed(1);
    document.getElementById("gunsgarnietprice").innerHTML = gunsGarnietPrice.toFixed(1);
    document.getElementById("gunsgarnietpricesell").innerHTML = gunsGarnietPriceSell.toFixed(1);
    document.getElementById("slavesgarnietprice").innerHTML = slavesGarnietPrice.toFixed(1);
    document.getElementById("slavesgarnietpricesell").innerHTML = slavesGarnietPriceSell.toFixed(1);
    document.getElementById("cottongarnietprice").innerHTML = cottonGarnietPrice.toFixed(1);
    document.getElementById("cottongarnietpricesell").innerHTML = cottonGarnietPriceSell.toFixed(1);
    document.getElementById("tabaccogarnietprice").innerHTML = tabaccoGarnietPrice.toFixed(1);
    document.getElementById("tabaccogarnietpricesell").innerHTML = tabaccoGarnietPriceSell.toFixed(1);
    document.getElementById("tabaccogarnietprice").innerHTML = tabaccoGarnietPrice.toFixed(1);
    document.getElementById("tabaccogarnietpricesell").innerHTML = tabaccoGarnietPriceSell.toFixed(1);
    document.getElementById("sugargarnietprice").innerHTML = sugarGarnietPrice.toFixed(1);
    document.getElementById("sugargarnietpricesell").innerHTML = sugarGarnietPriceSell.toFixed(1);
}

function garnietConsumption() {
    foodGarnietStock -= 140;
    foodGarnietStockAvailable = foodGarnietStock - 1680;
    document.getElementById("foodgarnietstock").innerHTML = foodGarnietStockAvailable;
    rumGarnietStock -= 35;
    rumGarnietStockAvailable = rumGarnietStock - 420;
    document.getElementById("rumgarnietstock").innerHTML = rumGarnietStockAvailable;
    timberGarnietStock -= 140;
    timberGarnietStockAvailable = timberGarnietStock - 1680;
    document.getElementById("timbergarnietstock").innerHTML = timberGarnietStockAvailable;
    toolsGarnietStock -= 35;
    toolsGarnietStockAvailable = toolsGarnietStock - 420;
    document.getElementById("toolsgarnietstock").innerHTML = toolsGarnietStockAvailable;
    textilGarnietStock -= 7;
    textilGarnietStockAvailable = textilGarnietStock - 84;
    document.getElementById("textilgarnietstock").innerHTML = textilGarnietStockAvailable;
    gunsGarnietStock -= 7;
    gunsGarnietStockAvailable = gunsGarnietStock - 84;
    document.getElementById("gunsgarnietstock").innerHTML = gunsGarnietStockAvailable;
    slavesGarnietStock -= 7;
    slavesGarnietStockAvailable = slavesGarnietStock - 84;
    document.getElementById("slavesgarnietstock").innerHTML = slavesGarnietStockAvailable;
}
function garnietProduction() {
    gunsGarnietStock += 275;
    gunsGarnietStockAvailable = gunsGarnietStock - 420;
    document.getElementById("gunsgarnietstock").innerHTML = gunsGarnietStockAvailable;
    timberGarnietStock += 900;
    timberGarnietStockAvailable = timberGarnietStock - 1680;
    document.getElementById("timbergarnietstock").innerHTML = timberGarnietStockAvailable;
    garnietOverflow()
}
function garnietFoodProduction() {
    foodGarnietStock += 1800;
    foodGarnietStockAvailable = foodGarnietStock - 1680;
    document.getElementById("foodgarnietstock").innerHTML = foodGarnietStockAvailable;
}
function garnietTradeExport() {
    setTimeout(function() {
        gunsGarnietStock -= 205;
        gunsGarnietStockAvailable = gunsGarnietStock - 84;
        document.getElementById("gunsgarnietstock").innerHTML = gunsGarnietStockAvailable;
    }, 3000);
    setTimeout(function() {
        gunsCarolinaStock += 195;
        gunsCarolinaStockAvailable = gunsCarolinaStock - 120;
        document.getElementById("gunscarolinastock").innerHTML = gunsCarolinaStock;
        rumCarolinaStock -= 43;
        rumCarolinaStockAvailable = rumCarolinaStock - 600;
        document.getElementById("rumcarolinastock").innerHTML = rumCarolinaStock;
        toolsCarolinaStock -= 43;
        toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
        document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStock;
        textilCarolinaStock -= 8;
        textilCarolinaStockAvailable = textilCarolinaStock - 120;
        document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStock;
    }, 24000);
    setTimeout(function() {
        gunsOponaStock += 8;
        gunsOponaStockAvailable = gunsOponaStock - 12;
        document.getElementById("gunsoponastock").innerHTML = gunsOponaStockAvailable;
        rumOponaStock += 43;
        rumOponaStockAvailable = rumOponaStock - 60;
        document.getElementById("rumoponastock").innerHTML = rumOponaStockAvailable;
        textilOponaStock += 8;
        textilOponaStockAvailable = textilOponaStock - 12;
        document.getElementById("textiloponastock").innerHTML = textilOponaStockAvailable;
        toolsOponaStock += 43;
        toolsOponaStockAvailable = toolsOponaStock - 60;
        document.getElementById("toolsoponastock").innerHTML = toolsOponaStockAvailable;
        slavesOponaStock -= 237;
        tabaccoOponaStock -= 250;
        slavesOponaStockAvailable = slavesOponaStock - 12;
        tabaccoOponaStockAvailable = tabaccoOponaStock - 10;
        document.getElementById("tabaccooponastock").innerHTML = tabaccoOponaStockAvailable;
        document.getElementById("slavesoponastock").innerHTML = slavesOponaStockAvailable;
    }, 70000);
    setTimeout(function() {
        slavesCarolinaStock += 182;
        slavesCarolinaStockAvailable = slavesCarolinaStock - 120;
        document.getElementById("slavescarolinastock").innerHTML = slavesCarolinaStockAvailable;
        tabaccoCarolinaStock += 250;
        tabaccoCarolinaStockAvailable = tabaccoCarolinaStock - 10;
        document.getElementById("tabaccocarolinastock").innerHTML = tabaccoCarolinaStockAvailable;
    }, 108000);
    setTimeout(function() {
        slavesGarnietStock += 55;
        slavesGarnietStockAvailable = slavesGarnietStock - 84;
        document.getElementById("slavesgarnietstock").innerHTML = slavesGarnietStockAvailable;
    }, 132000);
}
function garnietOverflow() {
    if (foodGarnietStock > 2500) {foodGarnietStock -= 700}
    if (rumGarnietStock > 1000) {rumGarnietStock -= 500}
    if (timberGarnietStock > 2500) {timberGarnietStock -= 700}
    if (toolsGarnietStock > 1000) {toolsGarnietStock -= 500}
    if (textilGarnietStock > 150) {textilGarnietStock -= 60}
    if (gunsGarnietStock > 800) {gunsGarnietStock -= 200}
    if (slavesGarnietStock > 150) {slavesGarnietStock -= 60}
    if (cottonGarnietStock > 50) {cottonGarnietStock -= 40}
    if (sugarGarnietStock > 50) {sugarGarnietStock -= 40}
    if (tabaccoGarnietStock > 50) {tabaccoGarnietStock -= 40}
}



// GARNIET
// Food

function foodGarnietBuy() {
    if (goldReserve >= foodGarnietPrice && foodGarnietStock > 1680 && inventoryStatus <= 190){
        goldReserve -= foodGarnietPrice;
        foodReserve += 10;
        foodGarnietStock -= 10;
        foodGarnietPrice = (1680 * 50)/ foodGarnietStock;
        foodGarnietPriceSell = (foodGarnietStock * foodGarnietPrice) / (foodGarnietStock + 10);
        inventoryStatus += 10;
        foodGarnietStockAvailable = foodGarnietStock - 1680;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodgarnietstock").innerHTML = foodGarnietStockAvailable;
        document.getElementById("foodgarnietprice").innerHTML = foodGarnietPrice.toFixed(1);
        document.getElementById("foodgarnietpricesell").innerHTML = foodGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < foodGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(foodGarnietStock <= 1680) {
        document.getElementById("foodgarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("foodgarnietstock").style.background = "transparent"}, 1000)
    }
}
function foodGarnietSell() {
    if (foodReserve > 10) {
        foodReserve -= 10;
        foodGarnietStock += 10;
        goldReserve += foodGarnietPriceSell;
        foodGarnietPrice = (1680 * 50)/ foodGarnietStock;
        foodGarnietPriceSell = (foodGarnietStock * foodGarnietPrice) / (foodGarnietStock + 10)  
        inventoryStatus -= 10;
        foodGarnietStockAvailable = foodGarnietStock - 1680;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodgarnietstock").innerHTML = foodGarnietStockAvailable;
        document.getElementById("foodgarnietprice").innerHTML = foodGarnietPrice.toFixed(1);
        document.getElementById("foodgarnietpricesell").innerHTML = foodGarnietPriceSell.toFixed(1);
    }
    if (foodReserve < 10) {
        document.getElementById("food").style.background = "red";
        setTimeout(function(){document.getElementById("food").style.background = "transparent"}, 1000)
    }
}



// GARNIET
//  Rum

function rumGarnietBuy() {
    if (goldReserve >= rumGarnietPrice && rumGarnietStock > 420 && inventoryStatus <= 190){
        goldReserve -= rumGarnietPrice;
        rumReserve += 10;
        rumGarnietStock -= 10;
        rumGarnietPrice = (420 * 220)/ rumGarnietStock;
        rumGarnietPriceSell = (rumGarnietStock * rumGarnietPrice) / (rumGarnietStock + 10);
        inventoryStatus += 10;
        rumGarnietStockAvailable = rumGarnietStock - 420;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumgarnietstock").innerHTML = rumGarnietStockAvailable;
        document.getElementById("rumgarnietprice").innerHTML = rumGarnietPrice.toFixed(1);
        document.getElementById("rumgarnietpricesell").innerHTML = rumGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < rumGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(rumGarnietStock <= 420) {
        document.getElementById("rumgarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("rumgarnietstock").style.background = "transparent"}, 1000)
    }
}
function rumGarnietSell() {
    if (rumReserve >= 10){
        rumReserve -= 10;
        rumGarnietStock += 10;
        goldReserve += rumGarnietPriceSell;
        rumGarnietPrice = (420 * 220)/ rumGarnietStock;
        rumGarnietPriceSell = (rumGarnietStock * rumGarnietPrice) / (rumGarnietStock + 10)  
        inventoryStatus -= 10;
        rumGarnietStockAvailable = rumGarnietStock - 420;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumgarnietstock").innerHTML = rumGarnietStockAvailable;
        document.getElementById("rumgarnietprice").innerHTML = rumGarnietPrice.toFixed(1);
        document.getElementById("rumgarnietpricesell").innerHTML = rumGarnietPriceSell.toFixed(1);
    }
    if (rumReserve < 10) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Timber

function timberGarnietBuy() {
    if (goldReserve >= timberGarnietPrice && timberGarnietStock > 1680 && inventoryStatus <= 190){
        goldReserve -= timberGarnietPrice;
        timberReserve += 10;
        timberGarnietStock -= 10;
        timberGarnietPrice = (1680 * 60)/ timberGarnietStock;
        timberGarnietPriceSell = (timberGarnietStock * timberGarnietPrice) / (timberGarnietStock + 10);
        inventoryStatus += 10;
        timberGarnietStockAvailable = timberGarnietStock - 1680;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbergarnietstock").innerHTML = timberGarnietStockAvailable;
        document.getElementById("timbergarnietprice").innerHTML = timberGarnietPrice.toFixed(1);
        document.getElementById("timbergarnietpricesell").innerHTML = timberGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < timberGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(timberGarnietStock <= 1680) {
        document.getElementById("timbergarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("timbergarnietstock").style.background = "transparent"}, 1000)
    }
}
function timberGarnietSell() {
    if (timberReserve >= 10){
        timberReserve -= 10;
        timberGarnietStock += 10;
        goldReserve += timberGarnietPriceSell;
        timberGarnietPrice = (1680 * 60)/ timberGarnietStock;
        timberGarnietPriceSell = (timberGarnietStock * timberGarnietPrice) / (timberGarnietStock + 10)  
        inventoryStatus -= 10;
        timberGarnietStockAvailable = timberGarnietStock - 1680;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbergarnietstock").innerHTML = timberGarnietStockAvailable;
        document.getElementById("timbergarnietprice").innerHTML = timberGarnietPrice.toFixed(1);
        document.getElementById("timbergarnietpricesell").innerHTML = timberGarnietPriceSell.toFixed(1);
    }
    if (timberReserve < 10) {
        document.getElementById("timber").style.background = "red";
        setTimeout(function(){document.getElementById("timber").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Tools

function toolsGarnietBuy() {
    if (goldReserve >= toolsGarnietPrice && toolsGarnietStock > 420 && inventoryStatus <= 190){
        goldReserve -= toolsGarnietPrice;
        toolsReserve += 10;
        toolsGarnietStock -= 10;
        toolsGarnietPrice = (420 * 200)/ toolsGarnietStock;
        toolsGarnietPriceSell = (toolsGarnietStock * toolsGarnietPrice) / (toolsGarnietStock + 10); 
        inventoryStatus += 10;
        toolsGarnietStockAvailable = toolsGarnietStock - 420;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolsgarnietstock").innerHTML = toolsGarnietStockAvailable;
        document.getElementById("toolsgarnietprice").innerHTML = toolsGarnietPrice.toFixed(1);
        document.getElementById("toolsgarnietpricesell").innerHTML = toolsGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < toolsGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(toolsGarnietStock <= 420) {
        document.getElementById("toolsgarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("toolsgarnietstock").style.background = "transparent"}, 1000)
    }
}
function toolsGarnietSell() {
    if (toolsReserve >= 10){
        toolsReserve -= 10;
        toolsGarnietStock += 10;
        goldReserve += toolsGarnietPriceSell;
        toolsGarnietPrice = (420 * 200)/ toolsGarnietStock;
        toolsGarnietPriceSell = (toolsGarnietStock * toolsGarnietPrice) / (toolsGarnietStock + 10)  
        inventoryStatus -= 10;
        toolsGarnietStockAvailable = toolsGarnietStock - 420;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolsgarnietstock").innerHTML = toolsGarnietStockAvailable;
        document.getElementById("toolsgarnietprice").innerHTML = toolsGarnietPrice.toFixed(1);
        document.getElementById("toolsgarnietpricesell").innerHTML = toolsGarnietPriceSell.toFixed(1);
    }
    if (toolsReserve < 10) {
        document.getElementById("tools").style.background = "red";
        setTimeout(function(){document.getElementById("tools").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Textil

function textilGarnietBuy() {
    if (goldReserve >= textilGarnietPrice && textilGarnietStock > 84 && inventoryStatus <= 190){
        goldReserve -= textilGarnietPrice;
        textilReserve += 10;
        textilGarnietStock -= 10;
        textilGarnietPrice = (84 * 500)/ textilGarnietStock;
        textilGarnietPriceSell = (textilGarnietStock * textilGarnietPrice) / (textilGarnietStock + 10);
        inventoryStatus += 10;
        textilGarnietStockAvailable = textilGarnietStock - 84;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilgarnietstock").innerHTML = textilGarnietStockAvailable;
        document.getElementById("textilgarnietprice").innerHTML = textilGarnietPrice.toFixed(1);
        document.getElementById("textilgarnietpricesell").innerHTML = textilGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < textilGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(textilGarnietStock <= 84) {
        document.getElementById("textilgarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("textilgarnietstock").style.background = "transparent"}, 1000)
    }
}
function textilGarnietSell() {
    if (textilReserve >= 10){
        textilReserve -= 10;
        textilGarnietStock += 10;
        goldReserve += textilGarnietPriceSell;
        textilGarnietPrice = (84 * 500)/ textilGarnietStock;
        textilGarnietPriceSell = (textilGarnietStock * textilGarnietPrice) / (textilGarnietStock + 10)  
        inventoryStatus -= 10;
        textilGarnietStockAvailable = textilGarnietStock - 84;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilgarnietstock").innerHTML = textilGarnietStockAvailable;
        document.getElementById("textilgarnietprice").innerHTML = textilGarnietPrice.toFixed(1);
        document.getElementById("textilgarnietpricesell").innerHTML = textilGarnietPriceSell.toFixed(1);
    }
    if (textilReserve < 10) {
        document.getElementById("textil").style.background = "red";
        setTimeout(function(){document.getElementById("textil").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Guns

function gunsGarnietBuy() {
    if (goldReserve >= gunsGarnietPrice && gunsGarnietStock > 84 && inventoryStatus <= 190){
        goldReserve -= gunsGarnietPrice;
        gunsReserve += 10;
        gunsGarnietStock -= 10;
        gunsGarnietPrice = (84 * 650)/ gunsGarnietStock;
        gunsGarnietPriceSell = (gunsGarnietStock * gunsGarnietPrice) / (gunsGarnietStock + 10);
        inventoryStatus += 10;
        gunsGarnietStockAvailable = gunsGarnietStock - 84;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunsgarnietstock").innerHTML = gunsGarnietStockAvailable;
        document.getElementById("gunsgarnietprice").innerHTML = gunsGarnietPrice.toFixed(1);
        document.getElementById("gunsgarnietpricesell").innerHTML = gunsGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < gunsGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(gunsGarnietStock <= 84) {
        document.getElementById("gunsgarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("gunsgarnietstock").style.background = "transparent"}, 1000)
    }
}
function gunsGarnietSell() {
    if (gunsReserve >= 10){
        gunsReserve -= 10;
        gunsGarnietStock += 10;
        goldReserve += gunsGarnietPriceSell;
        gunsGarnietPrice = (84 * 650)/ gunsGarnietStock;
        gunsGarnietPriceSell = (gunsGarnietStock * gunsGarnietPrice) / (gunsGarnietStock + 10)  
        inventoryStatus -= 10;
        gunsGarnietStockAvailable = gunsGarnietStock - 84;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunsgarnietstock").innerHTML = gunsGarnietStockAvailable;
        document.getElementById("gunsgarnietprice").innerHTML = gunsGarnietPrice.toFixed(1);
        document.getElementById("gunsgarnietpricesell").innerHTML = gunsGarnietPriceSell.toFixed(1);
    }
    if (gunsReserve < 10) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Slaves

function slavesGarnietBuy() {
    if (goldReserve >= slavesGarnietPrice && slavesGarnietStock > 84 && inventoryStatus <= 190){
        goldReserve -= slavesGarnietPrice;
        slavesReserve += 10;
        slavesGarnietStock -= 10;
        slavesGarnietPrice = (84 * 400)/ slavesGarnietStock;
        slavesGarnietPriceSell = (slavesGarnietStock * slavesGarnietPrice) / (slavesGarnietStock + 10);
        inventoryStatus += 10;
        slavesGarnietStockAvailable = slavesGarnietStock - 84;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavesgarnietstock").innerHTML = slavesGarnietStockAvailable;
        document.getElementById("slavesgarnietprice").innerHTML = slavesGarnietPrice.toFixed(1);
        document.getElementById("slavesgarnietpricesell").innerHTML = slavesGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < slavesGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(slavesGarnietStock <= 84) {
        document.getElementById("slavesgarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("slavesgarnietstock").style.background = "transparent"}, 1000)
    }
}
function slavesGarnietSell() {
    if (slavesReserve >= 10){
        slavesReserve -= 10;
        slavesGarnietStock += 10;
        goldReserve += slavesGarnietPriceSell;
        slavesGarnietPrice = (84 * 400)/ slavesGarnietStock;
        slavesGarnietPriceSell = (slavesGarnietStock * slavesGarnietPrice) / (slavesGarnietStock + 10)  
        inventoryStatus -= 10;
        slavesGarnietStockAvailable = slavesGarnietStock - 84;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavesgarnietstock").innerHTML = slavesGarnietStockAvailable;
        document.getElementById("slavesgarnietprice").innerHTML = slavesGarnietPrice.toFixed(1);
        document.getElementById("slavesgarnietpricesell").innerHTML = slavesGarnietPriceSell.toFixed(1);
    }
    if (slavesReserve < 10) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Cotton

function cottonGarnietBuy() {
    if (goldReserve >= cottonGarnietPrice && cottonGarnietStock >= 20 && inventoryStatus <= 190){
        goldReserve -= cottonGarnietPrice;
        cottonReserve += 10;
        cottonGarnietStock -= 10;
        cottonGarnietPrice = (100 * 50)/ cottonGarnietStock;
        cottonGarnietPriceSell = (cottonGarnietStock * cottonGarnietPrice) / (cottonGarnietStock + 10); 
        inventoryStatus += 10;
        cottonGarnietStockAvailable = cottonGarnietStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottongarnietstock").innerHTML = cottonGarnietStockAvailable;
        document.getElementById("cottongarnietprice").innerHTML = cottonGarnietPrice.toFixed(1);
        document.getElementById("cottongarnietpricesell").innerHTML = cottonGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < cottonGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(cottonGarnietStock < 20) {
        document.getElementById("cottongarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("cottongarnietstock").style.background = "transparent"}, 1000)
    }
}
function cottonGarnietSell() {
    if (cottonReserve >= 10){
        cottonReserve -= 10;
        cottonGarnietStock += 10;
        goldReserve += cottonGarnietPriceSell;
        cottonGarnietPrice = (100 * 50)/ cottonGarnietStock;
        cottonGarnietPriceSell = (cottonGarnietStock * cottonGarnietPrice) / (cottonGarnietStock + 10) 
        inventoryStatus -= 10;
        cottonGarnietStockAvailable = cottonGarnietStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottongarnietstock").innerHTML = cottonGarnietStockAvailable;
        document.getElementById("cottongarnietprice").innerHTML = cottonGarnietPrice.toFixed(1);
        document.getElementById("cottongarnietpricesell").innerHTML = cottonGarnietPriceSell.toFixed(1);
    }
    if (cottonReserve < 10) {
        document.getElementById("cotton").style.background = "red";
        setTimeout(function(){document.getElementById("cotton").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Sugar

function sugarGarnietBuy() {
    if (goldReserve >= sugarGarnietPrice && sugarGarnietStock >= 20 && inventoryStatus <= 190){
        goldReserve -= sugarGarnietPrice;
        sugarReserve += 10;
        sugarGarnietStock -= 10;
        sugarGarnietPrice = (50 * 100)/ sugarGarnietStock;
        sugarGarnietPriceSell = (sugarGarnietStock * sugarGarnietPrice) / (sugarGarnietStock + 10);
        inventoryStatus += 10;
        sugarGarnietStockAvailable = sugarGarnietStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugargarnietstock").innerHTML = sugarGarnietStockAvailable;
        document.getElementById("sugargarnietprice").innerHTML = sugarGarnietPrice.toFixed(1);
        document.getElementById("sugargarnietpricesell").innerHTML = sugarGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < sugarGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(sugarGarnietStock < 20) {
        document.getElementById("sugargarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("sugargarnietstock").style.background = "transparent"}, 1000)
    }
}
function sugarGarnietSell() {
    if (sugarReserve >= 10){
        sugarReserve -= 10;
        sugarGarnietStock += 10;
        goldReserve += sugarGarnietPriceSell;
        sugarGarnietPrice = (50 * 100)/ sugarGarnietStock;
        sugarGarnietPriceSell = (sugarGarnietStock * sugarGarnietPrice) / (sugarGarnietStock + 10)  
        inventoryStatus -= 10;
        sugarGarnietStockAvailable = sugarGarnietStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugargarnietstock").innerHTML = sugarGarnietStockAvailable;
        document.getElementById("sugargarnietprice").innerHTML = sugarGarnietPrice.toFixed(1);
        document.getElementById("sugargarnietpricesell").innerHTML = sugarGarnietPriceSell.toFixed(1);
    }
    if (sugarReserve < 10) {
        document.getElementById("sugar").style.background = "red";
        setTimeout(function(){document.getElementById("sugar").style.background = "transparent"}, 1000)
    }
}


// GARNIET
// Tabacco

function tabaccoGarnietBuy() {
    if (goldReserve >= tabaccoGarnietPrice && tabaccoGarnietStock >= 20 && inventoryStatus <= 190){
        goldReserve -= tabaccoGarnietPrice;
        tabaccoReserve += 10;
        tabaccoGarnietStock -= 10;
        tabaccoGarnietPrice = (50 * 150)/ tabaccoGarnietStock;
        tabaccoGarnietPriceSell = (tabaccoGarnietStock * tabaccoGarnietPrice) / (tabaccoGarnietStock + 10);
        inventoryStatus += 10;
        tabaccoGarnietStockAvailable = tabaccoGarnietStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccogarnietstock").innerHTML = tabaccoGarnietStockAvailable;
        document.getElementById("tabaccogarnietprice").innerHTML = tabaccoGarnietPrice.toFixed(1);
        document.getElementById("tabaccogarnietpricesell").innerHTML = tabaccoGarnietPriceSell.toFixed(1);
    }
    if (goldReserve < tabaccoGarnietPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(tabaccoGarnietStock < 20) {
        document.getElementById("tabaccogarnietstock").style.background = "red";
        setTimeout(function(){document.getElementById("tabaccogarnietstock").style.background = "transparent"}, 1000)
    }
}
function tabaccoGarnietSell() {
    if (tabaccoReserve >= 10){
        tabaccoReserve -= 10;
        tabaccoGarnietStock += 10;
        goldReserve += tabaccoGarnietPriceSell;
        tabaccoGarnietPrice = (50 * 150)/ tabaccoGarnietStock;
        tabaccoGarnietPriceSell = (tabaccoGarnietStock * tabaccoGarnietPrice) / (tabaccoGarnietStock + 10) ; 
        inventoryStatus -= 10;
        tabaccoGarnietStockAvailable = tabaccoGarnietStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccogarnietstock").innerHTML = tabaccoGarnietStockAvailable;
        document.getElementById("tabaccogarnietprice").innerHTML = tabaccoGarnietPrice.toFixed(1);
        document.getElementById("tabaccogarnietpricesell").innerHTML = tabaccoGarnietPriceSell.toFixed(1);
    }
    if (tabaccoReserve < 10) {
        document.getElementById("tabacco").style.background = "red";
        setTimeout(function(){document.getElementById("tabacco").style.background = "transparent"}, 1000)
    }
}







// SAINT CAROLINA
// CITY AI

setInterval(function() {priceCarolinaActualization(),carolinaStockAvailable()}, 1000);
setInterval(function() {carolinaProduction(), carolinaTradeExport()}, 144000);
setInterval(function() {carolinaFoodProduction()}, 288000);

function carolinaStockAvailable() {
    document.getElementById("foodcarolinastock").innerHTML = foodCarolinaStockAvailable;
    document.getElementById("rumcarolinastock").innerHTML = rumCarolinaStockAvailable;
    document.getElementById("timbercarolinastock").innerHTML = timberCarolinaStockAvailable;
    document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStockAvailable;
    document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStockAvailable;
    document.getElementById("gunscarolinastock").innerHTML = gunsCarolinaStockAvailable;
    document.getElementById("slavescarolinastock").innerHTML = slavesCarolinaStockAvailable;
    document.getElementById("cottoncarolinastock").innerHTML = cottonCarolinaStockAvailable;
    document.getElementById("tabaccocarolinastock").innerHTML = tabaccoCarolinaStockAvailable;
    document.getElementById("sugarcarolinastock").innerHTML = sugarCarolinaStockAvailable;
    if(foodCarolinaStock < 2400){
        foodCarolinaStockAvailable = 0; 
        document.getElementById("foodcarolinastock").innerHTML = 0
    }
    if(rumCarolinaStock < 600){
        rumCarolinaStockAvailable = 0; 
        document.getElementById("rumcarolinastock").innerHTML = 0
    }
    if(timberCarolinaStock < 2400){
        timberCarolinaStockAvailable = 0; 
        document.getElementById("timbercarolinastock").innerHTML = 0
    }
    if(toolsCarolinaStock < 600){
        toolsCarolinaStockAvailable = 0; 
        document.getElementById("toolscarolinastock").innerHTML = 0
    }
    if(textilCarolinaStock < 120){
        textilCarolinaStockAvailable = 0; 
        document.getElementById("textilcarolinastock").innerHTML = 0
    }
    if(gunsCarolinaStock < 120){
        gunsCarolinaStockAvailable = 0; 
        document.getElementById("gunscarolinastock").innerHTML = 0
    }
    if(slavesCarolinaStock < 120){
        slavesCarolinaStockAvailable = 0; 
        document.getElementById("slavescarolinastock").innerHTML = 0
    }
    if(cottonCarolinaStock < 10){
        cottonCarolinaStockAvailable = 0; 
        document.getElementById("cottoncarolinastock").innerHTML = 0
    }
    if(sugarCarolinaStock < 10){
        sugarCarolinaStockAvailable = 0; 
        document.getElementById("sugarcarolinastock").innerHTML = 0
    }
    if(tabaccoCarolinaStock < 10){
        tabaccoCarolinaStockAvailable = 0; 
        document.getElementById("tabaccocarolinastock").innerHTML = 0
    }
}

function priceCarolinaActualization(){
    foodCarolinaPrice = (2400 * 50)/ foodCarolinaStock;
    foodCarolinaPriceSell = (foodCarolinaStock * foodCarolinaPrice) / (foodCarolinaStock + 10);
    rumCarolinaPrice = (600 * 220)/ rumCarolinaStock;
    rumCarolinaPriceSell = (rumCarolinaStock * rumCarolinaPrice) / (rumCarolinaStock + 10); 
    timberCarolinaPrice = (2400 * 60)/ timberCarolinaStock;
    timberCarolinaPriceSell = (timberCarolinaStock * timberCarolinaPrice) / (timberCarolinaStock + 10);
    toolsCarolinaPrice = (600 * 200)/ toolsCarolinaStock;
    toolsCarolinaPriceSell = (toolsCarolinaStock * toolsCarolinaPrice) / (toolsCarolinaStock + 10);
    textilCarolinaPrice = (120 * 500)/ textilCarolinaStock;
    textilCarolinaPriceSell = (textilCarolinaStock * textilCarolinaPrice) / (textilCarolinaStock + 10);
    gunsCarolinaPrice = (120 * 750)/ gunsCarolinaStock;
    gunsCarolinaPriceSell = (gunsCarolinaStock * gunsCarolinaPrice) / (gunsCarolinaStock + 10);  
    slavesCarolinaPrice = (120 * 400)/ slavesCarolinaStock;
    slavesCarolinaPriceSell = (slavesCarolinaStock * slavesCarolinaPrice) / (slavesCarolinaStock + 10);
    cottonCarolinaPrice = (500 * 750)/ cottonCarolinaStock;
    cottonCarolinaPriceSell = (cottonCarolinaStock * cottonCarolinaPrice) / (cottonCarolinaStock + 10);
    sugarCarolinaPrice = (500 * 300)/ sugarCarolinaStock;
    sugarCarolinaPriceSell = (sugarCarolinaStock * sugarCarolinaPrice) / (sugarCarolinaStock + 10);
    tabaccoCarolinaPrice = (1000 * 300)/ tabaccoCarolinaStock;
    tabaccoCarolinaPriceSell = (tabaccoCarolinaStock * tabaccoCarolinaPrice) / (tabaccoCarolinaStock + 10); 
    document.getElementById("foodcarolinaprice").innerHTML = foodCarolinaPrice.toFixed(1);
    document.getElementById("foodcarolinapricesell").innerHTML = foodCarolinaPriceSell.toFixed(1);
    document.getElementById("rumcarolinaprice").innerHTML = rumCarolinaPrice.toFixed(1);
    document.getElementById("rumcarolinapricesell").innerHTML = rumCarolinaPriceSell.toFixed(1);
    document.getElementById("timbercarolinaprice").innerHTML = timberCarolinaPrice.toFixed(1);
    document.getElementById("timbercarolinapricesell").innerHTML = timberCarolinaPriceSell.toFixed(1);
    document.getElementById("toolscarolinaprice").innerHTML = toolsCarolinaPrice.toFixed(1);
    document.getElementById("toolscarolinapricesell").innerHTML = toolsCarolinaPriceSell.toFixed(1);
    document.getElementById("textilcarolinaprice").innerHTML = textilCarolinaPrice.toFixed(1);
    document.getElementById("textilcarolinapricesell").innerHTML = textilCarolinaPriceSell.toFixed(1);
    document.getElementById("gunscarolinaprice").innerHTML = gunsCarolinaPrice.toFixed(1);
    document.getElementById("gunscarolinapricesell").innerHTML = gunsCarolinaPriceSell.toFixed(1);
    document.getElementById("slavescarolinaprice").innerHTML = slavesCarolinaPrice.toFixed(1);
    document.getElementById("slavescarolinapricesell").innerHTML = slavesCarolinaPriceSell.toFixed(1);
    document.getElementById("cottoncarolinaprice").innerHTML = cottonCarolinaPrice.toFixed(1);
    document.getElementById("cottoncarolinapricesell").innerHTML = cottonCarolinaPriceSell.toFixed(1);
    document.getElementById("tabaccocarolinaprice").innerHTML = tabaccoCarolinaPrice.toFixed(1);
    document.getElementById("tabaccocarolinapricesell").innerHTML = tabaccoCarolinaPriceSell.toFixed(1);
    document.getElementById("tabaccocarolinaprice").innerHTML = tabaccoCarolinaPrice.toFixed(1);
    document.getElementById("tabaccocarolinapricesell").innerHTML = tabaccoCarolinaPriceSell.toFixed(1);
    document.getElementById("sugarcarolinaprice").innerHTML = sugarCarolinaPrice.toFixed(1);
    document.getElementById("sugarcarolinapricesell").innerHTML = sugarCarolinaPriceSell.toFixed(1);
}

function carolinaConsumption() {
    foodCarolinaStock -= 200;
    foodCarolinaStockAvailable = foodCarolinaStock - 2400;
    document.getElementById("foodcarolinastock").innerHTML = foodCarolinaStockAvailable;
    rumCarolinaStock -= 50;
    rumCarolinaStockAvailable = rumCarolinaStock - 600;
    document.getElementById("rumcarolinastock").innerHTML = rumCarolinaStockAvailable;
    timberCarolinaStock -= 200;
    timberCarolinaStockAvailable = timberCarolinaStock - 2400;
    document.getElementById("timbercarolinastock").innerHTML = timberCarolinaStockAvailable;
    toolsCarolinaStock -= 50;
    toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
    document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStockAvailable;
    textilCarolinaStock -= 10;
    textilCarolinaStockAvailable = textilCarolinaStock - 120;
    document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStockAvailable;
    gunsCarolinaStock -= 10;
    gunsCarolinaStockAvailable = gunsCarolinaStock - 120;
    document.getElementById("gunscarolinastock").innerHTML = gunsCarolinaStockAvailable;
    slavesCarolinaStock -= 10;
    slavesCarolinaStockAvailable = slavesCarolinaStock - 120;
    document.getElementById("slavescarolinastock").innerHTML = slavesCarolinaStockAvailable;
}
function carolinaProduction() {
    timberCarolinaStock += 1300;
    timberCarolinaStockAvailable = timberCarolinaStock - 2400;
    document.getElementById("timbercarolinastock").innerHTML = timberCarolinaStockAvailable;
    textilCarolinaStock += 300;
    textilCarolinaStockAvailable = textilCarolinaStock - 120;
    document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStockAvailable;
    carolinaOverflow()
}
function carolinaFoodProduction() {
    foodCarolinaStock += 2600;
    foodCarolinaStockAvailable = foodCarolinaStock - 2400;
    document.getElementById("foodcarolinastock").innerHTML = foodCarolinaStockAvailable;
}
function carolinaTradeExport() {
    setTimeout(function() {
        textilCarolinaStock -= 93;
        textilCarolinaStockAvailable = textilCarolinaStock - 10;
        document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStockAvailable;
        slavesCarolinaStock -= 46;
        slavesCarolinaStockAvailable = slavesCarolinaStock - 120;
        document.getElementById("slavescarolinastock").innerHTML = slavesCarolinaStockAvailable;
        gunsCarolinaStock -= 46;
        gunsCarolinaStockAvailable = gunsCarolinaStock - 120;
        document.getElementById("gunscarolinastock").innerHTML = gunsCarolinaStockAvailable;
    }, 3000);
    setTimeout(function() {
        textilGarnietStock += 55;
        textilGarnietStockAvailable = textilGarnietStock - 84;
        document.getElementById("textilgarnietstock").innerHTML = textilGarnietStockAvailable;
    }, 24000);
    setTimeout(function() {
        textilGlovisStock += 43;
        textilGlovisStockAvailable = textilGlovisStock - 60;
        document.getElementById("textilglovisstock").innerHTML = textilGlovisStockAvailable;
        slavesGlovisStock += 43;
        slavesGlovisStockAvailable = slavesGlovisStock - 60;
        document.getElementById("slavesglovisstock").innerHTML = slavesGlovisStockAvailable;
        gunsGlovisStock += 43;
        gunsGlovisStockAvailable = gunsGlovisStock - 60;
        document.getElementById("gunsglovisstock").innerHTML = gunsGlovisStockAvailable;
        toolsGlovisStock -= 375;
        toolsGlovisStockAvailable = toolsGlovisStock - 300;
        document.getElementById("toolsglovisstock").innerHTML = toolsGlovisStockAvailable;
    }, 70000);
    setTimeout(function() {
        toolsCarolinaStock += 375;
        toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
        document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStockAvailable;
    }, 130000);
}
function carolinaOverflow() {
    if (foodCarolinaStock > 3500) {foodCarolinaStock -= 700}
    if (rumCarolinaStock > 2800) {rumCarolinaStock -= 500}
    if (timberCarolinaStock > 3500) {timberCarolinaStock -= 700}
    if (toolsCarolinaStock > 2800) {toolsCarolinaStock -= 500}
    if (textilCarolinaStock > 1000) {textilCarolinaStock -= 400}
    if (gunsCarolinaStock > 1000) {gunsCarolinaStock -= 400}
    if (slavesCarolinaStock > 1000) {slavesCarolinaStock -= 400}
    if (cottonCarolinaStock > 1500) {cottonCarolinaStock -= 1200}
    if (sugarCarolinaStock > 1500) {sugarCarolinaStock -= 1200}
    if (tabaccoCarolinaStock > 1500) {tabaccoCarolinaStock -= 1200}
}



// SAINT CAROLINA
// Food

function foodCarolinaBuy() {
    if (goldReserve >= foodCarolinaPrice && foodCarolinaStock > 2400 && inventoryStatus <= 190){
        goldReserve -= foodCarolinaPrice;
        foodReserve += 10;
        foodCarolinaStock -= 10;
        foodCarolinaPrice = (2400 * 50)/ foodCarolinaStock;
        foodCarolinaPriceSell = (foodCarolinaStock * foodCarolinaPrice) / (foodCarolinaStock + 10);
        inventoryStatus += 10;
        foodCarolinaStockAvailable = foodCarolinaStock - 2400;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodcarolinastock").innerHTML = foodCarolinaStockAvailable;
        document.getElementById("foodcarolinaprice").innerHTML = foodCarolinaPrice.toFixed(1);
        document.getElementById("foodcarolinapricesell").innerHTML = foodCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < foodCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(foodCarolinaStock <= 2400) {
        document.getElementById("foodcarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("foodcarolinastock").style.background = "transparent"}, 1000)
    }
}
function foodCarolinaSell() {
    if (foodReserve > 10) {
        foodReserve -= 10;
        foodCarolinaStock += 10;
        goldReserve += foodCarolinaPriceSell;
        foodCarolinaPrice = (2400 * 50)/ foodCarolinaStock;
        foodCarolinaPriceSell = (foodCarolinaStock * foodCarolinaPrice) / (foodCarolinaStock + 10)  
        inventoryStatus -= 10;
        foodCarolinaStockAvailable = foodCarolinaStock - 2400;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("food").innerHTML = foodReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("foodcarolinastock").innerHTML = foodCarolinaStockAvailable;
        document.getElementById("foodcarolinaprice").innerHTML = foodCarolinaPrice.toFixed(1);
        document.getElementById("foodcarolinapricesell").innerHTML = foodCarolinaPriceSell.toFixed(1);
    }
    if (foodReserve < 10) {
        document.getElementById("food").style.background = "red";
        setTimeout(function(){document.getElementById("food").style.background = "transparent"}, 1000)
    }
}



// SAINT CAROLINA
//  Rum

function rumCarolinaBuy() {
    if (goldReserve >= rumCarolinaPrice && rumCarolinaStock > 600 && inventoryStatus <= 190){
        goldReserve -= rumCarolinaPrice;
        rumReserve += 10;
        rumCarolinaStock -= 10;
        rumCarolinaPrice = (600 * 220)/ rumCarolinaStock;
        rumCarolinaPriceSell = (rumCarolinaStock * rumCarolinaPrice) / (rumCarolinaStock + 10);
        inventoryStatus += 10;
        rumCarolinaStockAvailable = rumCarolinaStock - 600;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumcarolinastock").innerHTML = rumCarolinaStockAvailable;
        document.getElementById("rumcarolinaprice").innerHTML = rumCarolinaPrice.toFixed(1);
        document.getElementById("rumcarolinapricesell").innerHTML = rumCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < rumCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(rumCarolinaStock <= 600) {
        document.getElementById("rumcarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("rumcarolinastock").style.background = "transparent"}, 1000)
    }
}
function rumCarolinaSell() {
    if (rumReserve >= 10){
        rumReserve -= 10;
        rumCarolinaStock += 10;
        goldReserve += rumCarolinaPriceSell;
        rumCarolinaPrice = (600 * 220)/ rumCarolinaStock;
        rumCarolinaPriceSell = (rumCarolinaStock * rumCarolinaPrice) / (rumCarolinaStock + 10)  
        inventoryStatus -= 10;
        rumCarolinaStockAvailable = rumCarolinaStock - 600;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("rum").innerHTML = rumReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("rumcarolinastock").innerHTML = rumCarolinaStockAvailable;
        document.getElementById("rumcarolinaprice").innerHTML = rumCarolinaPrice.toFixed(1);
        document.getElementById("rumcarolinapricesell").innerHTML = rumCarolinaPriceSell.toFixed(1);
    }
    if (rumReserve < 10) {
        document.getElementById("rum").style.background = "red";
        setTimeout(function(){document.getElementById("rum").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Timber

function timberCarolinaBuy() {
    if (goldReserve >= timberCarolinaPrice && timberCarolinaStock > 2400 && inventoryStatus <= 190){
        goldReserve -= timberCarolinaPrice;
        timberReserve += 10;
        timberCarolinaStock -= 10;
        timberCarolinaPrice = (2400 * 60)/ timberCarolinaStock;
        timberCarolinaPriceSell = (timberCarolinaStock * timberCarolinaPrice) / (timberCarolinaStock + 10);
        inventoryStatus += 10;
        timberCarolinaStockAvailable = timberCarolinaStock - 2400;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbercarolinastock").innerHTML = timberCarolinaStockAvailable;
        document.getElementById("timbercarolinaprice").innerHTML = timberCarolinaPrice.toFixed(1);
        document.getElementById("timbercarolinapricesell").innerHTML = timberCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < timberCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(timberCarolinaStock <= 2400) {
        document.getElementById("timbercarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("timbercarolinastock").style.background = "transparent"}, 1000)
    }
}
function timberCarolinaSell() {
    if (timberReserve >= 10){
        timberReserve -= 10;
        timberCarolinaStock += 10;
        goldReserve += timberCarolinaPriceSell;
        timberCarolinaPrice = (2400 * 60)/ timberCarolinaStock;
        timberCarolinaPriceSell = (timberCarolinaStock * timberCarolinaPrice) / (timberCarolinaStock + 10)  
        inventoryStatus -= 10;
        timberCarolinaStockAvailable = timberCarolinaStock - 2400;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("timber").innerHTML = timberReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("timbercarolinastock").innerHTML = timberCarolinaStockAvailable;
        document.getElementById("timbercarolinaprice").innerHTML = timberCarolinaPrice.toFixed(1);
        document.getElementById("timbercarolinapricesell").innerHTML = timberCarolinaPriceSell.toFixed(1);
    }
    if (timberReserve < 10) {
        document.getElementById("timber").style.background = "red";
        setTimeout(function(){document.getElementById("timber").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Tools

function toolsCarolinaBuy() {
    if (goldReserve >= toolsCarolinaPrice && toolsCarolinaStock > 600 && inventoryStatus <= 190){
        goldReserve -= toolsCarolinaPrice;
        toolsReserve += 10;
        toolsCarolinaStock -= 10;
        toolsCarolinaPrice = (600 * 200)/ toolsCarolinaStock;
        toolsCarolinaPriceSell = (toolsCarolinaStock * toolsCarolinaPrice) / (toolsCarolinaStock + 10); 
        inventoryStatus += 10;
        toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStockAvailable;
        document.getElementById("toolscarolinaprice").innerHTML = toolsCarolinaPrice.toFixed(1);
        document.getElementById("toolscarolinapricesell").innerHTML = toolsCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < toolsCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(toolsCarolinaStock <= 600) {
        document.getElementById("toolscarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("toolscarolinastock").style.background = "transparent"}, 1000)
    }
}
function toolsCarolinaSell() {
    if (toolsReserve >= 10){
        toolsReserve -= 10;
        toolsCarolinaStock += 10;
        goldReserve += toolsCarolinaPriceSell;
        toolsCarolinaPrice = (600 * 200)/ toolsCarolinaStock;
        toolsCarolinaPriceSell = (toolsCarolinaStock * toolsCarolinaPrice) / (toolsCarolinaStock + 10)  
        inventoryStatus -= 10;
        toolsCarolinaStockAvailable = toolsCarolinaStock - 600;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tools").innerHTML = toolsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("toolscarolinastock").innerHTML = toolsCarolinaStockAvailable;
        document.getElementById("toolscarolinaprice").innerHTML = toolsCarolinaPrice.toFixed(1);
        document.getElementById("toolscarolinapricesell").innerHTML = toolsCarolinaPriceSell.toFixed(1);
    }
    if (toolsReserve < 10) {
        document.getElementById("tools").style.background = "red";
        setTimeout(function(){document.getElementById("tools").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Textil

function textilCarolinaBuy() {
    if (goldReserve >= textilCarolinaPrice && textilCarolinaStock > 120 && inventoryStatus <= 190){
        goldReserve -= textilCarolinaPrice;
        textilReserve += 10;
        textilCarolinaStock -= 10;
        textilCarolinaPrice = (120 * 500)/ textilCarolinaStock;
        textilCarolinaPriceSell = (textilCarolinaStock * textilCarolinaPrice) / (textilCarolinaStock + 10);
        inventoryStatus += 10;
        textilCarolinaStockAvailable = textilCarolinaStock - 120;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStockAvailable;
        document.getElementById("textilcarolinaprice").innerHTML = textilCarolinaPrice.toFixed(1);
        document.getElementById("textilcarolinapricesell").innerHTML = textilCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < textilCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(textilCarolinaStock <= 120) {
        document.getElementById("textilcarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("textilcarolinastock").style.background = "transparent"}, 1000)
    }
}
function textilCarolinaSell() {
    if (textilReserve >= 10){
        textilReserve -= 10;
        textilCarolinaStock += 10;
        goldReserve += textilCarolinaPriceSell;
        textilCarolinaPrice = (120 * 500)/ textilCarolinaStock;
        textilCarolinaPriceSell = (textilCarolinaStock * textilCarolinaPrice) / (textilCarolinaStock + 10)  
        inventoryStatus -= 10;
        textilCarolinaStockAvailable = textilCarolinaStock - 120;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("textil").innerHTML = textilReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("textilcarolinastock").innerHTML = textilCarolinaStockAvailable;
        document.getElementById("textilcarolinaprice").innerHTML = textilCarolinaPrice.toFixed(1);
        document.getElementById("textilcarolinapricesell").innerHTML = textilCarolinaPriceSell.toFixed(1);
    }
    if (textilReserve < 10) {
        document.getElementById("textil").style.background = "red";
        setTimeout(function(){document.getElementById("textil").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Guns

function gunsCarolinaBuy() {
    if (goldReserve >= gunsCarolinaPrice && gunsCarolinaStock > 120 && inventoryStatus <= 190){
        goldReserve -= gunsCarolinaPrice;
        gunsReserve += 10;
        gunsCarolinaStock -= 10;
        gunsCarolinaPrice = (120 * 750)/ gunsCarolinaStock;
        gunsCarolinaPriceSell = (gunsCarolinaStock * gunsCarolinaPrice) / (gunsCarolinaStock + 10);
        inventoryStatus += 10;
        gunsCarolinaStockAvailable = gunsCarolinaStock - 120;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunscarolinastock").innerHTML = gunsCarolinaStockAvailable;
        document.getElementById("gunscarolinaprice").innerHTML = gunsCarolinaPrice.toFixed(1);
        document.getElementById("gunscarolinapricesell").innerHTML = gunsCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < gunsCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(gunsCarolinaStock <= 120) {
        document.getElementById("gunscarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("gunscarolinastock").style.background = "transparent"}, 1000)
    }
}
function gunsCarolinaSell() {
    if (gunsReserve >= 10){
        gunsReserve -= 10;
        gunsCarolinaStock += 10;
        goldReserve += gunsCarolinaPriceSell;
        gunsCarolinaPrice = (120 * 750)/ gunsCarolinaStock;
        gunsCarolinaPriceSell = (gunsCarolinaStock * gunsCarolinaPrice) / (gunsCarolinaStock + 10)  
        inventoryStatus -= 10;
        gunsCarolinaStockAvailable = gunsCarolinaStock - 120;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("guns").innerHTML = gunsReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("gunscarolinastock").innerHTML = gunsCarolinaStockAvailable;
        document.getElementById("gunscarolinaprice").innerHTML = gunsCarolinaPrice.toFixed(1);
        document.getElementById("gunscarolinapricesell").innerHTML = gunsCarolinaPriceSell.toFixed(1);
    }
    if (gunsReserve < 10) {
        document.getElementById("guns").style.background = "red";
        setTimeout(function(){document.getElementById("guns").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Slaves

function slavesCarolinaBuy() {
    if (goldReserve >= slavesCarolinaPrice && slavesCarolinaStock > 120 && inventoryStatus <= 190){
        goldReserve -= slavesCarolinaPrice;
        slavesReserve += 10;
        slavesCarolinaStock -= 10;
        slavesCarolinaPrice = (120 * 400)/ slavesCarolinaStock;
        slavesCarolinaPriceSell = (slavesCarolinaStock * slavesCarolinaPrice) / (slavesCarolinaStock + 10);
        inventoryStatus += 10;
        slavesCarolinaStockAvailable = slavesCarolinaStock - 120;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavescarolinastock").innerHTML = slavesCarolinaStockAvailable;
        document.getElementById("slavescarolinaprice").innerHTML = slavesCarolinaPrice.toFixed(1);
        document.getElementById("slavescarolinapricesell").innerHTML = slavesCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < slavesCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(slavesCarolinaStock <= 120) {
        document.getElementById("slavescarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("slavescarolinastock").style.background = "transparent"}, 1000)
    }
}
function slavesCarolinaSell() {
    if (slavesReserve >= 10){
        slavesReserve -= 10;
        slavesCarolinaStock += 10;
        goldReserve += slavesCarolinaPriceSell;
        slavesCarolinaPrice = (120 * 400)/ slavesCarolinaStock;
        slavesCarolinaPriceSell = (slavesCarolinaStock * slavesCarolinaPrice) / (slavesCarolinaStock + 10)  
        inventoryStatus -= 10;
        slavesCarolinaStockAvailable = slavesCarolinaStock - 120;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("slaves").innerHTML = slavesReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("slavescarolinastock").innerHTML = slavesCarolinaStockAvailable;
        document.getElementById("slavescarolinaprice").innerHTML = slavesCarolinaPrice.toFixed(1);
        document.getElementById("slavescarolinapricesell").innerHTML = slavesCarolinaPriceSell.toFixed(1);
    }
    if (slavesReserve < 10) {
        document.getElementById("slaves").style.background = "red";
        setTimeout(function(){document.getElementById("slaves").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Cotton

function cottonCarolinaBuy() {
    if (goldReserve >= cottonCarolinaPrice && cottonCarolinaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= cottonCarolinaPrice;
        cottonReserve += 10;
        cottonCarolinaStock -= 10;
        cottonCarolinaPrice = (500 * 750)/ cottonCarolinaStock;
        cottonCarolinaPriceSell = (cottonCarolinaStock * cottonCarolinaPrice) / (cottonCarolinaStock + 10); 
        inventoryStatus += 10;
        cottonCarolinaStockAvailable = cottonCarolinaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottoncarolinastock").innerHTML = cottonCarolinaStockAvailable;
        document.getElementById("cottoncarolinaprice").innerHTML = cottonCarolinaPrice.toFixed(1);
        document.getElementById("cottoncarolinapricesell").innerHTML = cottonCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < cottonCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(cottonCarolinaStock < 20) {
        document.getElementById("cottoncarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("cottoncarolinastock").style.background = "transparent"}, 1000)
    }
}
function cottonCarolinaSell() {
    if (cottonReserve >= 10){
        cottonReserve -= 10;
        cottonCarolinaStock += 10;
        goldReserve += cottonCarolinaPriceSell;
        cottonCarolinaPrice = (500 * 750)/ cottonCarolinaStock;
        cottonCarolinaPriceSell = (cottonCarolinaStock * cottonCarolinaPrice) / (cottonCarolinaStock + 10) 
        inventoryStatus -= 10;
        cottonCarolinaStockAvailable = cottonCarolinaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("cotton").innerHTML = cottonReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("cottoncarolinastock").innerHTML = cottonCarolinaStockAvailable;
        document.getElementById("cottoncarolinaprice").innerHTML = cottonCarolinaPrice.toFixed(1);
        document.getElementById("cottoncarolinapricesell").innerHTML = cottonCarolinaPriceSell.toFixed(1);
    }
    if (cottonReserve < 10) {
        document.getElementById("cotton").style.background = "red";
        setTimeout(function(){document.getElementById("cotton").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Sugar

function sugarCarolinaBuy() {
    if (goldReserve >= sugarCarolinaPrice && sugarCarolinaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= sugarCarolinaPrice;
        sugarReserve += 10;
        sugarCarolinaStock -= 10;
        sugarCarolinaPrice = (500 * 300)/ sugarCarolinaStock;
        sugarCarolinaPriceSell = (sugarCarolinaStock * sugarCarolinaPrice) / (sugarCarolinaStock + 10);
        inventoryStatus += 10;
        sugarCarolinaStockAvailable = sugarCarolinaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarcarolinastock").innerHTML = sugarCarolinaStockAvailable;
        document.getElementById("sugarcarolinaprice").innerHTML = sugarCarolinaPrice.toFixed(1);
        document.getElementById("sugarcarolinapricesell").innerHTML = sugarCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < sugarCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(sugarCarolinaStock < 20) {
        document.getElementById("sugarcarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("sugarcarolinastock").style.background = "transparent"}, 1000)
    }
}
function sugarCarolinaSell() {
    if (sugarReserve >= 10){
        sugarReserve -= 10;
        sugarCarolinaStock += 10;
        goldReserve += sugarCarolinaPriceSell;
        sugarCarolinaPrice = (500 * 300)/ sugarCarolinaStock;
        sugarCarolinaPriceSell = (sugarCarolinaStock * sugarCarolinaPrice) / (sugarCarolinaStock + 10)  
        inventoryStatus -= 10;
        sugarCarolinaStockAvailable = sugarCarolinaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("sugar").innerHTML = sugarReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("sugarcarolinastock").innerHTML = sugarCarolinaStockAvailable;
        document.getElementById("sugarcarolinaprice").innerHTML = sugarCarolinaPrice.toFixed(1);
        document.getElementById("sugarcarolinapricesell").innerHTML = sugarCarolinaPriceSell.toFixed(1);
    }
    if (sugarReserve < 10) {
        document.getElementById("sugar").style.background = "red";
        setTimeout(function(){document.getElementById("sugar").style.background = "transparent"}, 1000)
    }
}


// SAINT CAROLINA
// Tabacco

function tabaccoCarolinaBuy() {
    if (goldReserve >= tabaccoCarolinaPrice && tabaccoCarolinaStock >= 20 && inventoryStatus <= 190){
        goldReserve -= tabaccoCarolinaPrice;
        tabaccoReserve += 10;
        tabaccoCarolinaStock -= 10;
        tabaccoCarolinaPrice = (1000 * 300)/ tabaccoCarolinaStock;
        tabaccoCarolinaPriceSell = (tabaccoCarolinaStock * tabaccoCarolinaPrice) / (tabaccoCarolinaStock + 10);
        inventoryStatus += 10;
        tabaccoCarolinaStockAvailable = tabaccoCarolinaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus; 
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccocarolinastock").innerHTML = tabaccoCarolinaStockAvailable;
        document.getElementById("tabaccocarolinaprice").innerHTML = tabaccoCarolinaPrice.toFixed(1);
        document.getElementById("tabaccocarolinapricesell").innerHTML = tabaccoCarolinaPriceSell.toFixed(1);
    }
    if (goldReserve < tabaccoCarolinaPrice) {
        document.getElementById("gold").style.background = "red";
        setTimeout(function(){document.getElementById("gold").style.background = "transparent"}, 1000)
    }
    if (inventoryStatus > 190) {
        document.getElementById("inventory").style.background = "red";
        setTimeout(function(){document.getElementById("inventory").style.background = "transparent"}, 1000)
    }
    if(tabaccoCarolinaStock < 20) {
        document.getElementById("tabaccocarolinastock").style.background = "red";
        setTimeout(function(){document.getElementById("tabaccocarolinastock").style.background = "transparent"}, 1000)
    }
}
function tabaccoCarolinaSell() {
    if (tabaccoReserve >= 10){
        tabaccoReserve -= 10;
        tabaccoCarolinaStock += 10;
        goldReserve += tabaccoCarolinaPriceSell;
        tabaccoCarolinaPrice = (1000 * 300)/ tabaccoCarolinaStock;
        tabaccoCarolinaPriceSell = (tabaccoCarolinaStock * tabaccoCarolinaPrice) / (tabaccoCarolinaStock + 10) ; 
        inventoryStatus -= 10;
        tabaccoCarolinaStockAvailable = tabaccoCarolinaStock - 10;
        document.getElementById("inventory").innerHTML = inventoryStatus;
        document.getElementById("tabacco").innerHTML = tabaccoReserve;
        document.getElementById("gold").innerHTML = goldReserve.toFixed(1);
        document.getElementById("tabaccocarolinastock").innerHTML = tabaccoCarolinaStockAvailable;
        document.getElementById("tabaccocarolinaprice").innerHTML = tabaccoCarolinaPrice.toFixed(1);
        document.getElementById("tabaccocarolinapricesell").innerHTML = tabaccoCarolinaPriceSell.toFixed(1);
    }
    if (tabaccoReserve < 10) {
        document.getElementById("tabacco").style.background = "red";
        setTimeout(function(){document.getElementById("tabacco").style.background = "transparent"}, 1000)
    }
}