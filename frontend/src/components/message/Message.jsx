import React from "react";
import PropTypes from "prop-types";

import "./Message.scss";

const Message = ({ username, message }) => (
  <div className="message">
    <b className="message__user">{username}</b>
    <p className="message__text">{message}</p>
  </div>
);

Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
