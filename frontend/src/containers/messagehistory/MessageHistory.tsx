import { useEffect, useRef } from "react";
import ClassNames from "classnames";

import { ChatMessage, MessageType, useUserStore } from "~/hooks";
import { Message } from "~/components/message";
import "./MessageHistory.scss";

export interface MessageHistoryProps {
  messages: ChatMessage[];
  className: string;
}

export const MessageHistory = ({
  messages,
  className,
}: MessageHistoryProps) => {
  const { user } = useUserStore();
  const containerEndRef = useRef<HTMLDivElement>(null);
  const elementClasses = ClassNames("message-history", className);

  const scrollToBottom = () => {
    containerEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className={elementClasses}>
      {messages.map((item) => {
        let message;

        switch (item.type) {
          case MessageType.UserMessage:
            message = item.text;
            break;
          case MessageType.UserJoin:
            message = <i>{MessageType.UserJoin}</i>;
            break;
          case MessageType.UserLeave:
            message = <i>{MessageType.UserLeave}</i>;
            break;
        }

        return (
          <Message
            key={item.timestamp}
            username={item.user}
            isMine={item.user === user}
          >
            {message}
          </Message>
        );
      })}
      <div ref={containerEndRef} />
    </div>
  );
};
