import React from 'react';

import './Tile.scss';

const Tile = ({ idxH, idxW, color, handleDraw }) => {
  const onDraw = ({ button }) => {
    handleDraw(idxH, idxW, button);
  };

  return (
    <div
      className="canvas__tile"
      style={{ backgroundColor: color }}
      onMouseDown={onDraw}
    />
  );
};

export default Tile;
