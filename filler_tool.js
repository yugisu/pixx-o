function fillerToolHandler(event) {
  let target = event.target;
  let selectedTiles = [target];

  if (target.className === 'tile') {
    let THAT_COLOR = target.style.backgroundColor;

    let lookNeighbors = (indeces) => {
      let x = parseInt(indeces[0]),
        y = parseInt(indeces[1]);
      let curTile = 'tile' + x + '_' + y;
      let curTileDOM = document.getElementById(curTile);

      curTileDOM.style.backgroundColor = chooseColor(event);

      // RANDOM FILL - IS AWESOME!!!
      // curTileDOM.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

      for (let idxs of [[0, -1], [1, 0], [-1, 0], [0, 1]]) {
        let neighX = x + idxs[0],
          neighY = y + idxs[1];
        let neighborTileId = `tile${neighX}_${neighY}`;
        let neighborTile = document.getElementById(neighborTileId);
        if (!neighborTile || selectedTiles.includes(neighborTile)) {
          continue;
        }

        if (neighborTile.style.backgroundColor === THAT_COLOR) {
          if (!selectedTiles.includes(neighborTile)) {
            selectedTiles.push(neighborTile);
            lookNeighbors([neighX, neighY]);
          }
        }
      }
    };
    const startingElementId = target.id;

    const startCoords = startingElementId
      .split(/\D+/)
      .map((value, index) => parseInt(value));
    startCoords.shift();

    lookNeighbors(startCoords);
  }
}

function switchFillerToolFunction() {
  function enableFillerTool() {
    disablePencilTool();
    document
      .getElementById('canvas')
      .addEventListener('mousedown', fillerToolHandler);
    document.getElementById('filler_tool').style.backgroundColor = 'green';
  }

  function disableFillerTool() {
    document
      .getElementById('canvas')
      .removeEventListener('mousedown', fillerToolHandler);
    document.getElementById('filler_tool').style.backgroundColor = '#d9d9d9';
    enablePencilTool();
  }

  disableFillerTool();
  let enabled = false;

  return function() {
    enabled = !enabled;
    enabled ? enableFillerTool() : disableFillerTool();
  };
}
