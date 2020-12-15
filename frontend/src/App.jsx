import React, { useEffect, useRef, useState } from "react";
import { HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

import {
  websocketHubUrl,
  sendMessageHubMethod,
  receiveMessageClientMethod,
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
    const connection = new HubConnectionBuilder()
      .withUrl(websocketHubUrl)
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => {
        connection.on(receiveMessageClientMethod, (chatMessage) => {
          setChat([...chatRef.current, chatMessage]);
        });

        setHubConnection(connection);
      })

      .catch((e) => console.log("Connection failed: ", e));
  }, []);

  const sendMessage = async (user, message) => {
    if (hubConnection?.state !== HubConnectionState.Connected) return; // TODO return user feedback

    const chatMessage = {
      user,
      message,
    };

    await hubConnection.invoke(sendMessageHubMethod, chatMessage);

    setChat([...chat, chatMessage]);
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
