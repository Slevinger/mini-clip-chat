import React, { useState, useCallback } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Button from "@material-ui/core/Button";

export default props => {
  const { state, ...actions } = props;

  const [username, setUsername] = useState(null);
  const submit = useCallback(username => {
    username && actions.joinRoom(username);
  }, []);

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={!state.username}>
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <TextField
          error={state.error}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username || ""}
          helperText={state.error}
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            submit(username);
          }}
        >
          SIGN IN
        </Button>
      </DialogActions>
    </Dialog>
  );
};
