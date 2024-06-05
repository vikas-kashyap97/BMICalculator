import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(40);

  function onweightChange(event) {
    setWeight(event.target.value);
  }
  function onheightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight =height/100;

    return(weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[height,weight])

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onweightChange}
        />
        <p className="slider-output">Height:{height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="100"
          max="230"
          onChange={onheightChange}
        />
      </div>
      <div className="output-section">
        <p className="slider-output"> BMI </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
