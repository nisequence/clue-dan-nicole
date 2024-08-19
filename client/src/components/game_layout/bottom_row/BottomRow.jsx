import React from "react";
import HeldCards from "./held_cards/HeldCards";

export default function BottomRow() {
  return (
    <>
      <div
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
        BottomRow
        <HeldCards />
      </div>
    </>
  );
}
