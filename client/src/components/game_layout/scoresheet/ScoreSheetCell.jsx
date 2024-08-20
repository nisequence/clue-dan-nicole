// replace this with something newer
// https://legacy.reactjs.org/docs/forms.html

import React, { useRef, useState } from "react";
import ScoresheetInputForm from "./ScoresheetInputForm";
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
      setCellState("input");
      switchCellText("input");
    }
    if (cellState === "manualText") {
      setCellState("unchecked")
      switchCellText("unchecked");
    }
  };

  const switchCellText = (cellState) => {
    if (cellState === "checked") {
      setCellText(<div className="scoresheetCell"><div onClick={switchCellText}>checked</div></div>);
    }
    if (cellState === "unchecked") {
      setCellText(<div className="scoresheetCell"><div style={{visibility: "hidden"}} onClick={switchCellText}>unchecked</div></div>)
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