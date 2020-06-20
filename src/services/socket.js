import openSocket from "socket.io-client";
import Actions from "../const/actions";
import { url } from "../const/config";

export const socket = openSocket(url);
socket.connect();

export const signUpForRoomChanges = (dispatch, currentUserName) => {
  socket.on("message", message => {
    dispatch({ type: Actions.ADD_MESSAGE, payload: { message } });
  });
  socket.on("joinedRoom", user => {
    dispatch({ type: Actions.USER_JOINED, payload: { user } });
  });
  socket.on("leftRoom", user => {
    if (currentUserName === user.username) {
      dispatch({ type: Actions.RESET, payload: {} });
    } else {
      dispatch({ type: Actions.USER_LEFT, payload: { user } });
    }
  });

  dispatch({ type: Actions.SIGN_TO_ROOM, payload: {} });

  socket.on("error", error => {
    console.log(error);
  });
};
