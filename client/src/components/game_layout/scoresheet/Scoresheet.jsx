import React, { useState } from "react";

export default function Scoresheet() {
  const [boxState, setBoxState] = useState("unchecked");
  const scoresheetItems = {
    suspects: [
      "Colonel Mustard",
      "Professor Plum",
      "Mr. Green",
      "Mrs. Peacock",
      "Miss Scarlet",
      "Mrs. White",
    ],

    weapons: [
      "Knife",
      "Candlestick",
      "Revolver",
      "Rope",
      "Lead Pipe",
      "Wrench",
      // ,"Other"
    ],

    rooms: [
      "Hall",
      "Lounge",
      "Dining Room",
      "Kitchen",
      "Ball Room",
      "Conservatory",
      "Billard Room",
      "Library",
      "Study",
      // ,"Other"
    ],
  };
  let scoresheetContents = [];
  let scoresheetKey = 0;

  const suspectsArray = [];
  const weaponsArray = [];
  const roomsArray = [];

  function getNames(catIndex, arrayName) {
    const group = Object.keys(scoresheetItems)[catIndex];
    for (let i = 0; i < scoresheetItems[group].length; i++) {
      let itemkey = scoresheetKey + scoresheetItems[group][i];
      arrayName.push(<div key={itemkey}> {scoresheetItems[group][i]}</div>);
    }
    scoresheetKey++;
  }

  getNames(0, suspectsArray);
  getNames(1, weaponsArray);
  getNames(2, roomsArray);

  function handleScoresheetClick() {
    console.log("click");
  }

  const displayBox = (listKey, i, className) => {
    if (boxState === "unchecked") {
      return (
        <div
          key={listKey + i + className}
          className="scoresheetCell"
          onClick={setBoxState("checked")}
        ></div>
      );
    } else if (boxState === "checked") {
      return (
        <div
          key={listKey + i + className}
          className="scoresheetCell"
          onClick={setBoxState("unchecked")}
        ></div>
      );
    } else {
      return (
        <div
          key={listKey + i + className}
          className="scoresheetCell"
          onClick={handleScoresheetClick}
        ></div>
      );
    }
  };

  function addBoxes(arrayLength, className, listKey) {
    let output = [];

    for (let i = 0; i < arrayLength; i++) {
      output.push(
        () => {
          displayBox(listKey, i, className);
        }
        // <div
        //   key={listKey + i + className}
        //   className="scoresheetCell"
        //   onClick={handleScoresheetClick}
        // ></div>
      );
      listKey++;
    }

    return output;
  }

  scoresheetContents.push(
    <div id="suspects" key={"susGroup"}>
      {suspectsArray}
    </div>,
    <div key={"suscol1"}>{addBoxes(6, "suspects", 0)}</div>,
    <div key={"suscol2"}>{addBoxes(6, "suspects", 6)}</div>,
    <div key={"suscol3"}>{addBoxes(6, "suspects", 12)}</div>,
    <div key={"suscol4"}>{addBoxes(6, "suspects", 18)}</div>,

    <div id="weapons" key={"weapGroup"}>
      {weaponsArray}
    </div>,

    <div key={"wcol1"}>{addBoxes(6, "weapons", 0)}</div>,
    <div key={"wcol2"}>{addBoxes(6, "weapons", 6)}</div>,
    <div key={"wcol3"}>{addBoxes(6, "weapons", 12)}</div>,
    <div key={"wcol4"}>{addBoxes(6, "weapons", 18)}</div>,

    <div id="rooms" key={"roomsGroup"}>
      {roomsArray}
    </div>,
    <div key={"rcol1"}>{addBoxes(9, "rooms", 0)}</div>,
    <div key={"rcol2"}>{addBoxes(9, "rooms", 9)}</div>,
    <div key={"rcol3"}>{addBoxes(9, "rooms", 18)}</div>,
    <div key={"rcol4"}>{addBoxes(9, "rooms", 27)}</div>
  );

  return (
    <div id="scoresheetContainer">
      <div key={"scoresheet1"}>Scoresheet</div>
      <div key={"scoresheetContents"} id="scoresheet">
        {scoresheetContents}
      </div>
    </div>
  );
}
