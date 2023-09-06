import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../models/store";
import { FILTER } from "../../models/todo";

const selectTodosState = (state: RootState) => state.todos;

export const selectFilter = createSelector(
  selectTodosState,
  (todosState) => todosState.filter,
);

export const selectTodos = createSelector(
  selectTodosState,
  (todosState) => todosState.list,
);

export const selectActiveTodos = createSelector(selectTodos, (todos) =>
  todos.filter((todo) => !todo.completed),
);

export const selectCompletedTodos = createSelector(selectTodos, (todos) =>
  todos.filter((todo) => todo.completed),
);

export const selectTotalCount = createSelector(
  selectTodos,
  (todos) => todos.length,
);

export const selectCompletedCount = createSelector(
  selectCompletedTodos,
  (todos) => todos.length,
);

export const selectActiveCount = createSelector(
  selectActiveTodos,
  (todos) => todos.length,
);

export const selectFilteredTodos = createSelector(
  [selectFilter, selectTodos],
  (filter, todos) => {
    switch (filter) {
      case FILTER.Active:
        return todos.filter((todo) => !todo.completed);
      case FILTER.Completed:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
);

export const selectFilteredCount = createSelector(
  [selectFilter, selectTodos],
  (filter, todos) => {
    switch (filter) {
      case FILTER.Completed:
        return todos.filter((todo) => todo.completed).length;
      default:
        return todos.filter((todo) => !todo.completed).length;
    }
  },
);
