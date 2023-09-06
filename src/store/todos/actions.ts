import { todoSlice } from "./reducer";

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompletedTodos,
  changeFilter,
} = todoSlice.actions;
