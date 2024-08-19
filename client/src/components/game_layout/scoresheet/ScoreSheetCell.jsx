// replace this with something newer
// https://legacy.reactjs.org/docs/forms.html

import React, { useRef, useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
export default function ScoreSheetCell(props) {
  const [cellState, setCellState] = useState("unchecked");
  const [cellText, setCellText] = useState(<div>start</div>);

  const cellContent = useRef();
  const formTextRef = useRef();

  const checkCellText = () => {
    if (cellState === "unchecked") {
      setCellState("checked");
      switchCellText();

      console.log(cellState);
    } else if (cellState === "checked") {
      setCellState("input");
      console.log(cellState);
      switchCellText();
    } else if (cellState === "input") {
    //   handleSubmit();
      // setCellState("unchecked")
      console.log(cellState);
    } else if (cellState === "manualText") {
        // setCellState("manualText")
        console.log(cellState);
        switchCellText()
    }
    // }

    // else if (cellState.current === "input") {
    //     switchCellText()
    // } else if (cellState.current === "checked"){
    //     switchCellText()
    // } else if (cellState.current === "unchecked") {
    //     switchCellText()
    // }
  };

  const switchCellText = () => {
    // console.log(cellContent.current);
    if (cellState === "unchecked") {
      setCellState("checked");
      cellContent.current = <div onClick={switchCellText}>checked</div>;
      setCellText(cellContent.current);
    } else if (cellState === "checked") {
      setCellState("input");
      cellContent.current = (
        <Form>
          <FormGroup>
            <Input
              placeholder="Hello"
              innerRef={formTextRef}
              type="text"
              autoComplete="on"
              onSubmit={(e) => {
                e.preventDefault()
                alert(formTextRef)
                // handleSubmit()
              }} 
            />
          </FormGroup>
        </Form>
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
   
        alert("formText:",formTextRef.current.value)
        setCellState("manualText")
        cellContent.current = <div>{formTextRef.current.value}</div>
    
    console.log("text submitted");
    // switchCellText();
  }

//   const outputDisplay = () => {
//     // if (formText.current.value !== null) {
//     //   return formText.current.value;
//     // } else {
//       return cellText;
//     // }
//   };

  return (
    // <>
    //   <div onClick={switchCellText}>{cellText}</div>
    // </>
    <div onClick={(e) => {
        e.preventDefault()
        // alert("it's clicking time")
        checkCellText()
    }}>{cellText}</div>
  );
}
