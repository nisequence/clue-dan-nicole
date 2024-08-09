// Resources:
// https://dev.to/francodalessio/understanding-react-elements-and-jsx-4dc3 -- old
// https://react.dev/reference/react-dom/client/createRoot

import React from "react";
// import ReactDOM from "react-dom"
// import {createRoot} from 'react-dom/client'

export default function Gameboard() {
  const gameBoard = () => {
    let output = "<>";
    for (let horiz = 0; horiz < 24; horiz++) {
      for (let vert = 0; vert < 25; vert++) {
        const square = `<div
          style = "height: 1.5em", "width: 1.5em",
          id = "game-tile-${vert}_${horiz}",
          className = "gameSquares">${vert}_${horiz}</div>`
          output += square;
      }
    }
    output += "</>"
    return output
  };
  return (
    <>
  {/* // <div id="gameboard"> */}
    {gameBoard()}
    
  {/* {Gameboard} */}
  {/* // </div> */}
  </>
  )
}


// 
// header.js
// import React from 'react';
// import Heading from './heading';

// const Header = React.createClass({
//   render() {
//     return (
//       <header className="header">
//         <Heading></Heading>
//       </header>
//     );
//   }
// });

// export default Header;

// // heading.js
// import React from 'react';

// const Heading = React.createClass({
//   render() {
//     return <h1 className="heading">Hello, world!</h1>;
//   }
// });

// export default Heading;