import React from "react";
import _orderBy from "lodash/orderBy";
import GamesList from "./GamesList";

const games = [
  {
    _id: 1,
    featured: false,
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
  },
  {
    _id: 4,
    featured: false,
    name: "Gloomhaven",
    url:
      "https://boardgamegeek.com/boardgame/219618/quadropolis-public-services",
    thumbnail:
      "https://cf.geekdo-images.com/P7MVqNuhAl8Y4fxiM6e74kMX6e0=/fit-in/246x300/pic2437871.jpg",
    price: 32.99,
    players: "2-4",
    duration: 60
  },
  {
    _id: 5,
    featured: false,
    name: "Pandemic Legacy: Season 1",
    url: "https://boardgamegeek.com/boardgame/157354/five-tribes",
    thumbnail:
      "https://cf.geekdo-images.com/n8626bWQOoE_1nqvLUXi_6QfYO0=/fit-in/246x300/pic2452831.png",
    price: 51.0,
    players: "2-4",
    duration: 80
  },
  {
    _id: 6,
    featured: false,
    name: "Through the Ages: A New Story of Civilization",
    url: "https://boardgamegeek.com/boardgame/132531/roll-galaxy",
    thumbnail:
      "https://cf.geekdo-images.com/32e-PrFMZ0-P_KsnZHApZazlPqc=/fit-in/246x300/pic2663291.jpg",
    price: 32.99,
    players: "2-4",
    duration: 60
  },
  {
    _id: 7,
    featured: false,
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
    _id: 8,
    featured: false,
    name: "Terraforming Mars",
    url: "https://boardgamegeek.com/boardgame/157354/five-tribes",
    thumbnail:
      "https://cf.geekdo-images.com/bhemoxL7PG1a_79L0D9syPTADSY=/fit-in/246x300/pic3536616.jpg",
    price: 51.0,
    players: "2-4",
    duration: 80
  },
  {
    _id: 9,
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
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
  }

  sortGames(games) {
    return _orderBy(games, ["featured", "name"], ["desc", "asc"]);
  }

  toggleFeatured = gameId => {
    const newGames = this.state.games.map(game => {
      if (game._id === gameId) return { ...game, featured: !game.featured };
      return game;
    });
    this.setState({ games: this.sortGames(newGames) });
  };

  render() {
    return (
      <div className="ui container">
        <GamesList
          games={this.state.games}
          toggleFeatured={this.toggleFeatured}
        />
      </div>
    );
  }
}

export default App;
