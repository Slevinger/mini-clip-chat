import createDataContext from "./createDataContext";

import messagesReducer, { initialState } from "../reducers/messagesReducer";
import Actions from "../const/actions";
import {
  socket,
  signUpForRoomChanges as socketSignUp
} from "../services/socket";

const signUpForRoomChanges = dispatch => async username =>
  await socketSignUp(dispatch, username);

const joinRoom = dispatch => async (username, imageUrl) => {
  await dispatch({
    type: Actions.SET_LOADING,
    payload: { loading: true }
  });

  socket.emit("joinRoom", { username, imageUrl }, (room, error) => {

    if (error) {
      dispatch({ type: Actions.SET_ERROR, payload: { error } });
    } else {
      dispatch({ type: Actions.USER_JOIN, payload: { room, username } });
    }
  });
};

const sendMessage = dispatch => (username, messageText) => {
  socket.emit(
    "sendMessage",
    { username, message: messageText },
    (message, error) => {

      if (error) {
        dispatch({ type: Actions.SET_ERROR, payload: { error } });
      } else {
        dispatch({ type: Actions.ADD_MESSAGE, payload: { message } });
      }
    }
  );
};

const setProfileImage = dispatch => async file => {
  try {
    if (file.size > 4000000) {
      dispatch({
        type: Actions.SET_ERROR,
        payload: { error: "File Too Big" }
      });
    } else {
      await dispatch({
        type: Actions.SET_LOADING,
        payload: { loading: true }
      });

      var reader = new FileReader();
      reader.onload = async event => {
        const imageUrl = event.target.result;

        dispatch({ type: Actions.SET_PROFILE_IMAGE, payload: { imageUrl } });
      };

      reader.readAsDataURL(file);
    }
  } catch (e) {
    dispatch({
      type: Actions.SET_ERROR,
      payload: { error: "File Format Not Supported" }
    });
  }
};

export const { Provider, Context } = createDataContext(
  messagesReducer,
  {
    signUpForRoomChanges,
    joinRoom,
    sendMessage,
    setProfileImage
  },
  initialState
);
