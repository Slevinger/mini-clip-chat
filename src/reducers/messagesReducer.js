import messages from "../const/messages";
import Actions from "../const/actions";

export const initialState = {
  error: "",
  messages: [],
  username: "",
  imageUrl: "",
  users: [],
  loading: false,
  signedIn: false
};

export default (state, { type, payload }) => {
  const { user } = payload;
  switch (type) {
    case Actions.SET_ERROR:
      const { error } = payload;
      return { ...state, error, loading: false };
    case Actions.ADD_MESSAGE:
      const { message } = payload;

      return {
        ...state,
        error: "",
        loading: false,
        messages: [...state.messages, message]
      };
    case Actions.USER_JOIN:
      const { room, username } = payload;
      return {
        ...state,
        ...room,
        loading: true,
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
        loading: false,
        error: ""
      };
      break;
    case Actions.USER_JOINED:
      return {
        ...state,
        error: "",
        loading: false,
        messages: [
          ...state.messages,
          messages(Actions.USER_JOINED, user.username)
        ],
        users: { ...state.users, [user.username]: user }
      };
      break;
    case Actions.SET_PROFILE_IMAGE:
      const { imageUrl } = payload;
      return { ...state, imageUrl, error: "", loading: false };
      break;
    case Actions.SET_LOADING:
      const { loading } = payload;
      return { ...state, loading };
    case Actions.ASSIGN_TO_ROOM:
      return { ...state, signedIn: true };
    case Actions.RESET:
      return { ...initialState };
      break;
    default:
      return state;
  }
};
