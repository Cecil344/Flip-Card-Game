import React, { Component } from 'react';
import Graph from './Graph';
import Buttons from './Buttons';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Graph />
        <Buttons />
      </div>
    );
  }
}

export default App;
