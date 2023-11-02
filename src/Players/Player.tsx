import { useEffect, useState } from "react";
import Icards from "../Icards";
import Iplayer from "../Iplayer";
import "./Player.css";

function Player({ player }: { player: Iplayer }) {
  return (
    <div className="player">
      <p>{player.name}</p>
    </div>
  );
}

export default Player;
