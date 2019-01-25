import React, { Component } from 'react';
import './App.scss';
import Canvas from '../Canvas/index';
import Palette from '../Palette/index';
import ToolBar from '../ToolBar/ToolBar';
import AppHeader from '../AppHeader/AppHeader';
import AppBody from '../AppBody/AppBody';

//TODO: REIMPLEMENT STATE WITH HOOKS

class App extends Component {
  state = {
    currentColors: {
      primary: '#ffab00',
      secondary: '#000000',
    },
  };

  preventContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  handleColorChange = (colorChange) => {
    this.setState(({ currentColors: prevColors }) => ({
      currentColors: {
        ...prevColors,
        ...colorChange,
      },
    }));
  };

  render() {
    const { currentColors } = this.state;

    return (
      <div className="app" onContextMenu={this.preventContextMenu}>
        <AppHeader>pixx-O pixel art creator</AppHeader>
        <AppBody>
          <Canvas />
          <Palette
            currentColors={currentColors}
            handleColorChange={this.handleColorChange}
          />
        </AppBody>
        <ToolBar />
      </div>
    );
  }
}

export default App;
