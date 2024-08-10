import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import GameboardContainer from './components/gameboard_container/GameboardContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GameboardContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
