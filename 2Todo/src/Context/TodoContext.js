import { useContext, createContext } from "react";
export let TodoContext = createContext({
  todos: [
    {
      id: 1,
      msg: "First Todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export let useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
