import {
  selectTodos,
  selectCompletedTodos,
  selectIncompleteTodos,
} from "../store/todos/selectors";
import { addTodo, toggleTodo, deleteTodo } from "../store/todos/actions";
import { createStore } from "../store";

describe("todos reducer", () => {
  let store = createStore();

  beforeEach(() => {
    store = createStore();
  });

  it("should handle initial state", () => {
    expect(selectTodos(store.getState())).toEqual([]);
  });

  it("should add a todo", () => {
    store.dispatch(addTodo("Todo"));
    expect(selectTodos(store.getState())).toEqual([
      { id: 1, content: "Todo", completed: false },
    ]);
  });

  it("should toggle a todo", () => {
    store.dispatch(addTodo("Todo"));
    store.dispatch(toggleTodo(1));
    expect(selectCompletedTodos(store.getState())).toEqual([
      { id: 1, content: "Todo", completed: true },
    ]);
    expect(selectIncompleteTodos(store.getState())).toEqual([]);
  });

  it("should delete a todo", () => {
    store.dispatch(addTodo("Todo"));
    store.dispatch(deleteTodo(1));
    expect(selectTodos(store.getState())).toEqual([]);
  });
});
