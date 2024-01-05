import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [incNum, setIncNum] = useState(false);
  const [incChar, setIncChar] = useState(false);
  const [incLowerCase, setIncLowerCase] = useState(false);
  const [password, setPassword] = useState("");
  let passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTYUVWXYZ";
    if (incNum) {
      str += "0123456789";
    }
    if (incChar) {
      str += "!@#$%&*()~`_-^";
    }
    if (incLowerCase) {
      str += "abcdefghijklmnopqrstyuvwxyz";
    }
    for (let i = 0; i < length; i++) {
      let lengthOfStr = str.length;
      let value = Math.floor(Math.random() * lengthOfStr);
      password += str[value];
    }
    setPassword(password);
  }, [length, incNum, incChar, setPassword]);
  let copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [incChar, incChar, length, incLowerCase, incLowerCase, passwordGenerator]);
  return (
    <div className="font-mono text-center flex justify-center items-center flex-col">
      <h1 className="text-5xl text-center text-white mt-10">
        Password Generator
      </h1>
      <div className="border border-white w-[45%] p-6 mt-6 rounded-md">
        <div>
          <input
            type="text"
            className="w-[70%] h-12 rounded-md outline-none text-2xl px-3"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="bg-[#df90de] h-12 rounded-md px-3 ml-2 text-white">
            Copy to clipboard
          </button>
        </div>
        <div>
          <label htmlFor="length" className="px-4 text-2xl text-white">
            Length: {length}
          </label>
          <input
            name="length"
            type="range"
            min={8}
            max={100}
            className="w-[70%] mt-4 cursor-pointer"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="number" className="px-4 text-2xl text-white">
            Include Numbers in password:
          </label>
          <input
            type="checkbox"
            name="number"
            id="number"
            defaultChecked={incChar}
            className="ml-48 mt-4"
            onClick={() => {
              setIncNum((prev) => !prev);
            }}
          />
          <label htmlFor="number" className="px-4 text-2xl text-white">
            Include Character in password:
          </label>
          <input
            type="checkbox"
            name="number"
            defaultChecked={incNum}
            id="number"
            className="ml-[10.4rem] mt-4"
            onClick={() => {
              setIncChar((prev) => !prev);
            }}
          />
          <label htmlFor="lowerCase" className="px-4 text-2xl text-white">
            Include Lower Case Letters in password:
          </label>
          <input
            type="checkbox"
            name="lowerCase"
            defaultChecked={incLowerCase}
            id="lowerCase"
            className="ml-[3rem] mt-4"
            onClick={() => {
              setIncLowerCase((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
