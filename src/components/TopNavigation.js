import React from "react";
import PropTypes from "prop-types";

const TopNavigation = ({ showGameForm }) => (
  <div className="ui secondary pointing menu">
    <a href="/" className="item" />
    My Shop
    <a className="item" onClick={showGameForm}>
      <i className="icon plus" /> Add New Game
    </a>
  </div>
);

TopNavigation.PropTypes = {
  showGameForm: PropTypes.func.isRequired
};

export default TopNavigation;
