import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import GameActions from "../../components/gameActions/GameActions";
import PlayerStatus from "../../components/playerStatus/PlayerStatus";
import React, { useState } from "react";
import "./Game.css";

const dummyPlayer = {
  id: 1,
  health: 100,
  maxHealth: 100,
  damage: 40,
};



export default function Game() {
  const { id } = useParams();
  const [status, setStatus] = useState("This is a dummy status");
  const [player, setPlayer] = useState(dummyPlayer);

  return (
    <div className="game-container">
      <h1>Game {id}</h1>
      <div className="gamestatus">
        <Card sx={{ width: "500px", height: "200px" }}>
          <CardContent>
            <h2>{status}</h2>
          </CardContent>
        </Card>
      </div>
      <div className="gameactions">
      <GameActions />
      </div>
      <PlayerStatus player={player} />
      
    </div>
  );
}
