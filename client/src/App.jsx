import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GameLayout from "./components/game_layout/GameLayout";
import Home from "./components/home/Home";

// gameLayout

function App() {
  const [playerName, setPlayerName] = useState("Sample Name");

  // const updateName = (newName) => {
  //   localStorage.playerName = newName;
  // };

  useEffect(() => {
    localStorage.playerName = playerName;
  }, [playerName])

  const [opponents, setOpponents] = useState(["Sample Enemy"]);

  useEffect(() => {
    localStorage.opponents = opponents;
  }, [opponents])

  // const updateOpponents = (newOpponents) => {
  //   localStorage.setItem("Opponents", newOpponents);
  //   setOpponents(newOpponents);
  // };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home setPlayerName={setPlayerName} setOpponents={setOpponents} />
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
