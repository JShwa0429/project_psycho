import { createStore } from "redux";

const initState = {
  user: {},     // 현재 푸는 사용자의 정보
  progress: {}, // 현재 풀고 있는 문제
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      return initState;
    case "SAVE_USER":
      return { ...state, user: action.user };
    case "SAVE_PROGRESS":
      return { ...state, state: action.progress };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
