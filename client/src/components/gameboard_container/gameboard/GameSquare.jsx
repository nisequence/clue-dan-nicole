// https://www.dhiwise.com/post/the-ultimate-guide-to-react-event-listener
// https://www.geeksforgeeks.org/changing-css-styling-with-react-onclick-event/
import React, { useState } from "react";

export default function GameSquare(props) {

  // console.log("props.roomsArray", props.roomsArray)

  const [style, setStyle] = useState("squarefalse");
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
      // onMouseOver={handleMouseOver}
      // onMouseLeave={handleMouseleave}
      onClick={handleClick}
    ></div>
  );
}
