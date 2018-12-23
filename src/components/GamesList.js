import React from 'react';
import GameCard from './GameCard'


const GamesList = ({ games }) => (
    <div className="ui four cards">
        {games.map(game => <GameCard game={game} />)}
    </div>
)

export default GamesList