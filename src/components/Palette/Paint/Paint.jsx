import React from 'react';

import './Paint.scss';

class Paint extends React.Component {
  shouldComponentUpdate({ color }) {
    return color !== this.props.color;
  }

  onColorChange = (e) => {
    const { color, handleColorChange } = this.props;

    handleColorChange({
      [e.button ? 'secondary' : 'primary']: color,
    });
  };

  render() {
    return (
      <div
        className="palette__paintboard__paint"
        style={{ background: this.props.color }}
        onMouseDown={this.onColorChange}
      />
    );
  }
}

export default Paint;
