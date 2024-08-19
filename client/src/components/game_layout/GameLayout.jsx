import React from "react";
import GameplayGrid from "./gameplayGrid/GameplayGrid";
import Scoresheet from "./scoresheet/Scoresheet";
import BottomRow from "./bottom_row/BottomRow";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GameLayout() {
  return (
    <>
      <div id="gameLayout">
        <GameplayGrid />
        <Scoresheet />
      </div>
      <BottomRow />
    </>
  );
}
