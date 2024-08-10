import React from "react";
import GameSquare from "./gameboard/GameSquare";

export default function Gameboard_Container() {
  let display = [];

  let squarekey = 0;
  for (let horiz = 0; horiz < 24; horiz++) {
    for (let vert = 0; vert < 25; vert++) {
      display.push([
        <GameSquare
          horiz={horiz}
          vert={vert}
          squarekey={squarekey}
        ></GameSquare>,
      ]);
      squarekey++;
    }
  }

  return <div id="gameboardContainer">{display}</div>;
}