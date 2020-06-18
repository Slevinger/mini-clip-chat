import React, { useContext } from "react";
import { Context as ChatContext } from "../context/MessagesContext";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // width: "100%",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper
  }
}));
export default () => {
  const {
    state: { users }
  } = useContext(ChatContext);
  const classes = useStyles();
  debugger;
  return (
    <List className={classes.root} dense={false}>
      {Object.values(users)
        .filter(Boolean)
        .map(({ username, imageUrl }) => {
          return (
            <ListItem key={username}>
              <ListItemAvatar>
                <Avatar alt={username} src={imageUrl} />
              </ListItemAvatar>
              <ListItemText primary={username} />
            </ListItem>
          );
        })}
    </List>
  );
};
