import { useState, useEffect } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";

import { websocketHubUrl } from "../../constants";
import { useUserStore } from "../user/useUserStore";
import { useChatStore } from "./useChatStore";
import { MessageType } from "./types";

export enum HubMethod {
  SendMessage = "SendMessage",
  ReceiveMessage = "BroadcastMessage",
  SignIn = "SignIn",
  UserNotification = "NewUserNotification",
}

export interface HubMessage {
  user: string;
  message: string;
}

export const useChat = () => {
  const { user, userJoined } = useUserStore();
  const { messages, addMessage } = useChatStore();
  const [hubConnection, setHubConnection] = useState<HubConnection | null>(
    null
  );

  useEffect(() => {
    const hubInitialize = async () => {
      const connection = new HubConnectionBuilder()
        .withUrl(websocketHubUrl)
        .withAutomaticReconnect()
        .build();

      await connection.start();

      // Other users Sign In events
      connection.invoke(HubMethod.SignIn, user);
      connection.on(HubMethod.UserNotification, (hubUser) => {
        userJoined(hubUser);

        addMessage({
          user: hubUser,
          type: MessageType.UserJoin,
          timestamp: Date.now(),
        });
      });

      // Message events
      connection.on(HubMethod.ReceiveMessage, (chatMessage: HubMessage) =>
        addMessage({
          type: MessageType.UserMessage,
          user: chatMessage.user,
          text: chatMessage.message,
          timestamp: Date.now(),
        })
      );

      setHubConnection(connection);
    };

    if (user) hubInitialize();
  }, [user, addMessage, userJoined]);

  const sendMessage = async (message: string) => {
    if (hubConnection?.state !== HubConnectionState.Connected) return; // TODO return feedback to user
    if (user === null) return;

    const chatMessage = {
      user,
      message,
    };

    await hubConnection.invoke(HubMethod.SendMessage, chatMessage);
    addMessage({
      user,
      text: message,
      type: MessageType.UserMessage,
      timestamp: Date.now(),
    });
  };

  return { messages, sendMessage };
};
