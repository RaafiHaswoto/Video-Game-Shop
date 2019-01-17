import React from "react";
import _orderBy from "lodash/orderBy";
import GamesList from "./GamesList";
import GameForm from "./GameForm";
import TopNavigation from "./TopNavigation";

const publishers = [
  {
    _id: 1,
    name: "Days of Wonder"
  },
  {
    _id: 1,
    name: "Rio Grande Games"
  }
];

const games = [
  {
    _id: 1,
    publisher: 1,
    featured: false,
    name: "Ace Combat 7 Skies Unknown Game PS4",
    url:
      "https://www.rajagame.co.id/jual/5093/Ace-Combat-7-Skies-Unknown-Game-PS4---Preorder",
    thumbnail:
      "https://www.rajagame.co.id//images/products/acecombat7skyps4.jpg",
    price: 32.99,
    players: "2-4",
    duration: 60
  },
  {
    _id: 2,
    publisher: 2,
    featured: false,
    name: "Far Cry New Dawn Game PS4",
    url: "https://www.rajagame.co.id/jual/5653/Far-Cry-New-Dawn-Game-PS4---Preorder",
    thumbnail:
      "https://www.rajagame.co.id//images/products/farcrynewdawnps4.jpg",
    price: 51.0,
    players: "2-4",
    duration: 80
  },
  {
    _id: 3,
    publisher: 3,
    featured: false,
    name: "Metro Exodus Game PS4",
    url: "https://www.rajagame.co.id/jual/5656/Metro-Exodus-Game-PS4---Preorder",
    thumbnail:
      "https://www.rajagame.co.id//images/products/metroexodusps44.jpg",
    price: 32.99,
    players: "2-4",
    duration: 60
  }
];

class App extends React.Component {
  state = {
    games: [],
    showGameForm: false
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

  showGameForm = () => {
    this.setState({ showGameForm: true });
  };
  hideGameForm = () => {
    this.setState({ showGameForm: false });
  };

  addGame = game => {
    this.setState({
      games: this.sortGames([
        ...this.state.games,
        {
          ...game,
          _id: this.state.games.length + 1
        }
      ]),
      showGameForm: false
    });
  };

  render() {
    const numberOfColumns = this.state.showGameForm ? "ten" : "sixteen";
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.showGameForm} />
        {this.state.showGameForm && (
          <div className="six wide column">
            <GameForm
              publishers={publishers}
              cancel={this.hideGameForm}
              submit={this.addGame}
            />
          </div>
        )}

        <div className="ui stackable grid">
          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              toggleFeatured={this.toggleFeatured}
            />
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default App;
