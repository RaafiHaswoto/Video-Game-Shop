import React from "react";
import GamesList from "./GamesList";

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">${game.price}</span>
      <img src={game.thumbnail} alt="Game Cover" />
    </div>
    <div className="content">
      <a
        href={game.url}
        className="url"
        style={{
          fontWeight: "bold",
          fontSize: "14pt",
          color: "black",
          margin: "0",
          padding: "0",
          fontHeight: "0pt"
        }}
      >
        <div className="name">{game.name}</div>
      </a>
      <div className="meta">
        <i className="icon users" style={{marginTop: "5%"}} /> {game.players};
        <i className="icon wait" /> {game.duration} min;
      </div>
    </div>
  </div>
);

export default GameCard;
