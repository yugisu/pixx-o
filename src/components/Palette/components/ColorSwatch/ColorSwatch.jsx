import React from 'react';

import './ColorSwatch.scss';

//TODO: implement swap animation!

const ColorSwatch = ({ colors: { primary, secondary }, handleColorChange }) => {
  const onColorChange = () => {
    handleColorChange({ primary: secondary, secondary: primary });
  };

  return (
    <section className="palette__color-swatch" onClick={onColorChange}>
      <div
        className="palette__color-swatch__color palette__color-swatch__color--primary"
        style={{ background: primary }}
      >
        current
      </div>
      <div
        className="palette__color-swatch__color palette__color-swatch__color--secondary"
        style={{ background: secondary }}
      >
        colors
      </div>
    </section>
  );
};

export default ColorSwatch;
