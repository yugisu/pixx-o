import React from 'react';

import Paint from '../Paint';

import './PaintBoard.scss';

const PaintBoard = ({ handleColorChange }) => {
  const colors = [
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

  const paints = colors.map((color, idx) => (
    <Paint
      color={color}
      key={`paint-${idx}-${color}`}
      handleColorChange={handleColorChange}
    />
  ));

  return <section className="palette__paintboard">{paints}</section>;
};

export default PaintBoard;
