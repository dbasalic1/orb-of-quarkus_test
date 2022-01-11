import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Button, Tooltip} from "@mui/material";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete'
import "./Home.css"

export default function Home() {

    const [games, setGames] = useState([]);
    const [currentGame, setCurrentGame] = useState(null);

    const dummyData = [
        {
            id: 1,
            status: "New game created!",
            player: {
                name: "Player 1"
            }
        },
        {
            id: 2,
            status: "Game over!",
            player: {
                name: "Player 2"
            }
        }
    ]

    const loadGames = async () => {
        /*try {
            const response = await fetch("http://localhost:8081/api/game");
            const data = await response.json();
            setGames(data);
        }
        catch (error) {
            setGames(dummyData);
            console.log(error);
        } */
        setGames(dummyData);
    }

    const handleLoad = (game) => (event) => {
        setCurrentGame(game);
        console.log(game);
    }

    const createNewGame = (event) => {
        const newGame = {
            id: games.length + 1,
            status: "New game created!",
            player: {
                name: `Player ${games.length + 1}`
            }
        }
        setGames([...games, newGame]);
    }

    useEffect(() => {
        loadGames();
    }, []);

    return (
        <div className="main-container">
            <div className="heading-container">
                <h1 >WELCOME TO THE ORB OF QUARKUS </h1>
                <p>Create a new game or load a previous one.</p>
            </div>
            <div className="games-menu">
                <h1>My Games</h1>
                <div className="button-container">
                    <Button style={{ background: 'black' }} variant="contained" onClick={createNewGame}>NEW GAME</Button>
                </div>
                {games.length === 0 &&
                    <p>
                        You currently don't have any active games. Please create a new game.
                    </p>
                }
                <div className="table-menu">
                    {games.length > 0 && <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Game ID</TableCell>
                                    <TableCell>Game status</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    games.map((game) => {
                                        return (
                                            <TableRow>
                                                <TableCell>{game.id}</TableCell>
                                                <TableCell>{game.status}</TableCell>
                                                <TableCell  align="right">
                                                    <Button variant="contained" component={Link} to={`/game/${game.id}`}>LOAD GAME</Button>
                                                </TableCell>
                                                <TableCell>
                                                    <Tooltip title="Delete user" placement="top" arrow={true}>
                                                        <DeleteIcon
                                                            
                                                        />
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>}
                </div>
            </div>
        </div>
    )
}