import React, { Component } from "react";

class GameForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="name">Game Title</label>
          <input
            type="text"
            id="name"
            placeholder="Full Game Title"
            ref={input => (this.name = input)}
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
