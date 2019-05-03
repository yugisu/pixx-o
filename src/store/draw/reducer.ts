import produce from 'immer';

import { Sizes } from './types';
import { DrawAction } from './actions';

export type DrawState = {
  pixels: string[][];
  sizes: Sizes;
};

const initialState: DrawState = (() => {
  const sizes = {
    tileSize: 25,
    height: 15,
    width: 25,
  };

  return {
    sizes,
    pixels: Array(sizes.height).fill(Array(sizes.width).fill(undefined)),
  };
})();

export const drawReducer = (
  state: DrawState = initialState,
  action: DrawAction
) => {
  switch (action.type) {
    case 'DRAW':
      const {
        coords: [x, y],
        color,
      } = action.payload;

      return produce(state, (draft) => {
        draft.pixels[y][x] = color;
      });
  }
  return state;
};
