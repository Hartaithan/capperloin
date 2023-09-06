import {
  selectTodos,
  selectCompletedTodos,
  selectActiveTodos,
  selectFilter,
  selectFilteredTodos,
  selectTotalCount,
  selectCompletedCount,
  selectActiveCount,
  selectFilteredCount,
} from "../store/todos/selectors";
import { createStore } from "../store";
import { FILTER } from "../models/todo";
import { addTodo, changeFilter, toggleTodo } from "../store/todos/actions";

describe("todos selectors", () => {
  let store = createStore();

  beforeEach(() => {
    store = createStore();
    store.dispatch(addTodo("Todo 1"));
    store.dispatch(addTodo("Todo 2"));
    store.dispatch(toggleTodo(1));
  });

  it("should select the filter", () => {
    expect(selectFilter(store.getState())).toEqual(FILTER.All);
  });

  it("should select all todos", () => {
    expect(selectTodos(store.getState())).toEqual([
      { id: 1, content: "Todo 1", completed: true },
      { id: 2, content: "Todo 2", completed: false },
    ]);
  });

  it("should select active todos", () => {
    expect(selectActiveTodos(store.getState())).toEqual([
      { id: 2, content: "Todo 2", completed: false },
    ]);
  });

  it("should select completed todos", () => {
    expect(selectCompletedTodos(store.getState())).toEqual([
      { id: 1, content: "Todo 1", completed: true },
    ]);
  });

  it("should select the total count of todos", () => {
    expect(selectTotalCount(store.getState())).toEqual(2);
  });

  it("should select the count of completed todos", () => {
    expect(selectCompletedCount(store.getState())).toEqual(1);
  });

  it("should select the count of active todos", () => {
    expect(selectActiveCount(store.getState())).toEqual(1);
  });

  it("should select filtered todos based on the filter", () => {
    expect(selectFilteredTodos(store.getState())).toEqual([
      { id: 1, content: "Todo 1", completed: true },
      { id: 2, content: "Todo 2", completed: false },
    ]);
    store.dispatch(changeFilter(FILTER.Active));
    expect(selectFilteredTodos(store.getState())).toEqual([
      { id: 2, content: "Todo 2", completed: false },
    ]);
    store.dispatch(changeFilter(FILTER.Completed));
    expect(selectFilteredTodos(store.getState())).toEqual([
      { id: 1, content: "Todo 1", completed: true },
    ]);
  });

  it("should select the count of filtered todos based on the filter", () => {
    store.dispatch(addTodo("Todo 3"));
    store.dispatch(addTodo("Todo 4"));
    store.dispatch(addTodo("Todo 5"));
    store.dispatch(toggleTodo(2));
    expect(selectFilteredCount(store.getState())).toEqual(3);
    store.dispatch(changeFilter(FILTER.Active));
    expect(selectFilteredCount(store.getState())).toEqual(3);
    store.dispatch(changeFilter(FILTER.Completed));
    expect(selectFilteredCount(store.getState())).toEqual(2);
  });
});
