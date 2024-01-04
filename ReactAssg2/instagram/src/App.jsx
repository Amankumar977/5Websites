// App.js
import React, { useState } from "react";
import "./App.css";
function App() {
  const [login, setLogin] = useState(true);
  let switchPage = () => {
    setLogin(!login);
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border border-black rounded-md flex justify-center items-center flex-col p-6">
        <img
          src="https://imgs.search.brave.com/gM3GItHhH_N8-Ir7yhsfl4qKoSj_qTnnCGfgQy7tkX8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9JbnN0YWdy/YW0vSW5zdGFncmFt/LVdvcmRtYXJrLUJs/YWNrLUxvZ28ud2lu/ZS5zdmc.svg"
          alt="Insta Logo"
          className="w-72 h-32 "
        />
        <input
          type="text"
          name=""
          className="border border-black w-80 px-4 h-10 rounded-md outline-none font-mono mt-4"
          placeholder="Mobile Number or Email"
        />
        <input
          hidden={login}
          type="text"
          name=""
          placeholder="Full Name"
          className="border border-black w-80 px-4 h-10 rounded-md outline-none font-mono mt-4"
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          className="border border-black w-80 px-4 h-10 rounded-md outline-none font-mono mt-4"
        />
        <input
          hidden={login}
          type="password"
          name=""
          placeholder="Confirm Password"
          className="border border-black w-80 px-4 h-10 rounded-md outline-none font-mono mt-4"
        />
        <button className="bg-blue-400 w-80 px-4 h-10 mt-6 font-mono text-white text-xl rounded-md mt-4">
          {login ? "SingIn" : "SingUp"}
        </button>
        <div className="mt-6 font-mono">
          {login ? "Don't Have account? " : "Have an Account? "}
          <span className="text-blue-400" onClick={switchPage}>
            {login ? "SingUp" : "LogIn"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
