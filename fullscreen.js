var fullButton = document.querySelector("#fullscreen");
var fullArea = document.querySelector("#playarea");
fullButton.onclick = function () {
    fullArea.requestFullscreen();
}
document.querySelector("#canvas").oncontextmenu = null;