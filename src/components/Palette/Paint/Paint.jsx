import React from 'react';

import './Paint.scss';

const Paint = ({ color, handleColorChange }) => {
  const onColorChange = (e) => {
    handleColorChange({ [e.button ? 'secondary' : 'primary']: color });
  };

  return (
    <div
      className="palette__paintboard__paint"
      style={{ background: color }}
      onMouseDown={onColorChange}
    />
  );
};

export default Paint;
