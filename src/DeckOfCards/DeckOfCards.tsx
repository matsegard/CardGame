import { useEffect, useState } from "react";
import "./DeckOfCards.css";
import Card from "./Card";
import Icards from "../Icards";

function DeckOfCards({ deckOfCards }: { deckOfCards: Icards[] }) {
  return (
    <div className="DeckOfCards">
      {deckOfCards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
}

export default DeckOfCards;
