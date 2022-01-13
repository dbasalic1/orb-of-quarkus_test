import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./GameTable.css";

export default function GameTable(props) {
  const [games, setGames] = useState(props.data);

  useEffect(() => {
    setGames(props.data)
    console.log(props.data.length)
  },[games, props.data])
  return (
    <div>
        <TableContainer>
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
              {games.map((game) => {
                return (
                  <TableRow>
                    <TableCell>{game.id}</TableCell>
                    <TableCell>{game.status}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        component={Link}
                        to={`/game/${game.id}`}
                      >
                        LOAD GAME
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Delete game" placement="top" arrow={true}>
                        <DeleteIcon />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
  </div>
  );
}
