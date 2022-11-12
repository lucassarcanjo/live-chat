import ClassNames from "classnames";

import "./Message.scss";

export interface MessageProps {
  username: string;
  children: string | React.ReactNode | React.ReactNode[];
  isMine: boolean;
}

export const Message = ({ username, isMine, children }: MessageProps) => {
  const elementClasses = ClassNames("message", { "message--mine": isMine });

  return (
    <div className={elementClasses}>
      <p className="message__user">{username}</p>
      <p className="message__text">{children}</p>
    </div>
  );
};
