//*Variables*//

var Clicks = 0
var ClickPoints = 5
var ClicksPerClick = 1
var ClicksPerSecond = 0
var ClicksPerClickCost = 9
var ClicksPerSecondCost = 19
var CPCCOne = 10
var CPSCOne = 20
var CT = "Total Clicks = "
var CPT = "Click Points = "
var CP = " Click Points"
var CPCT = "ClicksPerClick = "
var CPST = "ClicksPerSecond = "
var CPCC = "Next ClicksPerClick Purchase Will Cost  "
var CPSC = "Next ClicksPerSecond Purchase Will Cost  "

//*Variables*//

//*Functions*//

function AddClickStuff() {
  document.getElementById("click").innerHTML = CT + Clicks;
  document.getElementById("click2").innerHTML = CPT + ClickPoints;
  document.getElementById("click3").innerHTML = CPCT + ClicksPerClick;
  document.getElementById("click4").innerHTML = CPST + ClicksPerSecond;
  document.getElementById("click5").innerHTML = CPCC + CPCCOne + CP;
  document.getElementById("click6").innerHTML = CPSC + CPSCOne + CP;
}

function PlayClickingAudio() {
  var audio = new Audio('');
  audio.play();
}

//*ButtonFunctions*//

function ButtonClickAddClick() {
  Clicks += ClicksPerClick;
  ClickPoints += ClicksPerClick;
  AddClickStuff()
}

function ButtonCPC() {
  if (ClickPoints > ClicksPerClickCost) {
    ClickPoints -= ClicksPerClickCost;
    ClicksPerClickCost *= 2
    CPCCOne *= 2
    ClicksPerClick += 1;
    AddClickStuff()
  }
}


function ButtonCPS() {
  if (ClickPoints > ClicksPerSecondCost) {
    ClickPoints -= ClicksPerSecondCost;
    ClicksPerSecondCost *= 2
    CPSCOne *= 2
    ClicksPerSecond += 1;
  }
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

//*ButtonFunctions*//

setInterval(AddEverySecond, 1000);
function AddEverySecond() {
  Clicks += ClicksPerSecond;
  ClickPoints += ClicksPerSecond;
  AddClickStuff()
}

setInterval(StartStats, 1);
function StartStats() {
  AddClickStuff();
}

//*Functions*//