import {Button} from "@mui/material";
import React from "react";
import "./GameActions.css"
export default function GameActions() {
    return (
        <React.Fragment>
        <div className="actions-container">
            <Button sx={{marginRight: '10px', width: '80px'}} variant="contained">MOVE</Button>
            <Button sx={{marginRight: '10px', width: '80px'}} variant="contained">FIGHT</Button>
        </div>
        <div className="actions-container">
        <Button sx={{marginRight: '10px', width: '80px'}} variant="contained">HEAL</Button>
        <Button sx={{width: '80px'}} variant="contained">COLLECT</Button>
    </div>
    </React.Fragment>
    )
}