import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Gameboard_Container from './components/gameboard_container/Gameboard_container';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Gameboard_Container/>}/>

      </Routes>
    </div>
  );
}

export default App;
