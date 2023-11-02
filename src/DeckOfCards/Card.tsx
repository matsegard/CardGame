import { useEffect, useState } from "react";
import "./Card.css";
import Icards from "../Icards";

function Card({ card }: { card: Icards }) {
  // console.log(card.pattern);

  return (
    <div className="Card">
      <p>{card.value}</p>
      <p>{card.pattern}</p>
    </div>
  );
}

export default Card;
