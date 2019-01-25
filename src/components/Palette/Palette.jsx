import React, { Component } from 'react';
import './Palette.scss';
import ColorSwatch from './ColorSwatch';
import ColorBoard from './ColorBoard';

class Palette extends Component {
  render() {
    return (
      <div className="palette">
        <ColorSwatch />
        <ColorBoard />
      </div>
    );
  }
}

export default Palette;
