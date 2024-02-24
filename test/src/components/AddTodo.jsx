import { useDispatch } from "react-redux";
import { addToDo } from "../redux/slice/TodoSlice";
import { useState } from "react";
function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(value));
    setValue("");
  };
  return (
    <form onSubmit={handleFormSubmit} className="space-x-3 mt-12 text-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
