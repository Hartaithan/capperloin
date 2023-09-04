import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/reducer";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
