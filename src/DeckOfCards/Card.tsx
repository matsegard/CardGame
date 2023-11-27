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
  let patternImage: string | null | undefined;

  switch (cardPattern) {
    case "spades":
      patternImage = spades;
      break;
    case "diamonds":
      patternImage = diamonds;
      break;
    case "hearts":
      patternImage = hearts;
      break;
    case "clubs":
      patternImage = clubs;
      break;
    default:
      patternImage = null;
  }

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < cardValue; i++) {
      images.push(
        <img
          key={i}
          className="pattern"
          alt="suit"
          src={patternImage || undefined}
        />
      );
    }
    return images;
  };

  return (
    <div className="Card">
      <p>{cardValue}</p>
      {patternImage && (
        <img className="pattern" src={patternImage} alt={cardPattern} />
      )}

      {cardValue > 2 && cardValue < 11 && renderImages()}
      {cardValue === 11 && renderImages() && <p>Jack</p>}
      {cardValue === 12 && renderImages() && <p>Queen</p>}
      {cardValue === 13 && renderImages() && <p>King</p>}
      {cardValue === 14 && renderImages() && <p>A</p>}
    </div>
  );
}

export default Card;
