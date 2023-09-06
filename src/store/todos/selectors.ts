import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../models/store";

const selectTodosState = (state: RootState) => state.todos;

export const selectTodos = createSelector(
  selectTodosState,
  (todosState) => todosState.list,
);

export const selectCompletedTodos = createSelector(selectTodos, (todos) =>
  todos.filter((todo) => todo.completed),
);

export const selectIncompleteTodos = createSelector(selectTodos, (todos) =>
  todos.filter((todo) => !todo.completed),
);

export const selectTotalCount = createSelector(
  selectTodos,
  (todos) => todos.length,
);

export const selectCompletedCount = createSelector(
  selectCompletedTodos,
  (todos) => todos.length,
);

export const selectIncompleteCount = createSelector(
  selectIncompleteTodos,
  (todos) => todos.length,
);
