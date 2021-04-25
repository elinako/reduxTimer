import Timer from "./timer/Timer";
import StepSelector from "./timer/StepSelector";

const stepOptions = [5, 10, 20, 25, 30];

function App() {
  return (
    <div className="App">
      <Timer />
      <StepSelector options={stepOptions} />
    </div>
  );
}

export default App;
