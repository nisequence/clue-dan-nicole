//<a href="https://www.freepik.com/free-photo/magnifying-glass-with-envelope-with-fingerprints-wooden-background_282522157.htm#query=clue%20game&position=5&from_view=keyword&track=ais_hybrid&uuid=9d036ed5-432c-40a8-964c-44f15a694fa7">Image by atlascompany</a> on Freepik

import React, { useState } from "react";
import MultipleHeldCards from "./multiple_held_cards/MultipleHeldCards";
import RevealedCard from "./revealed_card/RevealedCard";

export default function BottomRow() {
  const [revealedCard, setRevealedCard] = useState()

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
