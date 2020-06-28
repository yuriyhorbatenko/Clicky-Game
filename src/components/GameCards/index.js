import React from "react";
import "./style.css";

function GameCards(props) {
  return (
    <div className="content">
      <div onClick={() => props.gameLogic(props.id)} className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default GameCards;
