import React from 'react';
import _orderBy from "lodash/orderBy"
import GamesList from "./GamesList"

const games = [
    {
        _id: 1,
        featured: false,
        name: "Quadropolis",
        url:'https://boardgamegeek.com/boardgame/219618/quadropolis-public-services',
        thumbnail:
        "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 32.99,
        players: "2-4",
        duration: 60
    },
    {
        _id: 2,
        featured: false,
        name: "Five Tribes",
        url:'https://boardgamegeek.com/boardgame/157354/five-tribes',
        thumbnail:
        "https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg",
        price: 51.00,
        players: "2-4",
        duration: 80
    },
    {
        _id: 3,
        featured: false,
        name: "Roll for The Galaxy",
        url: 'https://boardgamegeek.com/boardgame/132531/roll-galaxy',
        thumbnail:
        "https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg",
        price: 32.99,
        players: "2-4",
        duration: 60
    }
]

class App extends React.Component {
    state = {
        games: []
    }
    
    componentDidMount () {
        this.setState({ games: _orderBy(games, ["featured", "name"], ["desc", "asc"]) })
    }

    render() { 
        return (  
        <div className="ui container">
        <GamesList games={this.state.games} />
        </div>
        )
    }
}
 
export default App;

