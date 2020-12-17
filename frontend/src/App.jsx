import React, { useEffect, useRef, useState } from "react";
import { HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

import {
  websocketHubUrl,
  sendMessageHubMethod,
  receiveMessageClientMethod,
  userNotificationClientMethod,
  signInHubMethod,
} from "./constants";
import MessageHistory from "./containers/messagehistory";
import ChatInput from "./containers/chatinput";

import "./styles/global.scss";
import "./App.scss";
import "fontsource-poppins";
import Button from "./components/button";

const App = () => {
  const [hubConnection, setHubConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const chatRef = useRef(chat);
  chatRef.current = chat;

  useEffect(() => {
    // TODO provide user feedback of connection status
    const hubInitialize = async () => {
      const connection = new HubConnectionBuilder()
        .withUrl(websocketHubUrl)
        .withAutomaticReconnect()
        .build();

      await connection.start();

      connection.invoke(signInHubMethod, "vandecoo");

      // Subscribe to connection events raised from server
      connection.on(receiveMessageClientMethod, (chatMessage) => {
        setChat([...chatRef.current, chatMessage]);
      });

      connection.on(userNotificationClientMethod, (username) => {
        setChat([...chatRef.current, { user: username, message: "cheguei" }]);
      });

      setHubConnection(connection);
    };

    hubInitialize();
  }, []);

  const sendMessage = async (user, message) => {
    if (hubConnection?.state !== HubConnectionState.Connected) return; // TODO return user feedback

    const chatMessage = {
      user,
      message,
      isMine: true,
    };

    try {
      await hubConnection.invoke(sendMessageHubMethod, chatMessage);
      setChat([...chat, chatMessage]);
    } catch (err) {
      // TODO return user feedback
    }
  };

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
      <ChatInput sendMessage={sendMessage} className="chat__footer" />
    </div>
  );
};

export default App;
