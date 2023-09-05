import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/reducer";

export const createStore = () =>
  configureStore({
    reducer: {
      todos: todosReducer,
    },
  });

export const store = createStore();
