import React, { Component } from "react";

class GameForm extends Component {
  state = {
    name: "",
    description: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
            placeholder="Full Game Title"
            value={this.state.name}
            onChange={this.handleChange}
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
            placeholder="Game Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default GameForm;
