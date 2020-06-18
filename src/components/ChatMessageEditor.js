import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Context as ChatContext } from "../context/MessagesContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    "& .MuiTextField-root": {
      width: "100%"
    }
  }
}));

export default () => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const {
    state: { username, error },
    sendMessage
  } = useContext(ChatContext);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        error={username && error}
        helperText={username && error}
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        value={message}
        variant="outlined"
        onChange={e => {
          setMessage(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter" && e.shiftKey) {
            sendMessage(username, message);
            setMessage("");
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          sendMessage(username, message);
          setMessage("");
        }}
      >
        SEND
      </Button>
    </form>
  );
};
