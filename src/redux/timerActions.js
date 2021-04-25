const increment = (value) => {
  return {
    type: "INCREMENT",
    payload: {
      value,
    },
  };
};
const decrement = (value) => {
  return {
    type: "DECREMENT",
    payload: {
      value,
    },
  };
};

const changeStep = (step) => {
  return {
    type: "CHANGESTEP",
    payload: {
      step: Number(step),
    },
  };
};
export default { increment, decrement, changeStep };
