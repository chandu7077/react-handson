import "./styles.css";
import CalculatorScore from "../src/Components/CalculateScore";
function App() {
  return (
    <div>
      <CalculatorScore
        Name={"Chandu"}
        School={"Nava Jyothi High School"}
        Total={576}
        Goal={6}
      />
    </div>
  );
}
export default App;
