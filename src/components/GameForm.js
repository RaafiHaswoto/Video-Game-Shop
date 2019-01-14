import React, { Component } from "react";

const tags = [
  { _id: 1, name: "dice" },
  { _id: 2, name: "economic" },
  { _id: 3, name: "family" }
];

const genres = [
  { _id: 1, name: "adventure" },
  { _id: 2, name: "racing" },
  { _id: 3, name: "fight" }
];

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    featured: false,
    tags: [],
    genres: 1
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleStringChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
  };

  handleCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  toggleTag = tag => {
    this.state.tags.includes(tag._id)
      ? this.setState({ tags: this.state.tags.filter(id => id !== tag._id) })
      : this.setState({ tags: [...this.state.tags, tag._id] });
  };

  handleGenreChange = genre => {
    this.setState({ genre: genre._id})
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label
            htmlFor="name"
            style={{
              marginTop: "12pt",
              marginBottom: "12pt",
              fontSize: "14pt"
            }}
          >
            Game Title
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Title"
            value={this.state.name}
            onChange={this.handleStringChange}
          />
        </div>

        <div className="field">
          <label
            htmlFor="description"
            style={{
              marginTop: "12pt",
              marginBottom: "12pt",
              fontSize: "14pt"
            }}
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleStringChange}
          />
        </div>

        <div className="three fields">
          <div className="field">
            <label
              htmlFor="price"
              style={{
                marginTop: "12pt",
                marginBottom: "12pt",
                fontSize: "14pt"
              }}
            >
              Price (cents)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleNumberChange}
            />
          </div>

          <div className="field">
            <label
              htmlFor="duration"
              style={{
                marginTop: "12pt",
                marginBottom: "12pt",
                fontSize: "14pt"
              }}
            >
              Duration (minutes)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={this.state.duration}
              onChange={this.handleNumberChange}
            />
          </div>

          <div className="field">
            <label
              htmlFor="players"
              style={{
                marginTop: "12pt",
                marginBottom: "12pt",
                fontSize: "14pt"
              }}
            >
              Players
            </label>
            <input
              type="text"
              id="players"
              name="players"
              value={this.state.players}
              onChange={this.handleStringChange}
            />
          </div>
        </div>

        <div className="inline field">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            checked={this.state.featured}
            onChange={this.handleCheckboxChange}
          />

          <label htmlFor="featured">Featured?</label>
        </div>

        <div className="field">
          <label>Tags</label>
          {tags.map(tag => (
            <div key={tag._id} className="inline field">
              <input
                type="checkbox"
                id={`tag-${tag._id}`}
                checked={this.state.tags.includes(tag._id)}
                onChange={() => this.toggleTag(tag)}
              />
              <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
            </div>
          ))}
        </div>

        <div className="field">
          <label htmlFor="genres">Genres</label>
          {genres.map(genre => (
            <div key={genre._id} className="inline field">
              <input
                type="radio"
                id={`genre-${genre._id}`}
                checked={this.state.genre === genre._id}
                onChange={() => this.handleGenreChange(genre)}
              />
              <label htmlFor={`genre-${genre._id}`}>{genre.name}</label>
            </div>
          ))}
        </div>

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
