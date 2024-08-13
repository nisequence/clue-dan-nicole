import React from "react";
import HeldCards from "./held_cards/HeldCards";
import Test from "./held_cards/Test";

export default function BottomRow() {
  return (
    <>
      <div id="bottomRow">
        BottomRow
        <HeldCards />
        <Test />
      </div>
    </>
  );
}
