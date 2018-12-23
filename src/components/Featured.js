import React from "react";
import PropTypes from "prop-types";

const Featured = ({ featured, toggledFeatured, gameId }) => {
  return (
    <span>
      {featured ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          onClick={() => toggledFeatured(gameId)}
          className="ui right yellow corner label"
        >
          <i className="star icon" />
        </a>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          onClick={() => toggledFeatured(gameId)}
          className="ui right corner label"
        >
          <i className="empty star icon" />
        </a>
      )}
    </span>
  );
};

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired
};

export default Featured;
