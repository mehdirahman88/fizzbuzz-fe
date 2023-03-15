import React from 'react';
import './App.css';
import FizzBuzz from "./pages/FizzBuzz";
import Config from "./Config";

function App() {
  return <FizzBuzz initialCounter={Config.initialCounter}/>;
}

export default App;
