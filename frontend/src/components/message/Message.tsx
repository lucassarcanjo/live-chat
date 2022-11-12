import ClassNames from "classnames";

import "./Message.scss";

export interface MessageProps {
  username: string;
  message: string;
  isMine: boolean;
}

export const Message = ({ username, message, isMine }: MessageProps) => {
  const elementClasses = ClassNames("message", { "message--mine": isMine });

  return (
    <div className={elementClasses}>
      <p className="message__user">{username}</p>
      <p className="message__text">{message}</p>
    </div>
  );
};
