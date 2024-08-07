// Resources:
// https://dev.to/francodalessio/understanding-react-elements-and-jsx-4dc3 -- old
// https://react.dev/reference/react-dom/client/createRoot

import React from "react";
import ReactDOM from "react-dom"
import {createRoot} from 'react-dom/client'

export default function Gameboard() {
  const gameBoard = () => {
    const domNode = document.getElementById('root');

    // including the start squares, the board is 24 across by 25 vertically
    for (let horiz = 0; horiz < 24; horiz++) {
      for (let vert = 0; vert < 25; vert++) {
        // let square = document.createElement("div");
        const square = createRoot("div", {
          style: { height: "1.5em", width: "1.5em" },
          id: `game-tile-${vert}_${horiz}`,
          className: "gameSquares",
        });
        // const gameBoard = React.createElement("div", null, square)
        createRoot(square, square)
        // square.style.height = "1.5em";
        // square.style.width = "1.5em";
        // square.id = `game-tile-${vert}_${horiz}`;
        // square.className = "gameSquares";
        
        // document.getElementById("gameboard-container").append(square);
      }
    }
    return gameBoard
  };
  return (
  <div id="root">
  <div>{gameBoard()}</div>;
  </div>
  )
}
