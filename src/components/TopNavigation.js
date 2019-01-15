/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const TopNavigation = ({ showGameForm }) => (
  <div className="ui secondary pointing menu">
    <a href="/" className="item">
      My Video Shop
    </a>
    <a className="item" onClick={showGameForm}>
      <i className="icon plus" /> Add New Game
    </a>
  </div>
);

TopNavigation.PropTypes = {
  showGameForm: PropTypes.func.isRequired
};

export default TopNavigation;
