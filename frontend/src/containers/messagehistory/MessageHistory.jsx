import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import Message from "../../components/message";

import "./MessageHistory.scss";

const MessageHistory = ({ chat, className, ...props }) => {
  const containerEndRef = useRef(null);
  const elementClasses = ClassNames("message-history", className);

  const scrollToBottom = () => {
    containerEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chat]);

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
      <div ref={containerEndRef} />
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
