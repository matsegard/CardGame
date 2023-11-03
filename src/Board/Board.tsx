import { SetStateAction, useEffect, useState } from "react";
import "./Board.css";
import { title } from "process";
import DeckOfCards from "../DeckOfCards/DeckOfCards";
import Icards from "../Icards";
import Player from "../Players/Player";
import Iplayer from "../Iplayer";

export function Board() {
  const [deckOfCards, setDeckOfCards] = useState<Icards[]>([]);
  const [players, setPlayers] = useState<Iplayer[]>([]);

  useEffect(() => {
    // CARDS
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
   
    const playerId = ["PlayerOne", "PlayerTwo"]
    const newPlayer: Iplayer[] = [];
    let cardHand: Icards[] = [];

    playerId.forEach((playerId) => {
      cardHand = cardHand;
      playerId = playerId;
      newPlayer.push({playerId, cardHand});
    });
    setPlayers(newPlayer);
  }, []);

  return (
    <div className="Board">
      {deckOfCards.length > 0 && <DeckOfCards deckOfCards={deckOfCards} />}
      <div className="playerpocket">
        {players.map((player, playerId) => (
          <Player
            key={playerId}
            player={player}
            deckOfCards={deckOfCards}
            setDeckOfCards={setDeckOfCards}
            setPlayers={setPlayers}
            currentPlayerId={player.playerId}
          /> 
        ))}
      </div>
    </div>
  );
}

export default Board;
