import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todo";

function App() {
  return (
    <div className="font-mono text-2xl">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
