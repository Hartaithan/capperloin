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

  it("should not add empty todo", () => {
    store.dispatch(addTodo(""));
    expect(selectTodos(store.getState())).toEqual([]);
  });

  it("should generate right ids - last item", () => {
    store.dispatch(addTodo("Todo 1"));
    store.dispatch(addTodo("Todo 2"));
    store.dispatch(deleteTodo(2));
    store.dispatch(addTodo("Todo 3"));
    const todos = selectTodos(store.getState());
    const lastIndex = todos.length - 1;
    expect(todos[lastIndex].id).toEqual(2);
    expect(todos[lastIndex].content).toEqual("Todo 3");
  });

  it("should generate right ids - middle item", () => {
    store.dispatch(addTodo("Todo 1"));
    store.dispatch(addTodo("Todo 2"));
    store.dispatch(addTodo("Todo 3"));
    store.dispatch(deleteTodo(2));
    store.dispatch(addTodo("Todo 4"));
    const todos = selectTodos(store.getState());
    const lastIndex = todos.length - 1;
    expect(todos[lastIndex].id).toEqual(4);
    expect(todos[lastIndex].content).toEqual("Todo 4");
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
