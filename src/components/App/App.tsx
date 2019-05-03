import React from 'react';

import Canvas from '../Canvas';
import { Palette } from '../Palette';
import { Toolkit } from '../Toolkit';

import * as S from './App.styles';

export const App = () => {
  return (
    <S.This>
      <S.Header />

      <S.Body>
        <Canvas />
        <Palette />
      </S.Body>

      <Toolkit />
    </S.This>
  );
};
