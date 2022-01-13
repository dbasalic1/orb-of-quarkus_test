import { Button } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import HardwareIcon from "@mui/icons-material/Hardware";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PanToolIcon from "@mui/icons-material/PanTool";
import React from "react";
import "./GameActions.css";
export default function GameActions({moveCommand, healCommand, fightCommand, collectCommand}) {
    const handleMove = () => {
        moveCommand();
    }
    const handleHeal = () => {
        healCommand();
    }
    const handleFight = () => {
        fightCommand();
    }
    const handleCollect = () => {
        collectCommand();
    }
  return (
    <React.Fragment>
      <div className="actions-container">
        <Button
          sx={{ marginRight: "10px", width: "95px" }}
          variant="contained"
          onClick={handleMove}
        >
          <ArrowForwardOutlinedIcon />
          MOVE
        </Button>
        <Button
          sx={{ width: "95px" }}
          variant="contained"
          onClick={handleFight}
        >
          <HardwareIcon />
          FIGHT
        </Button>
      </div>
      <div className="actions-container">
        <Button
          sx={{ marginRight: "10px", width: "95px" }}
          variant="contained"
          onClick={handleHeal}
        >
          <LocalHospitalIcon />
          HEAL
        </Button>
        <Button
          sx={{ width: "95px" }}
          variant="contained"
          onClick={handleCollect}
        >
          <PanToolIcon />
          COLLECT
        </Button>
      </div>
    </React.Fragment>
  );
}
