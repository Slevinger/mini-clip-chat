import React, { useContext, useEffect, useRef, useState } from "react";
import { Context as ChatContext } from "../context/MessagesContext";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChatMessageBoard from "../components/ChatMessageBoard";
import ChatMessageEditor from "../components/ChatMessageEditor";
import UsersList from "../components/ChatListOfUsers";
import Touchable from "../components/Touchable";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    paddingTop: "40px",
    flexDirection: "row",
    display: "flex",
    overflow: "none"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  toolbarHeader: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

export default () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    state: { users, signedIn, username },
    signUpForRoomChanges
  } = useContext(ChatContext);
  const touchableRef = useRef();

  useEffect(() => {
    if (!signedIn && username) {
      signUpForRoomChanges(username);
    }
  }, [username]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.toolbarHeader}>Logged In Users</div>
      </div>
      <Divider />
      <UsersList />
    </div>
  );
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Touchable
      ref={touchableRef}
      swipeRight={handleDrawerToggle}
      className={classes.root}
    >
      <CssBaseline />
      <div className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={"left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            anchor={"left"}
            variant="permanent"
            open
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
      <div className={classes.content}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.appBar}>
            <Typography variant="h6" noWrap>
              Any-Clip Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <ChatMessageBoard />
        <ChatMessageEditor />
      </div>
    </Touchable>
  );
};
