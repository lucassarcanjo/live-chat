import React, { useEffect, useRef, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

import {
  websocketHubUrl,
  receiveMessageEvent,
  sendMessageHubUrl,
} from "./constants";
import MessageHistory from "./containers/messagehistory";
import ChatInput from "./containers/chatinput";

import "./styles/global.scss";
import "fontsource-poppins";

const App = () => {
  const [chat, setChat] = useState([]);
  const chatRef = useRef(chat);
  chatRef.current = chat;

  useEffect(() => {
    const hubConnection = new HubConnectionBuilder()
      .withUrl(websocketHubUrl)
      .withAutomaticReconnect()
      .build();

    hubConnection
      .start()
      .then(() => {
        console.log("connected on hub");

        hubConnection.on(receiveMessageEvent, (chatMessage) => {
          setChat([...chatRef.current, chatMessage]);
        });
      })
      .catch((e) => console.log("Connection failed: ", e));
  }, []);

  const sendMessage = (user, message) => {
    fetch(sendMessageHubUrl, {
      method: "POST",
      body: JSON.stringify({ user, message }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((e) => console.log("Sending message failed. ", e));
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
