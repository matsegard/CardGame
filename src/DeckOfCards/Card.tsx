import { useEffect, useState } from "react";
import "./Card.css";
import Icards from "../Icards";

function Card({ card }: { card: Icards }) {
  return (
    <div className="Card">
      <p>{card.cardValue}</p>
      <p>{card.cardPattern}</p>
    </div>
  );
}

export default Card;
