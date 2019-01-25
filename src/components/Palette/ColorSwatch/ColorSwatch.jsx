import React, { Component } from 'react';

import './ColorSwatch.scss';

//TODO: implement swap animation!

class ColorSwatch extends Component {
  static defaultProps = {
    colors: {
      primary: '#ffab00',
      secondary: '#000',
    },
  };

  onColorChange = () => {
    const {
      colors: { primary, secondary },
      handleColorChange,
    } = this.props;

    handleColorChange({ primary: secondary, secondary: primary });
  };

  shouldComponentUpdate(nextProps) {
    const {
      colors: { primary, secondary },
    } = this.props;

    return primary !== nextProps.primary || secondary !== nextProps.secondary;
  }

  render() {
    const {
      colors: { primary, secondary },
    } = this.props;

    return (
      <section className="palette__color-swatch" onClick={this.onColorChange}>
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
  }
}

export default ColorSwatch;
