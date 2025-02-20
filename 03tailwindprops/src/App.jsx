// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-400 text-black p-4 rounded transform hover:scale-110 duration-300 ease-in ease-out cursor-pointer shadow-2xl shadow-black ">
        VITE and TAILWIND
      </h1>
      <Card />
    </>
  );
}

export default App;
