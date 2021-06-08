import './App.css';
import { useState } from 'react';

import Color from './Color';

function App() {
  let [writingColor, setWritingColor] = useState('#');
  let [chosenColor, setChosenColor] = useState('#f12323'); //default

  const changes = (color) => [
    //Strength es la fuerza con la que col2 pinta a col1
    { col1: color, col2: '#ffffff', strength: 1 },
    { col1: color, col2: '#ffffff', strength: 0.9 },
    { col1: color, col2: '#ffffff', strength: 0.8 },
    { col1: color, col2: '#ffffff', strength: 0.7 },
    { col1: color, col2: '#ffffff', strength: 0.6 },
    { col1: color, col2: '#ffffff', strength: 0.5 },
    { col1: color, col2: '#ffffff', strength: 0.4 },
    { col1: color, col2: '#ffffff', strength: 0.3 },
    { col1: color, col2: '#ffffff', strength: 0.2 },
    { col1: color, col2: '#ffffff', strength: 0.1 },
    { col1: color, col2: '#ffffff', strength: 0 },
    { col1: color, col2: '#000000', strength: 0.1 },
    { col1: color, col2: '#000000', strength: 0.2 },
    { col1: color, col2: '#000000', strength: 0.3 },
    { col1: color, col2: '#000000', strength: 0.4 },
    { col1: color, col2: '#000000', strength: 0.5 },
    { col1: color, col2: '#000000', strength: 0.6 },
    { col1: color, col2: '#000000', strength: 0.7 },
    { col1: color, col2: '#000000', strength: 0.8 },
    { col1: color, col2: '#000000', strength: 0.9 },
    { col1: color, col2: '#000000', strength: 1 },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setWritingColor(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (writingColor) {
      //Habria que validar que sea un color
      setChosenColor(writingColor);
      setTimeout(() => console.log(chosenColor), 500);
      setWritingColor('#');
    }
  };

  return (
    <div className="App">
      <header className="inline">
        <h1>Color Generator</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              className="btn clrinput"
              type="text"
              id="color"
              name="color"
              value={writingColor}
              onChange={handleChange}
            />
            <input className="btn submit" type="submit" />
          </div>
        </form>
      </header>
      <div className="palette">
        {changes(chosenColor).map((color) => (
          <Color {...color} />
        ))}
      </div>
      {}
    </div>
  );
}

export default App;
