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
    const pattern = ["spades", "hearts", "clubs", "diamonds"];
    const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const newDeck: Icards[] = [];
    let id = 0;

    pattern.forEach((pattern) => {
      value.forEach((value) => {
        newDeck.push({ id, pattern, value });
        newDeck.forEach((card) => {
          id++;
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

    const name = ["me", "you"];
    const newPlayer: Iplayer[] = [];

    name.forEach((name) => {
      newPlayer.push({ name });
    });
    setPlayers(newPlayer);
  }, []);

  return (
    <div className="Board">
      {deckOfCards.length > 0 && <DeckOfCards deckOfCards={deckOfCards} />}
      <div className="playerpocket">
        {players.map((player, i) => (
          <Player
            key={i}
            player={player}
            deckOfCards={deckOfCards}
            setDeckOfCards={setDeckOfCards}
            setPlayers={setPlayers}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
