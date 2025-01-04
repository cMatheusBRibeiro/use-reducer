import {
  COUNT_REDUCER_DECREMENT,
  COUNT_REDUCER_INCREMENT,
  COUNT_REDUCER_RESET,
} from "./actions-type";

const countReducer = (state, action) => {
  switch (action.type) {
    case COUNT_REDUCER_INCREMENT:
      return state + 1;
    case COUNT_REDUCER_DECREMENT:
      return state - 1;
    case COUNT_REDUCER_RESET:
      return 0;
  }
  throw Error("Count Reducer: Invalid action type!");
};

export default countReducer;
