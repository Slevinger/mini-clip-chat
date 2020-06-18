import React from "react";
import axios from "./api/mini-clip-chat-api";
import MainScreen from "./screens/MainScreen";
import { Provider as ChatProvider } from "./context/MessagesContext";

function App() {
  return (
    <ChatProvider>
      <MainScreen />
    </ChatProvider>
  );
}

export default App;
