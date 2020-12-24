import { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

import {
  receiveMessageClientMethod,
  sendMessageHubMethod,
  signInHubMethod,
  userNotificationClientMethod,
  websocketHubUrl,
} from "../constants";

const useChat = (username) => {
  const [hubConnection, setHubConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const chatRef = useRef(chat);
  chatRef.current = chat;

  useEffect(() => {
    const hubInitialize = async () => {
      const connection = new HubConnectionBuilder()
        .withUrl(websocketHubUrl)
        .withAutomaticReconnect()
        .build();

      await connection.start();

      // Other users Sign In events
      connection.invoke(signInHubMethod, username);
      connection.on(userNotificationClientMethod, (user) => {
        setChat([
          ...chatRef.current,
          { user: `${user} acabou de entrar`, message: "" },
        ]);
      });

      // Message events
      connection.on(receiveMessageClientMethod, (chatMessage) => {
        setChat([...chatRef.current, chatMessage]);
      });

      setHubConnection(connection);
    };

    if (username) hubInitialize();
  }, [username]);

  const sendChatMessage = async (message) => {
    if (hubConnection?.state !== HubConnectionState.Connected) return; // TODO return user feedback

    const chatMessage = {
      user: username,
      message,
      isMine: true,
    };

    await hubConnection.invoke(sendMessageHubMethod, chatMessage);
    setChat([...chat, chatMessage]);
  };

  return [chat, sendChatMessage];
};

export default useChat;

// TODO error handling
