import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Home.css";
import GameTable from "../../components/table/GameTable";
import NewGameDialog from "../../components/dialog/NewGameDialog";

export default function Home() {
  const [games, setGames] = useState([]);
  const [newGameDialogOpen, setNewGameDialogOpen] = useState(false);

  const handleNewGameDialog = () => {
    setNewGameDialogOpen(!newGameDialogOpen);
  };
  const dummyData = [
    {
      id: 1,
      status: "New game created!",
      player: {
        name: "Player 1",
      },
    },
    {
      id: 2,
      status: "Game over!",
      player: {
        name: "Player 2",
      },
    },
  ];

  const loadGames = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/game");
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewGame = (event) => {
    const newGame = {
      id: games.length + 1,
      status: "New game created!",
      player: {
        name: `Player ${games.length + 1}`,
      },
    };
    setGames([...games, newGame]);
  };

  const handleCreateNewGame = async (name) => {
    handleNewGameDialog();
    const player = {
      name: name,
    };
    const response = await fetch("http://localhost:8081/api/game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    });
    loadGames();
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className="main-container">
      <div className="heading-container">
        <h1>WELCOME TO THE ORB OF QUARKUS </h1>
        <p>Create a new game or load a previous one.</p>
      </div>
      <div className="games-menu">
        <h1>My Games</h1>
        <div className="button-container">
          <Button
            style={{ background: "black" }}
            variant="contained"
            onClick={handleNewGameDialog}
          >
            NEW GAME
          </Button>
        </div>
        <div>
          {games.length === 0 && (
            <p>
              You currently don't have any active games. Please create a new
              game.
            </p>
          )}
        </div>
        {games.length > 0 && <GameTable data={games} />}
      </div>
      <NewGameDialog
        open={newGameDialogOpen}
        handleCancel={handleNewGameDialog}
        handleCreateAndClose={handleCreateNewGame}
      />
    </div>
  );
}
