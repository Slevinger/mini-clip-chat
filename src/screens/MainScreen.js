import React, { useEffect, useState } from "react";
import { socket } from "../services/socket";
import Dialog from "../components/Dialog";
import Chat from "./Chat";
import useChat from "../hooks/useChat";

export default () => {
  const chat = useChat();

  return (
    <>
      <Dialog {...chat} />
      <Chat {...chat} />
    </>
  );
};
