import { FILTER } from "../models/todo";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompletedTodos,
  changeFilter,
} from "../store/todos/actions";

describe("todos actions", () => {
  it("should create an addTodo action", () => {
    const action = addTodo("new todo");
    expect(action).toEqual({ type: "todos/addTodo", payload: "new todo" });
  });

  it("should create a toggleTodo action", () => {
    const action = toggleTodo(1);
    expect(action).toEqual({ type: "todos/toggleTodo", payload: 1 });
  });

  it("should create a deleteTodo action", () => {
    const action = deleteTodo(1);
    expect(action).toEqual({ type: "todos/deleteTodo", payload: 1 });
  });

  it("should create a clearCompletedTodos action", () => {
    const action = clearCompletedTodos();
    expect(action).toEqual({ type: "todos/clearCompletedTodos" });
  });

  it("should create a changeFilter action", () => {
    const action = changeFilter(FILTER.Active);
    expect(action).toEqual({
      type: "todos/changeFilter",
      payload: FILTER.Active,
    });
  });
});
