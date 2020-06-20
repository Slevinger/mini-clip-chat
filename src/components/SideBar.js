import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import UsersList from "./ChatListOfUsers";

const SideBarContent = ({ classes }) => (
  <div>
    <div className={classes.toolbar}>
      <div className={classes.toolbarHeader}>Logged In Users</div>
    </div>
    <Divider />
    <UsersList />
  </div>
);

const RegularSideBar = ({ classes }) => {
  return (
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
        <SideBarContent classes={classes} />
      </Drawer>
    </Hidden>
  );
};

const MobileSideBar = ({ classes, mobileOpen, handleDrawerToggle }) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
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
        <SideBarContent classes={classes} />
      </Drawer>
    </Hidden>
  );
};

export default props => {
  return (
    <div className={props.classes.drawer}>
      <MobileSideBar {...props} />
      <RegularSideBar {...props} />
    </div>
  );
};
