import { useEffect, useState } from "react";
import Icards from "../Icards";
import Iplayer from "../Iplayer";
import "./Player.css";

interface PlayerProps {
  player: Iplayer;
  deckOfCards: Icards[];
  setDeckOfCards: React.Dispatch<React.SetStateAction<Icards[]>>;
}

function Player({ player, deckOfCards, setDeckOfCards }: PlayerProps) {
  function takeCard() {
    const takenCards = deckOfCards.slice(-3);
    const updatedDeck = deckOfCards.slice(0, -3);
    setDeckOfCards(updatedDeck);
    console.log(deckOfCards);
  }
  return (
    <div className="player">
      <button onClick={takeCard}></button>
      <p>{player.name}</p>
    </div>
  );
}

export default Player;
