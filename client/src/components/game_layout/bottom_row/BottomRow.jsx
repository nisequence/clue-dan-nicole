import React, { useState } from "react";
import MultipleHeldCards from "./multiple_held_cards/MultipleHeldCards";
import RevealedCard from "./revealed_card/RevealedCard";

export default function BottomRow() {
  const [revealedCard, setRevealedCard] = useState(<div>Empty</div>)

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
        <MultipleHeldCards
        setRevealedCard = {setRevealedCard}
        />
        <RevealedCard
          revealedCard = {revealedCard}
        />
      </div>
    </>
  );
}
