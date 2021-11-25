import { createStore } from "redux";

const initState = {
  user: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_USER":
      return initState;
    case "SAVE_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
