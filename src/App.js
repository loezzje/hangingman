import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameContainer />
      </div>
    );
  }
}

export default App;
