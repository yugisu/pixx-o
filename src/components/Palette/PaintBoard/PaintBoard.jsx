import React from 'react';

import Paint from '../Paint';

import './PaintBoard.scss';
import NewPaint from '../NewPaint/NewPaint';

class PaintBoard extends React.Component {
  state = {
    colors: [
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
      'rgb(255, 128, 128)',
      'rgb(255, 255, 128)',
      'rgb(64, 0, 64)',
    ],
  };

  shouldComponentUpdate(_, { colors: nextColors }) {
    return this.state.colors.length !== nextColors.length;
  }

  handleNewPaint = (newColor) => {
    if (this.state.colors.includes(newColor)) {
      this.setState(({ colors }) => ({
        colors: [...colors, newColor],
      }));
    }

    this.props.handleColorChange({ primary: newColor });
  };

  render() {
    const { handleColorChange } = this.props;
    const { colors } = this.state;

    const paints = colors.map((color, idx) => (
      <Paint
        color={color}
        key={`paint-${idx}-${color}`}
        handleColorChange={handleColorChange}
      />
    ));

    return (
      <section className="palette__paintboard">
        <NewPaint handleNewPaint={this.handleNewPaint} />
        {paints}
      </section>
    );
  }
}

export default PaintBoard;
