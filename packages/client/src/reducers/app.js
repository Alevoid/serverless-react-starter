const initialState = { message: null };

const app = (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGE":
      return action.message;
    default:
      return state;
  }
};

export default app;
