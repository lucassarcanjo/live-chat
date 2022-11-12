import { MessageHistory } from "./containers/messagehistory";
import { ChatInput } from "./containers/chatinput";
import { Header } from "./containers/header";
import { Login } from "./containers/login";
import { Participants } from "./containers/participants";
import { useChat, useUserStore, useRealViewPort } from "./hooks";

import "fontsource-poppins";
import "./styles/global.scss";
import "./App.scss";

export const App = () => {
  const { user } = useUserStore();
  const { messages, sendMessage } = useChat();
  useRealViewPort();

  return (
    <div className="chat">
      {!user && <Login />}

      <Header />

      {user && (
        <div className="chat__wrapper">
          <div className="chat__container">
            <MessageHistory messages={messages} className="chat__main" />
            <ChatInput sendMessage={sendMessage} className="chat__footer" />
          </div>

          <Participants />
        </div>
      )}
    </div>
  );
};
