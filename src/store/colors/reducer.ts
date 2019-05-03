import produce from 'immer';

import { ColorAction } from './actions';

type ColorsState = {
  colors: string[];
  currentColors: { primary: string; secondary: string };
};

const initialState: ColorsState = {
  colors: ['#fff', '#222', '#000', 'rgb(255, 171, 0)', '#9f06ce'],
  currentColors: {
    primary: 'rgb(255, 171, 0)',
    secondary: '#000',
  },
};

export const colorsReducer = (
  state: ColorsState = initialState,
  action: ColorAction
) => {
  switch (action.type) {
    case 'ADD_COLOR':
      return produce(state, (draft) => {
        draft.colors.push(action.payload);
      });
    case 'CHANGE_COLOR':
      return {
        ...state,
        currentColors: { ...state.currentColors, ...action.payload },
      };
  }
  return state;
};
