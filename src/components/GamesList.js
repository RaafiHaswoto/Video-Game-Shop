import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard'

const GamesList = ({ games }) => (
    <div className="ui four cards">
        {games.map(game => <GameCard game={game} key={game._id} />)}
    </div>
)

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default GamesList