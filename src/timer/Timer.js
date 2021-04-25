import React from "react";
import { connect } from "react-redux";
import timerActions from "../redux/timerActions";

const Timer = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <>
      <button onClick={() => onIncrement(step)}>+</button>
      <div>{value}</div>
      <button onClick={() => onDecrement(step)}>-</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { value: state.timer.value, step: state.timer.step };
};

const mapDispatchToProps = {
  onIncrement: timerActions.increment,
  onDecrement: timerActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
