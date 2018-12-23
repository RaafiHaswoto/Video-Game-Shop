import React from "react";
import _orderBy from "lodash/orderBy";
import GamesList from "./GamesList";

const games = [
  {
    _id: 1,
    featured: true,
    name: "Quadropolis",
    url:
      "https://boardgamegeek.com/boardgame/219618/quadropolis-public-services",
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
    url: "https://boardgamegeek.com/boardgame/157354/five-tribes",
    thumbnail:
      "https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg",
    price: 51.0,
    players: "2-4",
    duration: 80
  },
  {
    _id: 3,
    featured: false,
    name: "Roll for The Galaxy",
    url: "https://boardgamegeek.com/boardgame/132531/roll-galaxy",
    thumbnail:
      "https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg",
    price: 32.99,
    players: "2-4",
    duration: 60
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.toggleFeatured = this.toggleFeatured.bind(this);
  }

  componentDidMount() {
    this.setState({
      games: _orderBy(games, ["featured", "name"], ["desc", "asc"])
    });
  }

  toggleFeatured(gameId) {
    const newGames = this.state.games.map(game => {
      if (game._id === gameId) return { ...game, featured: !game.featured };
      return game;
    });
  }

  render() {
    return (
      <div className="ui container">
        <GamesList
          games={this.state.games}
          toggleFeature={this.toggleFeatured}
        />
      </div>
    );
  }
}

export default App;
