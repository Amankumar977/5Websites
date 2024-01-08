import { createContext, useContext } from "react";
export const ToDOContext = createContext({
  todos: [
    {
      id: 1,
      todo: "ToDo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const useToDo = () => {
  return useContext(ToDOContext);
};
export const ToDoProvider = ToDOContext.Provider;
