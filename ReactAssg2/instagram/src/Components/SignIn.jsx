import SignUp from "../Components/SignUp.jsx";
import { Route, Routes, Link } from "react-router-dom";

let SignIn = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border border-black rounded-md flex justify-center items-center flex-col p-6">
        <img
          src="https://imgs.search.brave.com/gM3GItHhH_N8-Ir7yhsfl4qKoSj_qTnnCGfgQy7tkX8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9JbnN0YWdy/YW0vSW5zdGFncmFt/LVdvcmRtYXJrLUJs/YWNrLUxvZ28ud2lu/ZS5zdmc.svg"
          alt="Instagram Logo"
          className="w-72 h-32 "
        />
        <form action="#" method="post">
          <input
            type="text"
            className="border border-black w-80 px-4 h-10 rounded-md outline-none font-mono"
            placeholder="Phone or email"
          />
          <br />
          <input
            type="text"
            className="border border-black w-80 px-4 h-10 rounded-md outline-none mt-4 font-mono "
            placeholder="Password"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-400 w-80 px-4 h-10 mt-6 font-mono text-white text-xl rounded-md">
            Sign In
          </button>
        </form>
        <p className="mt-6 font-mono">
          Don't Have an account?{" "}
          <span className="text-blue-400">
            <Link to="/SignUp">SignUp</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/SignUp/*" element={<SignUp />} />
    </Routes>
  );
};

export { SignIn, AppRoutes };
