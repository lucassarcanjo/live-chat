import React, { useEffect, useState } from "react";

import MessageHistory from "./containers/messagehistory";
import ChatInput from "./containers/chatinput";
import Button from "./components/button";

import useChat from "./hooks/useChat";

import "./styles/global.scss";
import "./App.scss";
import "fontsource-poppins";

const App = () => {
  const [username, setUsername] = useState("");

  // TODO get random value for  username
  const [chat, sendChatMessage] = useChat(username);

  useEffect(() => setUsername("vandeco"), []);

  return (
    <div className="chat">
      <header className="chat__header">
        <h2 className="chat__title">Group Chat</h2>
        <Button label="Messages" type="button" className="chat__button" />
        <Button
          label="Participants"
          type="button"
          className="chat__button"
          variant="secondary"
        />
      </header>
      <MessageHistory chat={chat} className="chat__main" />
      <ChatInput sendMessage={sendChatMessage} className="chat__footer" />
    </div>
  );
};

export default App;
