// https://www.dhiwise.com/post/the-ultimate-guide-to-react-event-listener
// https://www.geeksforgeeks.org/changing-css-styling-with-react-onclick-event/
import React, { useEffect, useState } from "react";

export default function GameSquare(props) {
  const [style, setStyle] = useState("squarefalse");

  // console.log("props:",props)
const specialCoordinates = props.specialCoordinates;

useEffect(() => {
  for (let i = 0; i < specialCoordinates.length; i ++) {
  for (let j = 0; j < specialCoordinates[i].length; j++) {
    if (specialCoordinates[i][j] === props.rowCol) {

      // console.log("match!", props.rowCol, specialCoordinates[i][j])
      setStyle("squareBrown")
    }
  }
  // console.log(specialCoordinates[i])
}

}, [specialCoordinates, props.rowCol])

// console.log(props)
// console.log("coord:",coord)
  // console.log("props.roomsArray", props.roomsArray)

  const handleMouseOver = () => {
    setStyle("squaretrue");
  };

  const handleMouseleave = () => {
    if (style === "squareblank") {
      return;
    }
    setStyle("squarefalse");
  };
  const handleClick = () => {
    console.log(props.rowCol);
    setStyle("squareblank");
  };
  return (
    <div
      id={props.squarekey}
      className={style}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseleave}
      onClick={handleClick}
    ></div>
  );
}
