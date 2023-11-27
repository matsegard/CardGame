import { useEffect, useState } from "react";
import Icards from "../Icard";
import Iplayer from "../Iplayer";
import "./Player.css";
import { Console, log } from "console";
import Icard from "../Icard";
import Card from "../DeckOfCards/Card";

interface PlayerProps {
  player: Iplayer;
  deckOfCards: Icards[];
  setNewPlayerHand: React.Dispatch<React.SetStateAction<Icards[]>>;
  setDeckOfCards: React.Dispatch<React.SetStateAction<Icards[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
  newPlayerHand: Icards[];
  players: Iplayer[];
}

function Player({
  setPlayers,
  players,
  newPlayerHand,
  player,
  deckOfCards,
  setDeckOfCards,
  setNewPlayerHand,
}: PlayerProps) {
  // const oneCard = deckOfCards.slice(-1);
  // const updatedDeck = deckOfCards.slice(0, -3);

  function takeCard() {
    if (player.playerId === "PlayerOne" && (player.cardHand?.length ?? 0) < 4) {
      const updatedDeck = [...deckOfCards];
      const drawnCard = updatedDeck.pop();
      if (drawnCard) {
        const updatedPlayer = {
          ...player,
          cardHand: [...(player.cardHand ?? []), drawnCard],
        };
      }
    }
  }

  // console.log(player);
  // console.log(deckOfCards);

  // function switchPlayer() {

  //   if (playersTurn === 0)
  //     playersTurn = 1;
  //   else
  //     playersTurn = 0;
  //   // skapa en swithch för flera spelare
  // }

  return (
    <div>
      <div className="player">
        <button onClick={takeCard}>Take Card</button>
        <p>Player ID: {player.playerId}</p>

        <div className="playerhand">
          {player.cardHand?.map((card, cardId) => (
            <Card cardPattern={card.cardPattern} cardValue={card.cardValue} />
          ))}
        </div>
      </div>
      {/* <button onClick={switchPlayer}>Next player</button> */}
      {/* <p>Current Player Turn: {playersTurn}</p> */}
    </div>
  );
}

export default Player;
