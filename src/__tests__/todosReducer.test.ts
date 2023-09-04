import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/todos/reducer";
import {
  selectTodos,
  selectCompletedTodos,
  selectIncompleteTodos,
} from "../store/todos/selectors";
import { addTodo, toggleTodo, deleteTodo } from "../store/todos/actions";
import type { RootState } from "../models/store";

describe("todoSlice reducer", () => {
  let store = configureStore<RootState>({
    reducer: {
      todos: todoReducer,
    },
  });

  beforeEach(() => {
    store = configureStore<RootState>({
      reducer: {
        todos: todoReducer,
      },
    });
  });

  it("should handle initial state", () => {
    expect(selectTodos(store.getState())).toEqual([]);
  });

  it("should handle addTodo", () => {
    store.dispatch(addTodo({ id: 0, text: "Test todo", completed: false }));
    expect(selectTodos(store.getState())).toEqual([
      { id: 0, text: "Test todo", completed: false },
    ]);
  });

  it("should handle toggleTodo", () => {
    store.dispatch(addTodo({ id: 0, text: "Test todo", completed: false }));
    store.dispatch(toggleTodo(0));
    expect(selectCompletedTodos(store.getState())).toEqual([
      { id: 0, text: "Test todo", completed: true },
    ]);
    expect(selectIncompleteTodos(store.getState())).toEqual([]);
  });

  it("should handle deleteTodo", () => {
    store.dispatch(addTodo({ id: 0, text: "Test todo", completed: false }));
    store.dispatch(deleteTodo(0));
    expect(selectTodos(store.getState())).toEqual([]);
  });
});
