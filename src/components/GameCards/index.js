import React from "react";
import "./cards.css";

function GameCards(props) {
  return (

    <div onClick={() => props.gameLogic(props.id)}>
      <div className="image">
        <img alt={props.name} src={props.image} className="GameCard" />
      </div>
    </div>

  );
}

export default GameCards;
