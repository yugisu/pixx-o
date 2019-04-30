import { assert } from '../utilities';

/**
 * Service to deliver event handlers which needs to be called & spreaded into Tile hook & Canvas events.
 *
 * @example
 * const [tileHook, canvasEvents] = paintingService('tile', colors, handleDraw);
 * <Canvas ...canvasEvents />
 * <Tile tileHook />
 *
 * @param {string} tileClassName - a className of canvas tile to paint.
 * @param {Object} colors - colors of paint.
 */
const paintingService = (tileClassName, colors, drawHandler, tiles) => {
  let _isPainting = false;
  let color = null;
  const _tiles = tiles;

  const _startDraw = (event) => {
    assert(
      event.type === 'mousedown',
      'startDraw should be assigned to \'mousedown\' event!'
    );

    _isPainting = true;
    color = colors[!event.button ? 'primary' : 'secondary'];

    if (event.target.classList.contains(tileClassName)) {
      // event.target.style.backgroundColor = color;
      const [y, x] = event.target.dataset.coords.split('-');
      _tiles[y][x] = color;
    }

    window.addEventListener('mouseup', _stopDraw);
  };

  const _draw = (event) => {
    if (_isPainting) {
      assert(
        event.type === 'mouseover',
        'draw should be assigned to \'mouseover\' event!'
      );

      if (event.target.classList.contains(tileClassName)) {
        // event.target.style.backgroundColor = color;
      }
    }
  };

  const _stopDraw = () => {
    _isPainting = false;
    color = null;

    drawHandler(_tiles);

    window.removeEventListener('mouseup', _stopDraw);
  };

  const _hookForTile = (idxH, idxW) => () => {
    if (_isPainting) {
      // console.log(`Tile ${idxH}-${idxW} now ${color} from _hook`);
      // _tiles[idxH][idxW] = color;
    }
  };

  return [
    _hookForTile,
    {
      onMouseDown: _startDraw,
      onMouseOver: _draw,
    },
  ];
};

export default paintingService;
