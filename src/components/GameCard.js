import React from "react";
import PropTypes from "prop-types";
import Featured from "./Featured";

const GameCard = ({ game }) => (
  <div
    className="ui card"
    style={{
      marginLeft: "40pt",
      marginTop: "60pt"
    }}
  >
    <div className="image">
      <span className="ui green ribbon label">${game.price}</span>
      <Featured
        featured={game.featured}
        toggleFeatured={game.toggleFeatured}
        gameId={game._id}
      />
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
        <i className="icon users" style={{ marginTop: "5%" }} /> {game.players};
        <i className="icon wait" /> {game.duration} min;
      </div>
    </div>
  </div>
);

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired
};

export default GameCard;
