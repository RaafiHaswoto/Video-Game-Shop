import React from "react";
import PropTypes from "prop-types";
import GameCard from "./GameCard";
import Message from "./Messages";

const GamesList = ({ games, toggleFeatured }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <Message
        header="There are no games in tour store!"
        content="You should add some,dont you think?"
        type="error"
      />
    ) : (
<<<<<<< HEAD
      games.map(game => (
        <GameCard game={game} toggleFeatured={toggleFeatured} key={game._id} />
      ))
=======
      games.map(game => <GameCard game={game} toggleFeatured={toggleFeatured} key={game._id} />
      )
>>>>>>> ecae64f3438f4c4d4229be709e5b19afb8c1bd53
    )}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
