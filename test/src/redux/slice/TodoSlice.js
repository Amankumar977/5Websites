import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      const userId = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== userId);
      state.todos = filteredTodos;
    },
    updateTodo: (state, action) => {
      const userid = action.payload.id;
      const filetredTodo = state.todos.find((todo) => {
        todo.id === userid;
      });
      filetredTodo.text = action.payload.text;
    },
  },
});
export const { addToDo, removeToDo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
