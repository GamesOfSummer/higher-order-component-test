import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {const [input, setInput] = useState("");
const [output, setOutput] = useState("");

function ColorCoded(input : any) {
  if (input.indexOf("good")) {
    return <div style={{ color: "green" }}>input</div>;
  } else {
    return <div style={{ color: "red" }}>input</div>;
  }
}

function takeInput(event : any, ColorCoded : any) {
  const value = input;
  if (value.indexOf("good") !== -1) {
    setOutput(ColorCoded("good"));
  } else {
    setOutput(ColorCoded("NOPE"));
  }
}

return (
  <div className="center">
    <label>This is one sweet input field, yo</label>
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={(e) => takeInput(e, ColorCoded)}>submit</button>
    </div>
    <p>{output}</p>
  </div>
);
};


export default App;
