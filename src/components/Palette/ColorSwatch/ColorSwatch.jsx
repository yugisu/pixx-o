import React, { Component } from 'react';

import './ColorSwatch.scss';

class ColorSwatch extends Component {
  static defaultProps = {
    primary: '#ffab00',
    secondary: '#000',
  };

  shouldComponentUpdate(nextProps) {
    const { primary, secondary } = this.props;

    return primary !== nextProps.primary, secondary !== nextProps.secondary;
  }

  render() {
    const { primary, secondary } = this.props;

    return (
      <section className="palette__color-swatch">
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
