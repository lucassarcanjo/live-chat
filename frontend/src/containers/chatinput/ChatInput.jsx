import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { Send } from "react-feather";

import { fakeNameGeneratorApi } from "../../constants";
import Input from "../../components/input";
import Button from "../../components/button";

import "./ChatInput.scss";

const ChatInput = ({ sendMessage, className, ...props }) => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(fakeNameGeneratorApi)
      .then((response) => response.text())
      .then((text) => setUser(text));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(user, message);
    setMessage("");
  };

  return (
    <form
      {...props}
      className={ClassNames(className, "chatinput")}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        value={message}
        className="chatinput__input"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        type="submit"
        label={<Send size={18} />}
        className="chatinput__button"
        variant="action"
      />
    </form>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ChatInput.defaultProps = {
  className: "",
};

export default ChatInput;
