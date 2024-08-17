// replace this with something newer
// https://legacy.reactjs.org/docs/forms.html

import React, { useEffect, useState, useRef } from "react";

export default function ScoreSheetCell(props) {
  const [cellState, setCellState] = useState("unchecked");
  const [cellText, setCellText] = useState("unchecked")
  const cellContents = useRef();

  function switchCellText () {
    if (cellState === "unchecked") {
      setCellState("checked")
      setCellText(<div>checked</div>)
    }
    else if (cellState === "checked") {
      setCellState("input")
      setCellText(<form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>)
    } else if (cellState === "input") {
      setCellState("unchecked")
      setCellText(<div>unchecked</div>) 
    }

  }

  function handleSubmit() {
    console.log("text submitted")
  }

  function handleChange () {
    console.log("handling change")
  }

  // useEffect(() => {
  //   console.log("cellState:", cellState);
  //   if (cellState === "clicked") {
  //     console.log(cellState);
  //     cellContents.current = (
  //       <div
  //         onClick={() => {
  //           setCellState("clicked");
  //           // props.setscoresheetContents(props.scoresheetContents)
  //         }}
  //       >
  //         clicked
  //       </div>
  //     );
  //   } 
  //   if (cellState === "unclicked") {
  //     console.log(cellState);

  //     cellContents.current = (
  //       <div
  //         onClick={() => {
  //           setCellState("clicked");
  //           props.setscoresheetContents(props.scoresheetContents)
  //         }}
  //       >
  //         unclicked
  //       </div>
  //     );
  //     console.log("cellContents:", cellContents.current);
  //   }
  // }, [cellState]);

  return <>
  <div onClick={switchCellText} onSubmit={switchCellText}>{cellText}</div>
  </>;
}
