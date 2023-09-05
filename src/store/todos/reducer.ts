import { createSlice } from "@reduxjs/toolkit";
import type { TodosState } from "../../models/todo";

export const initialTodos: TodosState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      const length = state.list.length;
      const id = length > 0 ? state.list[length - 1].id + 1 : 1;
      state.list.push({ id, content: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
