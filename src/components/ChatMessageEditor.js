import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      width: "100%"
    }
  }
}));

export default ({ sendMessage, showLastMessage, error }) => {
  const classes = useStyles();
  const [message, setMessage] = useState("");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        error={error}
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
            sendMessage(message);
            setMessage("");
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          sendMessage(message);

          setMessage("");
        }}
      >
        SEND
      </Button>
    </form>
  );
};
