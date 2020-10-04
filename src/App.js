import React from 'react';
import './App.css';
import Pokegame from './Pokegame'

function App() {
  return (
    <div className="App">
      <button onClick={() => window.location.reload(false)}>Play</button>
      <Pokegame/>
    </div>
  );
}

export default App;
