import { createStore } from "redux";

const initState = {
  user: {}, // 현재 푸는 사용자의 정보
  answers: {},
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      return initState;
    case "SAVE_USER":
      return { ...state, user: action.user, answers: {} };
    case "SAVE_ANSWERS":
      return { ...state, answers: action.answers };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
