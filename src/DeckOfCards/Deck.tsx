import { useEffect, useState } from "react";
import "./Board.css";

function Deck() {
  const [count, setCount] = useState(true);

  return (
    <div className="Board">
      <h1>{count}</h1>
    </div>
  );
}

export default Deck;
