import React from "react";
import PropTypes from "prop-types";

const Message = ({ header, content, type }) => (
  <div
    className={
      type === "success"
        ? "ui success message"
        : type === "error"
        ? "ui error message"
        : "ui info message"
    }
  >
    <i className="info icon" />
    <div className="content">
      <div className="header">{header}</div>
      <p>{content}</p>
    </div>
  </div>
);

Message.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Message;
