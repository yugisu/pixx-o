import React from 'react';

import './NewPaint.scss';

class NewPaint extends React.Component {
  shouldComponentUpdate({ color }) {
    return color !== this.props.color;
  }

  onNewPaint = (e) => {
    this.props.handleNewPaint(e.target.value);
  };

  render() {
    return (
      <input
        className="palette__paintboard__new-paint"
        type="color"
        defaultValue="#ffffff"
        onInput={this.onNewPaint}
      />
    );
  }
}

export default NewPaint;
