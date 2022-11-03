import { MessageHistory } from "./containers/messagehistory";
import { ChatInput } from "./containers/chatinput";
import { Header } from "./containers/header";
import { Login } from "./containers/login";
import { useChat } from "./hooks/useChat";
import { useUserStore } from "./hooks/useUserStore";

import "fontsource-poppins";
import "./styles/global.scss";
import "./App.scss";

export const App = () => {
  const { user } = useUserStore();
  const { messages, sendMessage } = useChat();

  return (
    <div className="chat">
      <Header />
      {!user && <Login />}

      <MessageHistory messages={messages} className="chat__main" />
      <ChatInput sendMessage={sendMessage} className="chat__footer" />
    </div>
  );
};
