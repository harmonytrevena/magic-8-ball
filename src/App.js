import React from "react";
import EightBall from "./components/EightBall";

import logo from './logo.svg';

import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <EightBall />
    </div>
  );
}

export default App;
