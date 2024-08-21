import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GameLayout from "./components/game_layout/GameLayout";
import Home from "./components/home/Home";

// gameLayout

function App() {
  const [playerName, setPlayerName] = useState("Sample Name");
  const updateName = (newName) => {
    localStorage.setItem("playerName", newName);
    console.log(newName);
    // ^ .setItem(key, value)
    setPlayerName(newName);
  };

  const [opponents, setOpponents] = useState(["Sample Enemy"]);
  const updateOpponents = (newOpponents) => {
    localStorage.setItem("Opponents", newOpponents);
    console.log(newOpponents);
    // ^ .setItem(key, value)
    setOpponents(newOpponents);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home updateName={updateName} updateOpponents={updateOpponents} />
          }
        />
        <Route
          path="/play"
          element={<GameLayout playerName={playerName} opponents={opponents} />}
        />
      </Routes>
    </div>
  );
}

export default App;
