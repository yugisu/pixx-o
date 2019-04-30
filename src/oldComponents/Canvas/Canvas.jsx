import React, { Component } from 'react';
import { paintingService } from '../../services';

import Tile from './components/Tile';

import './Canvas.scss';

class Canvas extends Component {
  //TODO: set default height & width in props

  state = {
    drawing: false,
  };

  // TODO: figure out how to solve a painting problem
  //  * write painting process on a paper

  render() {
    const {
      canvasSettings: { height, width, tileSize },
      tiles,
      currentColors,
      handleDraw,
      handleUpdateTiles,
    } = this.props;

    const [tileHook, canvasEvents] = paintingService(
      'canvas__tile',
      currentColors,
      handleUpdateTiles,
      tiles
    );

    const canvasStyleSettings = {
      '--tile-size': tileSize,
      '--width-in-tiles': width,
      '--height-in-tiles': height,
      width: tileSize * width,
      height: tileSize * height,
    };

    const tileArray = tiles.map((row, rowIdx) =>
      row.map((color, elIdx) => (
        <Tile
          key={`tile-${rowIdx}-${elIdx}`}
          tileHook={tileHook}
          color={color}
          idxH={rowIdx}
          idxW={elIdx}
        />
      ))
    );

    return (
      <div className="canvas" style={canvasStyleSettings} {...canvasEvents}>
        {tileArray}
      </div>
    );
  }
}

export default Canvas;
