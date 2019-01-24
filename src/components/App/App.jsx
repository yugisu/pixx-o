import React from 'react';
import './App.scss';
import Canvas from '../Canvas/index';
import Palette from '../Palette/index';
import ToolBar from '../ToolBar/ToolBar';
import AppHeader from '../AppHeader/AppHeader';
import AppBody from '../AppBody/AppBody';

const App = () => {
  return (
    <div className="app">
      <AppHeader>pixx-O pixel art creator</AppHeader>
      <AppBody>
        <Canvas />
        <Palette />
      </AppBody>
      <ToolBar />
    </div>
  );
};

export default App;
