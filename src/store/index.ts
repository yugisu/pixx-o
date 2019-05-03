import { createStore, combineReducers } from 'redux';

import { drawReducer } from './draw/reducer';
import { colorsReducer } from './colors/reducer';

const reducer = combineReducers({ draw: drawReducer, color: colorsReducer });

export type StoreState = ReturnType<typeof reducer>;

export const store = createStore(reducer);
