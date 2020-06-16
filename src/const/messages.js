import Actions from "./actions";

const MESSAGES = username => ({
  [Actions.USER_JOINED]: `${username} joined the room...`,
  [Actions.USER_LEFT]: `${username} left the room...`
});

const message = (username, sent_at, message) => ({
  username,
  sent_at,
  message
});

export default (event, username) => {
  return message("System", new Date(), MESSAGES(username)[event]);
};
