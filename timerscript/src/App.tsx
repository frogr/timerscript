import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './timer';

function App() {
  return (
    <div>
      <Timer seconds={60} />
      <Timer seconds={120} />
      <Timer seconds={240} />
      <Timer seconds={960} />
      <Timer seconds={1920} />
    </div>
  );
}

export default App;
