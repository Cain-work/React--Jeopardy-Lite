import React from 'react';
import './App.css';
import Welcome from "./components/welcome/Welcom";
import Clock from './components/clock/Clock';


function App() {
  return (
    <div className="App">
      <Welcome name="Tony"/>
      <Clock />
    </div>
  );
}

export default App;
