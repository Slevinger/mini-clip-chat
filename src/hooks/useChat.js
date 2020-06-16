import { useState, useReducer, useEffect, useCallback } from "react";
import Actions from "../const/actions";
import { socket } from "../services/socket";
import messages from "../const/messages";

const initialState = {
  error: "",
  messages: [],
  username: "",
  users: []
};

const reducer = (state, { type, payload }) => {
  const { username } = payload;
  switch (type) {
    case Actions.SET_ERROR:
      const { error } = payload;
      return { ...state, error };
    case Actions.ADD_MESSAGE:
      const { message } = payload;
      // debugger;
      return {
        ...state,
        error: "",
        messages: [...state.messages, message]
      };
    case Actions.USER_JOIN:
      const { room } = payload;
      return {
        ...state,
        ...room,
        username,
        error: ""
      };
      break;
    case Actions.USER_LEFT:
      debugger;
      return {
        ...state,
        users: state.users.filter(user => user !== username),
        messages: [...state.messages, messages(Actions.USER_LEFT, username)],
        error: ""
      };
      break;
    case Actions.USER_JOINED:
      return {
        ...state,
        error: "",
        messages: [...state.messages, messages(Actions.USER_JOINED, username)],
        users: [...state.users, username]
      };
      break;
    case Actions.RESET:
      return initialState;
      break;
    default:
      return state;
  }
};
const signUpForRoomChanges = (dispatch, currentUserName) => {
  socket.on("message", message => {
    // debugger;
    dispatch({ type: Actions.ADD_MESSAGE, payload: { message } });
  });
  socket.on("joinedRoom", ({ username }) => {
    // debugger;
    dispatch({ type: Actions.USER_JOINED, payload: { username } });
  });
  socket.on("leftRoom", ({ username }) => {
    debugger;
    if (currentUserName === username) {
      dispatch({ type: Actions.RESET });
    } else {
      dispatch({ type: Actions.USER_LEFT, payload: { username } });
    }
  });
  socket.on("error", error => {
    console.log(error);
  });
};

export default () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  const [signedIn, setSignedIn] = useState(false);
  const { username } = state;
  useEffect(() => {
    if (username && !signedIn) {
      signUpForRoomChanges(dispatch);
      setSignedIn(true);
    }
  }, [username, signedIn]);

  const joinRoom = username => {
    socket.emit("joinRoom", { username }, (room, error) => {
      debugger;
      if (error) {
        dispatch({ type: Actions.SET_ERROR, payload: { error } });
      } else {
        dispatch({ type: Actions.USER_JOIN, payload: { room, username } });
        setSignedIn(true);
      }
    });
  };

  const sendMessage = messageText => {
    socket.emit(
      "sendMessage",
      { username, message: messageText },
      (message, err) => {
        if (err) {
          return console.log(err);
        }
        dispatch({ type: Actions.ADD_MESSAGE, payload: { message } });
      }
    );
  };

  const actions = {
    sendMessage,
    joinRoom
  };

  return {
    state,
    ...actions
  };
};
