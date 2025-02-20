import { useState, useCallback, useEffect, useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(null);
  const copytoclipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <>
      <div className="w-full h-screen bg-[#1a1a1a] flex justify-center items-center">
        <div className="w-[70%] h-[30%] bg-gray-900 rounded-2xl  flex-col justify-center p-2">
          <h1 className="text-3xl font-bold text-white text-center">
            Password Generator
          </h1>
          <div className="flex justify-center items-center mt-3">
            <input
              type="text"
              placeholder="Password"
              value={password}
              ref={passwordRef}
              className="w-[80%] bg-white rounded-2xl p-2 m-1 font-bold text-black outline-none"
            />
            <button
              className="bg-sky-500 rounded-2xl p-2 m-1 font-bold"
              onClick={copytoclipboard}
            >
              Copy
            </button>
          </div>
          <div className=" mt-3 flex items-center gap-x-1 w-[90%] justify-around">
            <div>
              <input
                type="range"
                value={length}
                min={6}
                max={20}
                className="m-1"
                onChange={(e) => setlength(e.target.value)}
              />
              <label htmlFor="length" className="text-white">
                Length:{length}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="number" className="text-white">
                Number
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="character" className="text-white">
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
