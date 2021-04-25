import { connect } from "react-redux";
import timerActions from "../redux/timerActions";

const StepSelector = ({ options, step, onChangeStep }) => {
  return (
    <label>
      Select timer step:
      <select
        value={step}
        onChange={(event) => onChangeStep(event.target.value)}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};

const mapStateToProps = (state) => {
  return { step: state.timer.step };
};

const mapDispatchToProps = {
  onChangeStep: timerActions.changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
