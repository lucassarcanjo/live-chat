import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Input from "../../components/input";
import Button from "../../components/button";

import "./ChatInput.scss";
import { fakeNameGeneratorApi } from "../../constants";

const ChatInput = ({ sendMessage }) => {
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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" label="enviar" />
    </form>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default ChatInput;
