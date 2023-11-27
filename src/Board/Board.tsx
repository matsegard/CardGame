import { SetStateAction, useEffect, useState } from "react";
import "./Board.css";
import { title } from "process";
import DeckOfCards from "../DeckOfCards/DeckOfCards";
import Icards from "../Icard";
import Player from "../Players/Player";
import Iplayer from "../Iplayer";

export function Board() {
  const [deckOfCards, setDeckOfCards] = useState<Icards[]>([]);
  const [players, setPlayers] = useState<Iplayer[]>([]);
  const [newPlayerHand, setNewPlayerHand] = useState<Icards[]>([]);

  // const takenCards = deckOfCards.slice(-3);
  // const updatedDeck = deckOfCards.slice(0, -3);

  const playerId = ["PlayerOne", "PlayerTwo"];

  // CARDS

  function startGame() {
    const cardPattern = ["spades", "hearts", "clubs", "diamonds"];
    const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const newDeck: Icards[] = [];
    let cardId = 0;

    cardPattern.forEach((cardPattern) => {
      cardValue.forEach((cardValue) => {
        newDeck.push({ cardId, cardPattern, cardValue });
        newDeck.forEach((card) => {
          cardId++;
        });
      });
    });

    const shuffledDeck = [...newDeck];

    for (let i = 0; i < shuffledDeck.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    setDeckOfCards(shuffledDeck);

    // PLAYER

    let cardHand: Icards[] = [];
    const newPlayer: Iplayer[] = [];

    playerId.forEach((playerId) => {
      newPlayer.push({ playerId, cardHand });
    });

    setPlayers(newPlayer);
  }

  const updatedPlayers = players.map((player) => {
    player.cardHand = deckOfCards.splice(0, 3);
    return {
      playerId: player.playerId,
      cardHand: player.cardHand,
    };
  });

  return (
    <div className="Board">
      <button className="startButton" onClick={startGame}>
        Start Game
      </button>
      {deckOfCards.length > 0 && <DeckOfCards deckOfCards={deckOfCards} />}
      <div className="playerpocket">
        {players.map((player, playerId) => (
          <Player
            key={playerId}
            player={player}
            deckOfCards={deckOfCards}
            setDeckOfCards={setDeckOfCards}
            setPlayers={setPlayers}
            setNewPlayerHand={setNewPlayerHand}
            newPlayerHand={newPlayerHand}
            players={players}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
