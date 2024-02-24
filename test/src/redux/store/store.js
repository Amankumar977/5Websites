import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slice/TodoSlice";
const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
export default store;
