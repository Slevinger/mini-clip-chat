import React from "react";
import styled, { css } from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { display } from "@material-ui/system";

const StyledListItem = styled(ListItem)`
  ${({ username }) => {
    return (
      username === "System" &&
      css`
        background-color: lightgrey;
      `
    );
  }}
`;

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export default ({ classes, user, ...props }) => {
  const { message_id, sent_at, username, message } = props;
  const date = new Date(sent_at);
  debugger;
  return (
    <StyledListItem
      username={username}
      alignItems="flex-start"
      key={message_id}
    >
      <ListItemAvatar>
        <Avatar alt={username} src={user.imageUrl} />
      </ListItemAvatar>
      <ListItemText
        secondary={
          <>
            <Typography variant="h6" component="span" color="textPrimary">
              {username}
            </Typography>
            {` said  —  `}
            <Typography variant="h6" component="span" color="textPrimary">
              <Typography
                stlye={{ display: "table-caption" }}
                variant="h6"
                component="span"
                color="textPrimary"
              >
                {`${message}`}
              </Typography>
            </Typography>
          </>
        }
        primary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {`${timeAgo.format(date)}`}
            </Typography>
          </React.Fragment>
        }
      />
    </StyledListItem>
  );
};
