import React, { Component } from "react";

class GameForm extends Component {
  state = {
    name: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
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
            placeholder="Full Game Title"
            value={this.state.name}
            onChange={this.handleNameChange}
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
