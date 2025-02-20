import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("#1a1a1a");

  return (
    <>
      <div
        className="w-full duration-500 h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white w-1/3 h-1/9 rounded-3xl flex justify-between items-center p-2">
          <button
            className="w-[20%] h-[80%] bg-sky-500 rounded-full font-bold m-1 shadow-xl shadow-black"
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className="w-[20%] h-[80%] bg-red-500 rounded-full font-bold m-1 shadow-xl shadow-black"
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className="w-[20%] h-[80%] bg-yellow-500 rounded-full font-bold m-1 shadow-xl shadow-black"
            onClick={() => setcolor("yellow")}
          >
            Yellow
          </button>
          <button
            className="w-[20%] h-[80%] bg-orange-500 rounded-full font-bold m-1 shadow-xl shadow-black"
            onClick={() => setcolor("orange")}
          >
            Orange
          </button>
          <button
            className="w-[20%] h-[80%] bg-violet-500 rounded-full font-bold m-1 shadow-xl shadow-black"
            onClick={() => setcolor("violet")}
          >
            Violet
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
