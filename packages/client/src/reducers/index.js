import { GET_MESSAGE } from "./types";

const initialState = { message: null };

const app = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default app;
