import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Gameboard from './components/gameboard/Gameboard'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Gameboard/>}/>

      </Routes>
    </div>
  );
}

export default App;
