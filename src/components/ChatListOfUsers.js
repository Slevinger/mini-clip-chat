import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // width: "100%",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper
  }
}));
export default ({ users }) => {
  const classes = useStyles();

  return (
    <List className={classes.root} dense={false}>
      {users.map(user => {
        return (
          <ListItem key={user}>
            <ListItemText primary={user} />
          </ListItem>
        );
      })}
    </List>
  );
};
