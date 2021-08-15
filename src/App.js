import React, { useState } from "react";

import "./App.scss";
import Shades from "./components/Shades";
import Values from "values.js";
function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [colors, setColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const shades = new Values(value).all(10);
      setColors(shades);
      console.log(shades);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="#ffffff" />
          <button type="submit">Enter</button>
        </form>

        <div className="Shades">
          {colors.map((arr, index) => {
            return <Shades key={index} {...arr}></Shades>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
