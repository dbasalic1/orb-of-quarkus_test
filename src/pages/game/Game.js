import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import GameActions from "../../components/gameActions/GameActions";
import PlayerStatus from "../../components/playerStatus/PlayerStatus";
import React, { useState, useEffect } from "react";
import "./Game.css";

const dummyPlayer = {
  id: 1,
  name: "Player",
  health: 100,
  maxHealth: 100,
  damage: 40,
};



export default function Game() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [gameLoaded, setGameLoaded] = useState(false);

  const fetchGame = async () => {
    const response = await fetch(`http://localhost:8081/api/game/${id}`);
    const data = await response.json();
    setGame(data);
    setGameLoaded(true);
  }

  const move = async() => {
    const response = await fetch(`http://localhost:8081/api/game/${id}/move`, {
      method: "POST"
    });
    const data = await response.json();
    setGame(data);
  }

  const heal = async() => {
    const response = await fetch(`http://localhost:8081/api/game/${id}/heal`, {
      method: "POST"
    });
    const data = await response.json();
    setGame(data);
  }

  const fight = async() => {
    const response = await fetch(`http://localhost:8081/api/game/${id}/fight`, {
      method: "POST"
    });
    const data = await response.json();
    setGame(data);
  }

  const collect = async() => {
    const response = await fetch(`http://localhost:8081/api/game/${id}/collect`, {
      method: "POST"
    });
    const data = await response.json();
    setGame(data);
  }

  useEffect(() => {
    fetchGame();
    
  },[])

  return (
    gameLoaded && (
    <div className="game-container">
      <h1>Game {id}</h1>
      <div className="status-and-actions">
      <div className="gamestatus">
        <Card sx={{ width: "500px", height: "200px" }}>
          <CardContent>
            <h2>{game.status}</h2>
          </CardContent>
        </Card>
      </div>
      <div className="gameactions">
      <GameActions moveCommand={move} healCommand={heal} fightCommand={fight} collectCommand={collect}/>
      </div>
      </div>
      <PlayerStatus player={game.player} />

    </div>
    )
  
  );
}
