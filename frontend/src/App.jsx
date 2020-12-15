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
import "fontsource-poppins";

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
    };

    try {
      await hubConnection.invoke(sendMessageHubMethod, chatMessage);
      setChat([...chat, chatMessage]);
    } catch (err) {
      // TODO return user feedback
    }
  };

  return (
    <div className="wrapper">
      <main className="chatbox">
        <MessageHistory chat={chat} />
        <ChatInput sendMessage={sendMessage} />
      </main>
    </div>
  );
};

export default App;
