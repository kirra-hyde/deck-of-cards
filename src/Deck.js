import React, { useEffect, useState } from "react";
import axios from "axios";

function Deck() {

  const [deckId, setDeckId] = useState("");
  const [card, SetCard] = useState({});

  useEffect(function createDeck() {
    async function fetchDeck() {
      const results =
        await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
      setDeckId(results.data.deck_id);
      console.log("fetch a deck", results.data);
    }
    fetchDeck();
  }, []);

  if (!deckId) {
    return (
      <h1>Loading...</h1>
    );
  }

  function handleFetchACard() {
    async function fetchACard() {
      const results =
        await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw`);
      SetCard(results.data.cards[0]);
      console.log("card is", results.data);
    }
    try{
      fetchACard();
    }
    catch(error){
      return "Error: no cards remaining!"
    }
  }



  return (
    <div className="Deck">
      <button onClick={handleFetchACard}>Draw A Card!</button>
      <img src={card.image} />
    </div>
  );
}

export default Deck;