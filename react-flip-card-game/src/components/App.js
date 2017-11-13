import React, { Component } from 'react';
import Card from "./Card";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import FlipButton from "./FlipButton";
import ShuffleButton from "./ShuffleButton";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="Title"> Flash Card App </h1>
        <Card />
        <div className="ButtonHolder">
        <PrevButton className="Buttons" />
        <NextButton className="Buttons" />
        <FlipButton className="Buttons" />
        <ShuffleButton className="Buttons" />
      </div>
      </div>
    );
  }
}

export default App;
