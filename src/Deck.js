import React, { useEffect } from "react";

function Deck() {

  const [deckId, setDeckId] = useState("");

  useEffect(function createDeck() {
    async function fetchDeck() {
      const results =
          await axios.get("https://deckofcardsapi.com/api/deck/new/");
      setDeckId(results.data.deck_id);
    }
    fetchDeck();
  }, []);
}

export default Deck;