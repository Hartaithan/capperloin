import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TodosState } from "../../models/todo";

export const initialTodos: TodosState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload.trim().length === 0) return state;
      const length = state.list.length;
      const id = length > 0 ? state.list[length - 1].id + 1 : 1;
      state.list.push({ id, content: action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    clearCompletedTodos: (state) => {
      state.list = state.list.filter((todo) => todo.completed === false);
    },
  },
});

export default todoSlice.reducer;
