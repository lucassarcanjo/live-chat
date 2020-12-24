import React, { useState } from "react";

import MessageHistory from "./containers/messagehistory";
import ChatInput from "./containers/chatinput";
import Header from "./containers/header";
import Login from "./containers/login";

import useChat from "./hooks/useChat";

import "fontsource-poppins";
import "./styles/global.scss";
import "./App.scss";

const App = () => {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [chat, sendChatMessage] = useChat(username);

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <div className="chat">
      {isLogged ? (
        <Header />
      ) : (
        <Login setUsername={setUsername} setLogin={handleLogin} />
      )}

      <MessageHistory chat={chat} className="chat__main" />
      <ChatInput sendMessage={sendChatMessage} className="chat__footer" />
    </div>
  );
};

export default App;
