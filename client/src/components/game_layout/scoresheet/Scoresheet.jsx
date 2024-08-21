import React, { useEffect, useRef, useState } from "react";
import ScoreSheetCell from "./ScoreSheetCell";

export default function Scoresheet() {
  const scoresheetItems = useRef({
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
  });

  let scoresheetKey = 0;

  const players = useRef();
  players.current = ["Alice", "Bob", "Cynthia", "Doreen"];
  
  const [scoresheetContents, setScoresheetContents] = useState();

  useEffect(() => {
    const suspectsArray = [<div key={"sus00"}></div>];
    const weaponsArray = [];
    const roomsArray = [];
    function getSuspectsWeaponsAndRooms(catIndex, arrayName) {
      const group = Object.keys(scoresheetItems.current)[catIndex];

      for (let i = 0; i < scoresheetItems.current[group].length; i++) {
        let itemkey = scoresheetKey + scoresheetItems.current[group][i];
        arrayName.push(
          <div key={itemkey}> {scoresheetItems.current[group][i]}</div>
        );
      }
      scoresheetKey++;
    }

    const addContainers = (type, noOfRows, description) => {
      let output = [];
      let suscolIndex = 1;
      let index = 0;
      let playerNameIndex = 0;
      for (let i = 0; i < players.current.length; i++) {
        let key = type + suscolIndex;
        output.push(
          <div className="checkboxContainer" key={key}>{addBoxes(noOfRows, description, index,playerNameIndex)}</div>
        );
        suscolIndex++;
        index += 6;
        playerNameIndex++
      }
      // console.log(output);
      return output;
    };

    setScoresheetContents([
      <div id="suspects" key={"susGroup"}>
        {suspectsArray}
      </div>,

      getSuspectsWeaponsAndRooms(0, suspectsArray),
      addContainers("suscol", 6, "suspects"),

      <div id="weapons" key={"weapGroup"}>
        {weaponsArray}
      </div>,
      getSuspectsWeaponsAndRooms(1, weaponsArray),
      addContainers("wcol", 6, "weapons"),

      <div id="rooms" key={"roomsGroup"}>
        {roomsArray}
      </div>,
      getSuspectsWeaponsAndRooms(2, roomsArray),
      addContainers("rcol", 9, "rooms"),
    ]);
  }, [scoresheetKey]);



  function addBoxes(arrayLength, className, listKey, playerNameIndex) {
    let output = []
    if (className === "suspects") {
      output.push([<div className="scoresheetPlayerNames" key={"addbox00"}>{players.current[playerNameIndex]}</div>]);
    }

    for (let i = 0; i < arrayLength; i++) {
      output.push(
        <ScoreSheetCell
          key={listKey + i + className}
          className={"scoresheetCell"}
        />
      );
      listKey++;
    }

    return output;
  }

  return (
    <div id="scoresheetContainer">
      <div key={"scoresheet1"}>Scoresheet</div>
      <div
        key={"scoresheetContents"}
        id="scoresheet"
        style={{
          gridTemplateColumns: `repeat(${players.current.length + 1}, 1fr)`,
          gridTemplateRows: "repeat(3, 1fr)",
        }}
      >
        {scoresheetContents}
      </div>
    </div>
  );
}
