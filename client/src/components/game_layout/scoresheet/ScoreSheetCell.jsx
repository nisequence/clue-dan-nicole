import React, { useEffect, useState, useRef } from "react";

export default function ScoreSheetCell(props) {
  const [cellState, setCellState] = useState("unclicked");

  const cellContents = useRef();

  useEffect(() => {
    console.log("cellState:", cellState);
    if (cellState === "clicked") {
      console.log(cellState);
      cellContents.current = (
        <div
          onClick={() => {
            setCellState("clicked");
          }}
        >
          clicked
        </div>
      );
    }
    if (cellState === "unclicked") {
      console.log(cellState);

      cellContents.current = (
        <div
          onClick={() => {
            setCellState("clicked");
          }}
        >
          unclicked
        </div>
      );
      console.log("cellContents:", cellContents.current);
    }
  }, [cellState, cellContents]);

  return <>{cellContents.current}</>;
}
