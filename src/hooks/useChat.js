import { useState, useReducer, useEffect, useCallback } from "react";
import Actions from "../const/actions";
import { socket, signUpForRoomChanges } from "../services/socket";
import { initialState, messagesReducer } from "../reducers/messagesReducer";

export default () => {
  const [state, dispatch] = useReducer(messagesReducer, { ...initialState });
  const [signedIn, setSignedIn] = useState(false);
  const { username } = state;
  useEffect(() => {
    if (username && !signedIn) {
      signUpForRoomChanges(dispatch, username);
      setSignedIn(true);
    }
  }, [username, signedIn]);

  const joinRoom = useCallback(async (username, imageUrl) => {
    socket.emit("joinRoom", { username, imageUrl }, (room, error) => {
      debugger;
      if (error) {
        dispatch({ type: Actions.SET_ERROR, payload: { error } });
      } else {
        dispatch({ type: Actions.USER_JOIN, payload: { room, username } });
        setSignedIn(true);
      }
    });
  }, []);

  const sendMessage = useCallback(
    messageText => {
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
    },
    [username]
  );

  const setProfileImage = file => {
    dispatch({ type: Actions.SET_IMAGE, payload: { image: file } });
    var reader = new FileReader();
    reader.onload = async event => {
      const imageUrl = event.target.result;

      dispatch({ type: Actions.SET_PROFILE_IMAGE, payload: { imageUrl } });
    };
    reader.readAsDataURL(file);
  };

  const actions = {
    sendMessage,
    joinRoom,
    setProfileImage
  };

  return {
    state,
    ...actions
  };
};
