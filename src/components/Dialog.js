import React, { useState, useCallback } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import styled, { css } from "styled-components";
import { createFileSelector, toBase64 } from "../utils";
import CircularProgress from "@material-ui/core/CircularProgress";

const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    ${({ disabled }) =>
      disabled &&
      css`
        pointer-events: none;
      `}
  }
`;
const useStyles = makeStyles(theme => ({
  avatarPicker: {
    padding: "0px",
    marginTop: "10px",
    borderWidth: "thin",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    alignText: "center"
  }
}));

export default props => {
  const classes = useStyles();
  const { state, setProfileImage, ...actions } = props;
  const { loading } = state;
  debugger;
  const fileSelector = createFileSelector(setProfileImage);

  const [username, setUsername] = useState(null);
  const submit = useCallback(
    username => {
      username && actions.joinRoom(username, state.imageUrl);
    },
    [state]
  );

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
        <Container className={classes.avatarPicker}>
          <Avatar alt={username} src={state.imageUrl} />
          <LinkContainer className={classes.linkContainer}>
            <a
              href="#"
              onClick={() => {
                fileSelector.click();
              }}
            >
              Choose Image
            </a>
          </LinkContainer>
          {loading && <CircularProgress size={20} />}
        </Container>
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
