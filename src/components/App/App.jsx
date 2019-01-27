import React, { Component } from 'react';
import { AH } from '../../utilities';

import AppHeader from './components/AppHeader/AppHeader';
import AppBody from './components/AppBody/AppBody';
import Canvas from '../Canvas/index';
import Palette from '../Palette/index';
import ToolBar from '../ToolBar/ToolBar';

import './App.scss';

//TODO: REIMPLEMENT STATE WITH HOOKS

class App extends Component {
  state = {
    currentColors: {
      primary: '#ffab00',
      secondary: '#000000',
    },
    canvasSettings: {
      height: 20,
      width: 40,
      tileSize: 20,
    },
    canvasTiles: Array(20).fill(Array(40).fill(null)),
  };

  handleDraw = (idxH, idxW, mouseButton) => {
    const {
      currentColors: { primary, secondary },
    } = this.state;

    this.setState(({ canvasTiles }) => ({
      canvasTiles: AH.replaceElement(
        canvasTiles,
        idxH,
        AH.replaceElement(
          canvasTiles[idxH],
          idxW,
          !mouseButton ? primary : secondary
        )
      ),
    }));
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
    const { currentColors, canvasSettings, canvasTiles } = this.state;

    return (
      <div className="app" onContextMenu={this.preventContextMenu}>
        <AppHeader>pixx-O pixel art creator</AppHeader>
        <AppBody>
          <Canvas
            canvasSettings={canvasSettings}
            tiles={canvasTiles}
            handleDraw={this.handleDraw}
          />
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
