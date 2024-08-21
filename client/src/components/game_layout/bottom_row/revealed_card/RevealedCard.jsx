import React from "react";

function RevealedCard(props) {
  return (
    <div id="revealedCardSection">
      <img id="revealedCard" src={props.revealedCard} alt="revealed card" />
      <button id="revealedCardSubmitBtn">Submit</button>
    </div>
  );
}

export default RevealedCard;
