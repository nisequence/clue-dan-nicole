// replace this with something newer
// https://legacy.reactjs.org/docs/forms.html

import React, { useRef, useState } from "react";
import ScoresheetInputForm from "./ScoresheetInputForm";
import checkMark from "../../../media/green-checkmark-line-icon.webp"
import redX from "../../../media/red-x-line-icon.webp"

export default function ScoreSheetCell(props) {
  const cellContent = useRef();

  const [cellState, setCellState] = useState("unchecked");
  const [cellText, setCellText] = useState(<div className="scoresheetCell" ><div style={{visibility: "hidden"}}>unchecked</div></div>);

  const checkCellState = () => {
    if (cellState === "unchecked") {
      setCellState("checked");
      switchCellText("checked");
    }
    if (cellState === "checked") {
      setCellState("redX")
      switchCellText("redX")
      // setCellState("input");
      // switchCellText("input");
    }
    // if (cellState === "manualText") {
    if (cellState === "redX") {
      setCellState("unchecked")
      switchCellText("unchecked");
    }
  };

  const switchCellText = (cellState) => {
    if (cellState === "checked") {
      setCellText(<div className="scoresheetCell"><div onClick={switchCellText}><img className="checkMark" src={checkMark} alt="check mark" /></div></div>);
    }
    if (cellState === "unchecked") {
      setCellText(<div className="scoresheetCell"><div style={{visibility: "hidden"}} onClick={switchCellText}>unchecked</div></div>)
    }
    if (cellState === "redX") {
      setCellText(<div className="scoresheetCell"><div onClick={switchCellText}><img className="redX" src={redX} alt="red X" /></div></div>)
    }
    if (cellState === "input") {
      setCellText(<ScoresheetInputForm 
        setCellText={setCellText}
        switchCellText = {switchCellText}
        setCellState= {setCellState}
        />);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        checkCellState();
      }}
    >
      {cellText}
    </div>
  );
}