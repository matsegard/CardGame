import { useEffect, useState } from "react";
import Icards from "../Icards";
import Iplayer from "../Iplayer";
import "./Player.css";
import { Console } from "console";

interface PlayerProps {
  player: Iplayer;
  deckOfCards: Icards[];
  setDeckOfCards: React.Dispatch<React.SetStateAction<Icards[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
  currentPlayerId: string
}

function Player({
  setPlayers,
  player,
  currentPlayerId,
  deckOfCards,
  setDeckOfCards,
}: PlayerProps) {
  const [newPlayerHand, setNewPlayerHand] = useState<Icards[]>([]);
  let playersTurn: number = 0;
  let orginalDeck = [...deckOfCards];
  let i = 0;

  useEffect(() => {
    let updatedDeck = [...orginalDeck];
    const takenCards = orginalDeck.slice(-3);

    takenCards.forEach((playerCard) => {
      let cardValue = playerCard.cardValue;
      let cardPattern = playerCard.cardPattern;
      let cardId = playerCard.cardId;
      newPlayerHand.push({ cardId, cardPattern, cardValue });
    });
    updatedDeck = orginalDeck.filter((card) => !takenCards.includes(card));
    orginalDeck = orginalDeck.slice(0, -3)
    setDeckOfCards(orginalDeck);
    player.cardHand = [...takenCards];
    setNewPlayerHand(takenCards);
    console.log(orginalDeck)
  
    console.log(currentPlayerId)
    console.log(takenCards);
  }, []);

  function takeCard() {
    console.log(newPlayerHand)
    let cardsToTake = 3 - newPlayerHand.length;
    if (newPlayerHand.length < 3) {
      const takenCards = deckOfCards.slice(-cardsToTake);
      const updatedDeck = deckOfCards.slice(0, -cardsToTake);

      takenCards.forEach((playerCard) => {
        let cardValue = playerCard.cardValue;
        let cardPattern = playerCard.cardPattern;
        let cardId = playerCard.cardId;
        newPlayerHand.push({ cardId, cardPattern, cardValue });
      });

      setDeckOfCards(updatedDeck)


    }
    else
      console.log("hand is full")
  }

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
        <button onClick={takeCard}>Take cards</button>
        <div key={currentPlayerId}>
          <p>Player ID: {player.playerId}</p>
          <div className="Card">
            {player.playerId === currentPlayerId && (
              <>
                {player.cardHand?.map((card, cardId) => (

                  <div key={cardId} className="Card">
                    <p>{card.cardPattern}</p>
                    <p>{card.cardValue}</p>

                  </div>
                ))}
              </>
            )}
          </div>

        </div>

      </div>
      {/* <button onClick={switchPlayer}>Next player</button> */}
      <p>Current Player Turn: {playersTurn}</p>
    </div>
  );
}

export default Player;
