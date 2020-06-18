import React, { useState, useLayoutEffect, useRef, useContext } from "react";
import { Context as ChatContext } from "../context/MessagesContext";
import ChatMessage from "./ChatMessage";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    height: "80vh",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default () => {
  const classes = useStyles();
  const {
    state: { messages, users }
  } = useContext(ChatContext);

  const [showLatest, setShowLatest] = useState(true);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    if (showLatest) {
      scrollToBottom();
    }
  }, [showLatest, messages.length]);

  const containerRef = useBottomScrollListener(() => {
    setShowLatest(true);
  });

  const onScroll = e => {
    setShowLatest(false);
  };

  return (
    <List ref={containerRef} className={classes.root} onScroll={onScroll}>
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage
            classes={classes}
            user={users[message.username] || {}}
            {...message}
          />
          <Divider variant="inset" component="li" />
        </div>
      ))}
      <div style={{ float: "left", clear: "both" }} ref={bottomRef} />
    </List>
  );
};
