import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GameLayout from "./components/game_layout/GameLayout";

// gameLayout

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GameLayout />} />
      </Routes>
    </div>
  );
}

export default App;
