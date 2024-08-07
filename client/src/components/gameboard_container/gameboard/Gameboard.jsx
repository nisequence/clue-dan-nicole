import React from "react";

export default function Gameboard() {
  const gameBoard = () => {
    const gameBoard = React.createElement("div")
    // including the start squares, the board is 24 across by 25 vertically
    for (let horiz = 0; horiz < 24; horiz++) {
      for (let vert = 0; vert < 25; vert++) {
        // let square = document.createElement("div");
        const square = React.createElement("div", {
          style: { height: "1.5em", width: "1.5em" },
          id: `game-tile-${vert}_${horiz}`,
          className: "gameSquares",
        });
        // square.style.height = "1.5em";
        // square.style.width = "1.5em";
        // square.id = `game-tile-${vert}_${horiz}`;
        // square.className = "gameSquares";
        
        // document.getElementById("gameboard-container").append(square);
      }
    }
    return gameBoard
  };
  return <div>{gameBoard()}</div>;
}
