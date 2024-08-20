import React from "react";
import MultipleHeldCards from "./multiple_held_cards/MultipleHeldCards";

export default function BottomRow() {
  return (
    <>
      {/* <div
        id="bottomRow"
        style={{
          display: "flex",
          flexDirection: "row",
          // alignContent: "center",
          justifyContent: "center",
          // alignItems: "center",
          // alignSelf: "center",
          backgroundColor: "blue",
        }}
      >
        BottomRow */}
        <MultipleHeldCards/>
      {/* </div> */}
    </>
  );
}
