import React from "react";
import PropTypes from "prop-types";
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
import styled from "styled-components";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    paddingTop: "40px",

    flexDirectoion: "row",
    display: "flex",
    // width: "100%",
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

      // flex: 1
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  toolbarHeader: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  content: {
    // width: "100vw",
    // height: "90%",
    width: `calc(100% - ${drawerWidth}px)`,

    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

export default ({ state, sendMessage, ...props }) => {
  const { users, messages } = state;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.toolbarHeader}>Logged In Users</div>
      </div>
      <Divider />
      <UsersList users={users} />
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
      <div className={classes.content}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.appBar}>
            <Typography variant="h6" noWrap>
              Mini-Clip Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <ChatMessageBoard messages={messages} />
        <ChatMessageEditor sendMessage={sendMessage} />
      </div>
    </div>
  );
};
