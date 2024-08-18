// replace this with something newer
// https://legacy.reactjs.org/docs/forms.html

import React, { useRef, useState } from "react";

export default function ScoreSheetCell(props) {
  const [cellState, setCellState] = useState("unchecked");
  const [cellText, setCellText] = useState(<div>start</div>);

  const cellContent = useRef();

  const checkCellText = () => {
      if (cellState === "unchecked") {
          setCellState("checked")
          switchCellText()

          console.log(cellState)
        } else if (cellState === "checked") {
            setCellState("input")
            console.log(cellState)
            switchCellText()
        } else if (cellState === "input") {
            handleSubmit()
            // setCellState("unchecked")
            console.log(cellState)
        }
    // }
    
    // else if (cellState.current === "input") {
    //     switchCellText()
    // } else if (cellState.current === "checked"){
    //     switchCellText()
    // } else if (cellState.current === "unchecked") {
    //     switchCellText()
    // }
  }

  const switchCellText = () => {
    // console.log(cellContent.current);
    if (cellState === "unchecked") {
      setCellState("checked");
      cellContent.current = <div onClick={switchCellText}>checked</div>;
      setCellText(cellContent.current);
    } else if (cellState === "checked") {
      setCellState("input");
      cellContent.current = (
        <form onSubmit={handleSubmit}>
          <input type="text" onClick={null} onSubmit={handleSubmit} />
        </form>
      );
      setCellText(cellContent.current);
    } else if (cellState === "input") {
      setCellState("unchecked");
      cellContent.current = <div onClick={switchCellText}>unchecked</div>;
      setCellText(cellContent.current);
    }
  };

  function handleSubmit() {
    // e.preventDefault()
    console.log("text submitted");
    // switchCellText();
  }

  return (
    // <>
    //   <div onClick={switchCellText}>{cellText}</div>
    // </>
    <div onClick={checkCellText}>{cellText}</div>
  );
}
