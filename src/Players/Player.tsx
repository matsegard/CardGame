import { useEffect, useState } from "react";
import Icards from "../Icards";
import Iplayer from "../Iplayer";
import "./Player.css";

interface PlayerProps {
  player: Iplayer;
  deckOfCards: Icards[];
  setDeckOfCards: React.Dispatch<React.SetStateAction<Icards[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}

function Player({
  setPlayers,
  player,
  deckOfCards,
  setDeckOfCards,
}: PlayerProps) {
  //   const [playerHand, setPlayerHand] = useState<Iplayer[]>([]);

  let newPlayerHand: Icards[] = [];

  function takeCard() {
    const takenCards = deckOfCards.slice(-3);
    const updatedDeck = deckOfCards.slice(0, -3);

    takenCards.forEach((playerCard) => {
      let value = playerCard.value;
      let pattern = playerCard.pattern;
      let id = playerCard.id;
      newPlayerHand.push({ id, pattern, value });
    });

    console.log(player);

    setDeckOfCards(updatedDeck);

    console.log(newPlayerHand);
  }

  return (
    <div className="player">
      <button onClick={takeCard}></button>
      <p>{player.name}</p>
    </div>
  );
}

export default Player;
