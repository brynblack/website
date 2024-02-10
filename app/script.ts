var wrapper: HTMLElement = document.createElement("div");
var squares = document.getElementsByClassName('square') as HTMLCollectionOf<HTMLElement>;

const createTile = () => {
  const tile = document.createElement("div");
  tile.classList.add("square");
  return tile;
}

const createTiles = (quantity: number) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile());
  })
}

const createGrid = () => {
  wrapper.innerHTML = "";
  let columns = Math.floor(document.body.clientWidth / 50);
  let rows = Math.floor(document.body.clientHeight / 50);
  wrapper.style.setProperty("--columns", columns as unknown as string);
  wrapper.style.setProperty("--rows", rows as unknown as string);
  createTiles(columns * rows)
}

window.onload = () => {
  wrapper = document.getElementById('wrapper') as HTMLElement;
  createGrid();
  setTimeout(function () {
    changeColours();
  }, 100);
}

window.onresize = () => {
  createGrid();
  setTimeout(() => {
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

setInterval(() => {
  changeColours();
}, 3000);


