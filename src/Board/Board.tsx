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
    const pattern = ["spades", "hearts", "clubs", "diamonds"];
    const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const newDeck: Icards[] = [];
    let id = 0;

    pattern.forEach((pattern) => {
      value.forEach((value) => {
        newDeck.push({ pattern, value });
        newDeck.forEach((card) => {
          id = id++;
        });
      });
    });

    setDeckOfCards(newDeck);

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
      {players.map((player, i) => (
        <Player key={i} player={player} />
      ))}
    </div>
  );
}

export default Board;
