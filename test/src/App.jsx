import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="font-mono text-2xl">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
