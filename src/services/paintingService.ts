import { assert } from '../utilities';

export default class paintingService {
  _isPainting = false;

  drawStart = (e: Event) => {
    assert(e.type === 'mouseDown');

    this._isPainting = true;
  };
}
