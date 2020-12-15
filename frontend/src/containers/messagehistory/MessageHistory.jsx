import React from "react";
import PropTypes from "prop-types";

import Message from "../../components/message";

import "./MessageHistory.scss";

const MessageHistory = ({ chat }) => (
  <div>
    {chat.map((m) => (
      <Message
        key={Date.now() * Math.random()}
        username={m.user}
        message={m.message}
      />
    ))}
  </div>
);

MessageHistory.propTypes = {
  chat: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

MessageHistory.defaultProps = {
  chat: [],
};

export default MessageHistory;
