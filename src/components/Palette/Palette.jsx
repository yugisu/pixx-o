import React, { Component } from 'react';

import ColorSwatch from './ColorSwatch';
import PaintBoard from './PaintBoard';

import './Palette.scss';

const Palette = ({ currentColors, handleColorChange }) => {
  return (
    <div className="palette">
      <ColorSwatch
        colors={currentColors}
        handleColorChange={handleColorChange}
      />
      <PaintBoard handleColorChange={handleColorChange} />
    </div>
  );
};

export default Palette;
