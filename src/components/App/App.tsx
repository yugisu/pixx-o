import React, { useEffect } from 'react';

import Canvas from '../Canvas';
import Palette from '../Palette';
import { Toolkit } from '../Toolkit';

import * as S from './App.styles';

export const App = () => {
  useEffect(() => {
    window.oncontextmenu = (e) => {
      e.preventDefault();
      return false;
    };
  }, []);

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
