import React, { Component } from 'react';
import './App.css';
import TileGrid from './Components/Container/TileGrid/TileGrid';

class App extends Component{
  
  render () {
    return (
      <div className="App">
        <TileGrid />
      </div>
    );
  }
}

export default App;
