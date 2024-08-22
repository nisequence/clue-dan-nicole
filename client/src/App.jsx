//https://ably.com/blog/websockets-react-tutorial

import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GameLayout from "./components/game_layout/GameLayout";
import Home from "./components/home/Home";

// gameLayout
const PORT = 4300;

function App() {
  const [playerName, setPlayerName] = useState("Sample Name");

  // const updateName = (newName) => {
  //   localStorage.playerName = newName;
  // };
  
  useEffect(() => {
    const ws = new WebSocket(`ws://127.0.0.1:${PORT}`)
    ws.addEventListener("message", (message) => {
      const incoming = message.data
      if (incoming === "Welcome new client") {
        return;
      }
      console.log(JSON.parse(message.data).playerName)
      console.log(incoming)
      // console.log(JSON.parse(incoming).playerName)
      // if (JSON.parse(incoming.playerName)) {
        // console.log(JSON.parse(incoming).playerName)
      // }
    })
  }, [])

  useEffect(() => {
    localStorage.playerName = playerName;
    const ws = new WebSocket(`ws://127.0.0.1:${PORT}`)
    ws.addEventListener("open", () => {
      ws.send(JSON.stringify({"playerName": playerName}))

    })
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
