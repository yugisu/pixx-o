import React from 'react';

import './Tile.scss';

class Tile extends React.Component {
  shouldComponentUpdate({ color }) {
    return this.props.color !== color;
  }

  render() {
    const { idxH, idxW, color, tileHook } = this.props;

    return (
      <div
        className="canvas__tile"
        style={{ backgroundColor: color }}
        data-coords={`${idxH}-${idxW}`}
        // onMouseOver={tileHook(idxH, idxW)}
      />
    );
  }
}

export default Tile;
