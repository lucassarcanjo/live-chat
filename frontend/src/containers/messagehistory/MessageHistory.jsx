import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import Message from "../../components/message";

import "./MessageHistory.scss";

const MessageHistory = ({ chat, className, ...props }) => {
  const elementClasses = ClassNames("message-history", className);

  return (
    <div {...props} className={elementClasses}>
      {chat.map((m) => (
        <Message
          key={Date.now() * Math.random()}
          username={m.user}
          message={m.message}
          isMine={m?.isMine}
        />
      ))}
    </div>
  );
};

MessageHistory.propTypes = {
  className: PropTypes.string,
  chat: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      isMine: PropTypes.bool,
    })
  ),
};

MessageHistory.defaultProps = {
  chat: [],
  className: "",
};

export default MessageHistory;
