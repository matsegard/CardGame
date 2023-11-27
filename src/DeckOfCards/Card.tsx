import { useEffect, useState } from "react";
import "./Card.css";
import Icards from "../Icard";
import spades from "../Images/spades.svg";
import hearts from "../Images/hearts.svg";
import diamonds from "../Images/diamonds.svg";
import clubs from "../Images/clubs.svg";

interface CardProps {
  cardPattern: string;
  cardValue: number;
}

function Card({ cardValue, cardPattern }: CardProps) {
  return (
    <div className="Card">
      <p>{cardValue}</p>
      {cardPattern === "spades" && <img className="pattern" src={spades}></img>}

      {cardPattern === "diamonds" && (
        <img className="pattern" src={diamonds}></img>
      )}

      {cardPattern === "hearts" && <img className="pattern" src={hearts}></img>}
      {cardPattern === "clubs" && <img className="pattern" src={clubs}></img>}
    </div>
  );
}

export default Card;
