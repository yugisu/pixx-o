const TILE_DEFAULT_BACKGROUND = '#fff';

const TILE_SIZE = 25;
document.body.style.setProperty('--tile-size', TILE_SIZE + '');

heightOfCanvas = 20;
contentContainerPadding = 10;

let currentColor = '#000',
  currentColor1 = '#ffab00',
  currentColor2 = '#000';

document.body.addEventListener('keydown', (event) => {
  if (event.code === 'KeyR') {
    buildCanvas();
  }
});

document.body.height = window.clientHeight;

function chooseColor(event) {
  if (event.target.className === 'tile') {
    if (event.type === 'mousedown' || event.type === 'mouseup') {
      currentColor = event.button === 0 ? currentColor1 : currentColor2;
    }
    return currentColor;
  }
}

function Paint(number, color) {
  let dom = document.createElement('div');
  dom.className = 'paint';
  dom.id = 'paint' + number;
  dom.style.backgroundColor = color;

  dom.addEventListener('mousedown', (event) => {
    let newColor = event.target.style.backgroundColor;
    if (event.button === 0) {
      currentColor1 = newColor;
      document
        .getElementById('current-color')
        .style.setProperty('--current-color1', newColor);
    }
    if (event.button === 2) {
      currentColor2 = newColor;
      document
        .getElementById('current-color')
        .style.setProperty('--current-color2', newColor);
    }
  });

  return {
    dom: dom,
    color: () => {
      return dom.style.backgroundColor;
    },
    number: number,
  };
}

function Tile(x, y) {
  let dom = document.createElement('div');
  dom.className = 'tile';
  dom.id = 'tile' + x + '_' + y;
  dom.style.backgroundColor = TILE_DEFAULT_BACKGROUND;

  return {
    dom: dom,
    color: () => {
      return dom.style.backgroundColor;
    },
    x: x,
    y: y,
  };
}

function buildAll() {
  buildPalette();
  buildCanvas();
}

function buildPalette() {
  colors = [
    '#fff',
    '#4f4f4f',
    '#000',
    '#ff1c1c',
    '#ffab00',
    '#ffef00',
    '#40be00',
    '#00f1e5',
    'lightblue',
    '#1b3fdf',
    '#8300bb',
    '#ff00ae',
    '#ff1c1c',
    '#ffab00',
    '#ffef00',
    '#40be00',
    'rgb(255, 128, 128)',
    'rgb(255, 255, 128)',
    'rgb(64, 0, 64)',
  ];

  let palette = document.createElement('div');
  palette.id = 'palette';

  let newColor = document.createElement('input');
  newColor.id = 'newColor';
  newColor.className = 'paint';
  newColor.type = 'color';
  newColor.addEventListener('change', (event) => {
    document
      .getElementById('palette')
      .appendChild(
        Paint(palette.childNodes.length - 1, event.target.value).dom
      );
  });
  palette.appendChild(newColor);

  colorArray = [];

  for (let i = 0; i < colors.length; i++) {
    let paint = Paint(i, colors[i]);

    colorArray[i] = paint;
    palette.appendChild(paint.dom);
  }

  document
    .getElementById('palette')
    .parentNode.replaceChild(palette, document.getElementById('palette'));
}

function buildCanvas(width, height) {
  switchFillerTool = switchFillerToolFunction();

  let canvas = document.createElement('div');
  canvas.id = 'canvas';

  // auto-fill
  if (!width) {
    let content = document.getElementById('content');
    content.style.setProperty(
      '--content-padding',
      contentContainerPadding + 'px'
    );
    width = Math.floor(
      (parseInt(
        getComputedStyle(document.body).getPropertyValue('--content-width')
      ) -
        contentContainerPadding * 4) /
        TILE_SIZE
    );
  }
  if (!height) {
    height = heightOfCanvas;
  }

  tileArray = [];

  if (tileArray.length === 0) {
    for (let i = 0; i < height; i++) {
      tileArray.push([]);

      let row = document.createElement('div');
      row.className = 'row';
      row.id = 'row' + i;

      for (let j = 0; j < width; j++) {
        let tile = Tile(j, i);
        tileArray[i][j] = tile;
        row.appendChild(tile.dom);
      }

      canvas.appendChild(row);
    }
  } else {
    for (let i = 0; i < height; i++) {
      let row = document.createElement('div');
      row.className = 'row';
      row.id = 'row' + i;

      for (let j = 0; j < width; j++) {
        let tile = tileArray[i][j];
        row.appendChild(tile.dom);
      }

      canvas.appendChild(row);
    }
  }

  document
    .getElementById('canvas')
    .parentNode.replaceChild(canvas, document.getElementById('canvas'));
  enablePencilTool();
}
