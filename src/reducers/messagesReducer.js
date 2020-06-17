import messages from "../const/messages";
import Actions from "../const/actions";

export const initialState = {
  error: "",
  messages: [],
  username: "",
  imageUrl: "",
  users: []
};

export const messagesReducer = (state, { type, payload }) => {
  const { user } = payload;
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
      const { room, username } = payload;
      return {
        ...state,
        ...room,
        username,
        error: ""
      };
      break;
    case Actions.USER_LEFT:
      return {
        ...state,
        users: { ...state.users, [user.username]: null },
        messages: [
          ...state.messages,
          messages(Actions.USER_LEFT, user.username)
        ],
        error: ""
      };
      break;
    case Actions.USER_JOINED:
      debugger;
      return {
        ...state,
        error: "",
        messages: [
          ...state.messages,
          messages(Actions.USER_JOINED, user.username)
        ],
        users: { ...state.users, [user.username]: user }
      };
      break;
    case Actions.SET_PROFILE_IMAGE:
      const { imageUrl } = payload;
      return { ...state, imageUrl };
      break;

    case Actions.RESET:
      return { ...initialState };
      break;
    default:
      return state;
  }
};
