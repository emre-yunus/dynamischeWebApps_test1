import './App.css';
import {CARS_DATA} from "./data/data";
import {Cars} from "./components/Cars";

function App() {
  return (
      <>
        <Cars title="Auto's" cars={CARS_DATA} />
      </>
  );
}

export default App;
