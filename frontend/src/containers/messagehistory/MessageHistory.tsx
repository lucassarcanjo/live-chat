import { useEffect, useRef } from "react";
import ClassNames from "classnames";

import Message from "../../components/message";
import { ChatMessage, MessageType, useUserStore } from "~/hooks";
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
        const message =
          item.type === MessageType.UserMessage
            ? item.text
            : "outro tipo de mensagem";

        return (
          <Message
            key={item.timestamp}
            username={item.user}
            message={message}
            isMine={item.user === user}
          />
        );
      })}
      <div ref={containerEndRef} />
    </div>
  );
};
