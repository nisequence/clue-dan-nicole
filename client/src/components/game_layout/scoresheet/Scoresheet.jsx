import React, { useEffect, useRef, useState } from "react";

export default function Scoresheet() {
  const [cellStatus, setCellStatus] = useState("unclicked");
  const suspectsArray = [];
  const weaponsArray = [];
  const roomsArray = [];
  let divOutput = useRef();

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

  let scoresheetContents = [
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
    <div key={"rcol4"}>{addBoxes(9, "rooms", 27)}</div>,
  ];
  let scoresheetKey = 0;

  function getSuspectsWeaponsAndRooms(catIndex, arrayName) {
    const group = Object.keys(scoresheetItems)[catIndex];
    for (let i = 0; i < scoresheetItems[group].length; i++) {
      let itemkey = scoresheetKey + scoresheetItems[group][i];
      arrayName.push(<div key={itemkey}> {scoresheetItems[group][i]}</div>);
    }
    scoresheetKey++;
  }

  useEffect(() => {
    getSuspectsWeaponsAndRooms(0, suspectsArray);
    getSuspectsWeaponsAndRooms(1, weaponsArray);
    getSuspectsWeaponsAndRooms(2, roomsArray);
  }, [suspectsArray, weaponsArray, roomsArray]);

  useEffect(() => {
    if (cellStatus === "unclicked") {
      console.log("cellStatus:", cellStatus);
      // setCellStatus("clicked")
      divOutput.current = (
        <div
          // key={listKey + i + className}
          className="scoresheetCell"
          onClick={() => {
            // {
              console.log("here1");
            // }
          }}
        ></div>
      );
    }
    if (cellStatus === "clicked") {
      console.log("cellStatus:", cellStatus);
      // setCellStatus("clicked")

      divOutput.current = (
        <div
          // key={listKey + i + className}
          className="scoresheetCell"
          onClick={() => {
            console.log("here2");
          }}
        ></div>
      );
    }
  }, [cellStatus]);

  function addBoxes(arrayLength, className, listKey) {
    let output = [];

    for (let i = 0; i < arrayLength; i++) {
      output.push(
        <div
          key={listKey + i + className}
          className="scoresheetCell"
          onClick={() => {
            if (cellStatus === "clicked") {
              setCellStatus("unclicked");
              // console.log(cellStatus)
            } else if (cellStatus === "unclicked") {
              setCellStatus("clicked");
            }
            // console.log(cellStatus)
          }}
        >
          {divOutput.current}
        </div>
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

  useEffect(() => {
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
    console.log("scoresheetContents:", scoresheetContents);
  }, []);

  return (
    <div id="scoresheetContainer">
      <div key={"scoresheet1"}>Scoresheet</div>
      <div key={"scoresheetContents"} id="scoresheet">
        {scoresheetContents}
      </div>
    </div>
  );
}
