var wrapper = document.createElement("a");
var squares = document.getElementsByClassName('square');
var createTile = function () {
    var tile = document.createElement("div");
    tile.classList.add("square");
    return tile;
};
var createTiles = function (quantity) {
    Array.from(Array(quantity)).map(function (tile, index) {
        wrapper.appendChild(createTile());
    });
};
var createGrid = function () {
    wrapper.innerHTML = "";
    var columns = Math.floor(document.body.clientWidth / 50);
    var rows = Math.floor(document.body.clientHeight / 50);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
};
window.onload = function () {
    wrapper = document.getElementById('wrapper');
    createGrid();
    setTimeout(function () {
        changeColours();
    }, 100);
};
window.onresize = function () {
    createGrid();
    setTimeout(function () {
        changeColours();
    }, 100);
};
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var colours = [
    "#3c493fff",
    "#222725ff",
    "#121113ff",
];
function changeColours() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
    }
}
setInterval(function () {
    changeColours();
}, 3000);
