import React from 'react';

import ColorSwatch from './ColorSwatch';
import PaintBoard from './PaintBoard';

import './Palette.scss';

// possibleTODO: delegate color state to this component?

class Palette extends React.Component {
  shouldComponentUpdate({ currentColors: { primary, secondary } }) {
    return (
      primary !== this.props.currentColors.primary ||
      secondary !== this.props.currentColors.secondary
    );
  }

  render() {
    const { currentColors, handleColorChange } = this.props;
    return (
      <div className="palette">
        <ColorSwatch
          colors={currentColors}
          handleColorChange={handleColorChange}
        />
        <PaintBoard handleColorChange={handleColorChange} />
      </div>
    );
  }
}

export default Palette;
