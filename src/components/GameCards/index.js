import React from "react";
import "./style.css";

function GameCards(props) {
  return (

    <div onClick={() => props.gameLogic(props.id)} className="GameCard">
      <div className="image">
        <img alt={props.name} src={props.image} />
      </div>
    </div>

  );
}

export default GameCards;
