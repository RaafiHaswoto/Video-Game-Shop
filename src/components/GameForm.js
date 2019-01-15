import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback"

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    featured: false,
    publisher: 0,
    thumbnail: ""
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

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
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
          </div>
          <div className="four wide column">
            <ReactImageFallback
              src={this.state.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="thumbnail"
              className="ui image"
              style={{
                  marginTop:"45pt"
              }}
            />
          </div>
        </div>

        <div className="field">
          <label
            htmlFor="thubmnail"
            style={{
              marginTop: "12pt",
              marginBottom: "12pt",
              fontSize: "14pt"
            }}
          >
            Thumbnail
          </label>
          <input
            type="text"
            id="thubmnail"
            name="thubmnail"
            placeholder="Image URL"
            value={this.state.thubmnail}
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
          <label
            htmlFor="publishers"
            style={{
              marginTop: "22pt"
            }}
          >
            Publishers
            <select
              style={{
                marginTop: "12pt"
              }}
              name="publisher"
              value={this.state.publisher}
              onChange={this.handleNumberChange}
            >
              <option value="0">Choose Publisher</option>
              {this.props.publishers.map(publisher => (
                <option value={publisher._id} key={publisher._id}>
                  {publisher.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

GameForm.defaultProps = {
  publishers: []
};

export default GameForm;
