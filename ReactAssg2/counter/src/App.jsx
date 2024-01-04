import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    if (count >= 20) {
      alert("The Count Cannot be increased by 20");
      return;
    }
    setCount(count + 1);
  }
  function decreaseCount() {
    if (count <= 0) {
      alert("The Count Cannot be decreased by 0");
      return;
    }
    setCount(count - 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button
        className="px-4 py-3 bg-white text-black mx-4"
        onClick={increaseCount}>
        Increment
      </button>
      <button
        className="px-4 py-3 bg-white text-black  "
        onClick={decreaseCount}>
        Decrement
      </button>
    </>
  );
}

export default App;
