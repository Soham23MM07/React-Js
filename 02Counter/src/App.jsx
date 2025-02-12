import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;

  const [counter, setcounter] = useState(15);

  const addvalue = () => {
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
  };

  const removevalue = () => {
    setcounter(counter - 1);
  };
  return (
    <>
      <h1>React Course with Hitesh{counter}</h1>
      <h1>Counter:{counter}</h1>
      <button onClick={addvalue}>Add Value</button>

      <button onClick={removevalue}>Remove Value</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;
