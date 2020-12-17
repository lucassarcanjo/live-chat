import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import "./Message.scss";

const Message = ({ username, message, isMine }) => {
  const elementClasses = ClassNames("message", { "message--mine": isMine });

  return (
    <div className={elementClasses}>
      <b className="message__user">{username}</b>
      <p className="message__text">{message}</p>
    </div>
  );
};

Message.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string.isRequired,
  isMine: PropTypes.bool,
};

Message.defaultProps = {
  username: "",
  isMine: false,
};

export default Message;
