import React from "react";
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
