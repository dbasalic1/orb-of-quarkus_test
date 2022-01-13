import React, { useState, useEffect } from "react";
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
  const [maxHealth, setMaxHealth] = useState(props.player.maxHealth);
  const [items, setItems] = useState(props.player.items);

  useEffect(() => {
    setHealth(props.player.health);
    setMaxHealth(props.player.maxHealth);
    setItems(props.player.items);
  }, [props])
  return (
    <div className="playerstatus">
      <h2>Player status ({props.player.name})</h2>
      <div className="health-bar">
        <HealthBar currentHealth={health} maxHealth={maxHealth} bgcolor="green" />
      </div>
      <div>
        <h2>Items</h2>
        {items.length > 0 && (items.map((item) => {
          return <p>{item.name}</p>;
        }))}
        {items.length === 0 && 
        <p>You currently don't have any items!</p>}
      </div>
    </div>
  );
}
