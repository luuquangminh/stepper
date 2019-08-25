import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  isBrowser,
} from "react-device-detect";
import Stepper from "./features/components/stepper"
function App() {
  const stepType = isBrowser ? false : true
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Stepper actual={1} steppers={['step1', 'step2', 'step3','step4','step5']} validIcon="fa fa-check" isVertical={stepType}/>
      </div>
      </header>
    </div>
  );
}

export default App;
