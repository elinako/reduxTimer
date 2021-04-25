import { combineReducers } from "redux";

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return state + payload.value;
    case "DECREMENT":
      return state - payload.value;

    default:
      return state;
  }
};

const stepReducer = (state = 5, { type, payload }) => {
  switch (type) {
    case "CHANGESTEP":
      return payload.step;

    default:
      return state;
  }
};
export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
