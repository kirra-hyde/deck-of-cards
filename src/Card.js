import React, { useEffect, useState } from "react";
import axios from "axios";

function Card({ deckId }) {
  console.log("Draw a Card!!!!!!")
  const [card, SetCard] = useState({});

  useEffect(function fetchACardByDeckId() {
    async function fetchACard(deckId) {
      const results =
        await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw`);
      SetCard(results.data.cards[0]);
      console.log("card is", card);
    }
    fetchACard();
  });

  return (
    <div className="Card">
      <img src={card.image} />


    </div>
  );


}

export default Card;