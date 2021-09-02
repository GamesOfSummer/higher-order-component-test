import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [input, setInput] = useState("");
const [output, setOutput] = useState("");

function ColorCodedFunction(color: any, input : any) {
    return <div style={{ color: color }}>{input}</div>;
}

function takeInput(event : any, customFunction : any) {
  const value = input;
  if (value.indexOf("good") !== -1) {
    setOutput(customFunction("green", input));
  } else {
    setOutput(customFunction("red", input));
  }
}

return (
  <div className="center">
    <label>This is one sweet input field, yo</label>
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={(e) => takeInput(e, ColorCodedFunction)}>submit</button>
    </div>
    <p>{output}</p>
  </div>
);
};


export default App;
