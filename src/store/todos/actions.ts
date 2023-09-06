import { todoSlice } from "./reducer";

export const { addTodo, toggleTodo, deleteTodo, clearCompletedTodos } =
  todoSlice.actions;
