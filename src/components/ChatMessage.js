import React, { useState, useLayoutEffect, useRef } from "react";
import styled, { css } from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

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

export default ({ classes, ...props }) => {
  const { message_id, sent_at, username, message } = props;
  const date = new Date(sent_at);
  debugger;

  return (
    <StyledListItem
      username={username}
      alignItems="flex-start"
      key={message_id}
    >
      <ListItemText
        secondary={
          <>
            <Typography variant="h6" component="span" color="textPrimary">
              {username}
            </Typography>
            {` said  —  `}
            <Typography variant="h6" component="span" color="textPrimary">
              {`"${message}"`}
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
