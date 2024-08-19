import { useRef } from "react";
import { Input } from "reactstrap";

// import ReactDOM from 'react-dom/client';

export default function ScoresheetInputForm(props) {
  const formTextRef = useRef();

  //todo: auto capture the cursor when the field appears
  //todo: change the click  to switch when blank, rather than just return (line #13)
  const handleSubmit = () => {
    if (formTextRef.current.value.length === 0) {
      return;
    }
    props.setCellText(
      <div className="scoresheetCell" onClick={props.switchCellText}>{formTextRef.current.value}</div>
    );
    props.setCellState("manualText")
    props.switchCellText();
    console.log("other side");
  };
  return (
    <div className="inputCells">
        <Input
          placeholder=""
          innerRef={formTextRef}
          type="text"
          autoComplete="on"
          onClick={(e) => {
            handleSubmit();
          }}
        />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
