import React from "react";
import PropTypes from "prop-types";

const Featured = ({ featured, toggleFeatured, gameId }) => (
  <div>
    <span>
      {featured ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          className="ui right yellow corner label" style={{cursor: "pointer"}}
          onClick={() => toggleFeatured(gameId)}
        >
          <i className="star icon" />
        </a>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a 
          className="ui right corner label" style={{cursor: "pointer"}}
          onClick={() => toggleFeatured(gameId)}
        >
          <i className="star icon" />
        </a>
      )}
    </span>
  </div>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired
};

export default Featured;
