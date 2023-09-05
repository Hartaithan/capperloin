import { createSlice } from "@reduxjs/toolkit";
import type { TodosState } from "../../models/todo";

const initialState: TodosState = {
  list: [
    { id: 1, content: "Тестовое задание", completed: false },
    { id: 2, content: "Прекрасный код", completed: true },
    { id: 3, content: "Покрытие тестами", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
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
