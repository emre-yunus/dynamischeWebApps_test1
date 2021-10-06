import './App.css';
import {CARS_DATA} from "./data/data";
import {Cars} from "./components/Cars";
import {ITEMS} from "./data/data";
import {List} from "./components/List";
import {Brands} from "./components/Brand";

function App() {
  return (
      <>
        <Cars title="Auto's" cars={CARS_DATA} />
        <List title="Een test lijst" items={ITEMS} />
        <Brands title="Merken" cars={CARS_DATA} />
      </>
  );
}

export default App;
