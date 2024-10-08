import React from "react";
import GameSquare from "./GameSquare";

export default function GameplayGrid() {

  const rooms = {
    conservatory: [
      "22_0",
      "22_1",
      "22_2",
      "22_3",
      "22_4",
      "22_5",
      "21_5",
      "20_5",
      "19_5",
      "19_4",
      "18_4",
      "18_3",
      "18_2",
      "18_1",
      "19_1",
      "19_0",
      "20_0",
      "21_0",
      "21_1",
      "21_2",
      "21_3",
      "21_4",
      "20_4",
      "20_3",
      "20_2",
      "20_1",
      "19_2",
      "19_3",
    ],
    billiard: [
      "15_5",
      "15_4",
      "15_3",
      "15_2",
      "15_1",
      "15_0",
      "14_0",
      "13_0",
      "12_0",
      "11_0",
      "11_1",
      "11_2",
      "11_3",
      "11_4",
      "11_5",
      "12_5",
      "13_5",
      "14_5",
      "14_1",
      "14_2",
      "14_3",
      "14_4",
      "13_4",
      "13_3",
      "13_2",
      "13_1",
      "12_1",
      "12_2",
      "12_3",
      "12_4",
    ],
    library: [
      "6_1",
      "6_2",
      "6_3",
      "6_4",
      "6_5",
      "7_5",
      "7_6",
      "8_6",
      "9_6",
      "9_5",
      "10_5",
      "10_4",
      "10_3",
      "10_2",
      "10_1",
      "9_1",
      "9_0",
      "8_0",
      "7_0",
      "7_1",
      "8_1",
      "9_2",
      "9_3",
      "9_4",
      "8_5",
      "8_4",
      "8_3",
      "8_2",
      "7_2",
      "7_3",
      "7_4",
    ],
    study: [
      "0_0",
      "0_1",
      "0_2",
      "0_3",
      "0_4",
      "0_5",
      "0_6",
      "1_6",
      "2_6",
      "3_6",
      "3_5",
      "3_4",
      "3_3",
      "3_2",
      "3_1",
      "3_0",
      "2_0",
      "1_0",
      "1_1",
      "1_2",
      "1_3",
      "1_4",
      "1_5",
      "2_5",
      "2_4",
      "2_3",
      "2_2",
      "2_1",
    ],
    hall: [
      "1_9",
      "2_9",
      "3_9",
      "4_9",
      "5_9",
      "6_9",
      "6_10",
      "6_11",
      "6_12",
      "6_13",
      "6_14",
      "5_14",
      "4_14",
      "3_14",
      "2_14",
      "1_14",
      "1_13",
      "1_12",
      "1_11",
      "1_10",
      "2_10",
      "2_11",
      "2_12",
      "2_13",
      "3_13",
      "3_12",
      "3_11",
      "3_10",
      "4_10",
      "4_11",
      "4_12",
      "4_13",
      "5_13",
      "5_12",
      "5_11",
      "5_10",
    ],
    lounge: [
      "1_18",
      "1_19",
      "0_19",
      "0_20",
      "0_21",
      "0_22",
      "0_23",
      "0_24",
      "1_24",
      "2_24",
      "3_24",
      "4_24",
      "5_24",
      "2_18",
      "3_18",
      "4_18",
      "5_18",
      "5_19",
      "5_20",
      "5_21",
      "5_22",
      "5_23",
      "4_23",
      "3_23",
      "2_23",
      "1_23",
      "1_22",
      "1_21",
      "1_20",
      "2_19",
      "2_20",
      "2_21",
      "2_22",
      "3_22",
      "3_21",
      "3_20",
      "3_19",
      "4_19",
      "4_20",
      "4_21",
      "4_22",
    ],
    diningroom: [
      "9_24",
      "9_17",
      "14_17",
      "14_18",
      "14_19",
      "14_20",
      "15_20",
      "15_21",
      "15_22",
      "15_23",
      "14_23",
      "14_24",
      "13_24",
      "12_24",
      "11_24",
      "10_24",
      "10_17",
      "11_17",
      "12_17",
      "13_17",
      "14_21",
      "14_22",
      "13_18",
      "13_19",
      "13_20",
      "13_21",
      "13_22",
      "13_23",
      "12_18",
      "12_19",
      "12_20",
      "12_21",
      "12_22",
      "12_23",
      "11_18",
      "11_19",
      "11_20",
      "11_21",
      "11_22",
      "11_23",
      "10_18",
      "10_19",
      "10_20",
      "10_21",
      "10_22",
      "10_23",
      "9_18",
      "9_19",
      "9_20",
      "9_21",
      "9_22",
      "9_23",
    ],
    kitchen: [
      "22_24",
      "21_24",
      "20_24",
      "19_24",
      "18_24",
      "18_23",
      "17_23",
      "17_22",
      "17_21",
      "17_20",
      "17_19",
      "18_19",
      "19_19",
      "20_19",
      "21_19",
      "22_19",
      "22_20",
      "22_21",
      "22_22",
      "22_23",
      "21_23",
      "21_22",
      "21_21",
      "21_20",
      "20_20",
      "20_21",
      "20_22",
      "20_23",
      "19_23",
      "19_22",
      "19_21",
      "19_20",
      "18_20",
      "18_21",
      "18_22",
    ],
    nodules: ["0_16", "0_7", "17_0", "17_24", "23_14", "23_9", "5_0", "7_24"],
    outOfBounds: []
  };

  const roomsArray = Object.keys(rooms)
  let specialCoordinates = []

  for (let i = 0; i < roomsArray.length; i++) {
   let roomContent = rooms[roomsArray[i]]
  //  console.log("room:",roomsArray[i])

  //  console.log("roomContent:",roomContent)
   specialCoordinates.push(roomContent)
    for (let i = 0; i < roomContent.length; i++) {
      // console.log("room squares:",roomContent[i])
    }
  }

  // console.log("roomsArray:",roomsArray)

  let display = [];

  let squarekey = 0;
  for (let horiz = 0; horiz < 24; horiz++) {
    for (let vert = 0; vert < 25; vert++) {
      display.push([
        <GameSquare
          rowCol = {`${horiz.toString()}_${vert.toString()}`}
          key={squarekey}
          horiz={horiz}
          vert={vert}
          roomsArray={roomsArray}
          specialCoordinates = {specialCoordinates}
        ></GameSquare>,
      ]);
      squarekey++;
    }
  }

  return (
    <div id="gridContainer">
    <div id="gameplayGrid">{display}</div>
    </div>
  )
  
}
