import { FormEvent, useState } from "react";
import ClassNames from "classnames";
import { Send } from "react-feather";

import { Input } from "~/components/input";
import { Button } from "~/components/button";
import "./ChatInput.scss";

export interface ChatInputProps {
  className: string;
  sendMessage: (message: string) => void;
}

export const ChatInput = ({ sendMessage, className }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message) return;

    sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className={ClassNames(className, "chatinput")}
      onSubmit={handleSubmit}
    >
      <Input
        autoFocus
        type="text"
        value={message}
        className="chatinput__input"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        type="submit"
        label={<Send size={18} />}
        className="chatinput__button"
      />
    </form>
  );
};
