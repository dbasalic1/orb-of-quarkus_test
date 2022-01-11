import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";
import HealthBar from "./HealthBar/HealthBar";
import "./PlayerStatus.css";

const dummyItems = [{
    id: 1,
    name: "Small sword"
},
{
    id: 2,
    name: "Healing potion"
}
]

export default function PlayerStatus(props) {
  const [health, setHealth] = useState(props.player.health);
  return (
    <div className="playerstatus">
      <h2>Player status</h2>
      <div className="health-bar">
        <HealthBar completed={health} bgcolor="green" />
      </div>
      <div>
        <h2>Items</h2>
        {dummyItems.map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
    </div>
  );
}
