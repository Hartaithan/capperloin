import "@testing-library/jest-dom";
import TodosList from "../components/TodosList";
import { renderWithStore } from "../utils/tests";
import { createStore } from "../store";
import { addTodo } from "../store/todos/actions";
import { act } from "@testing-library/react";

describe("TodosList", () => {
  it("should render empty message when list is empty", () => {
    const { getByTestId } = renderWithStore(<TodosList />);

    const empty = getByTestId("todo-empty");
    expect(empty).toBeInTheDocument();
  });

  it("renders list of todos", () => {
    const store = createStore();
    const { getByText, getAllByTestId } = renderWithStore(<TodosList />, store);

    act(() => {
      store.dispatch(addTodo("Todo 1"));
      store.dispatch(addTodo("Todo 2"));
    });

    const items = getAllByTestId("todo-item");

    expect(items.length).toEqual(2);
    expect(getByText("Todo 1")).toBeInTheDocument();
    expect(getByText("Todo 2")).toBeInTheDocument();
  });
});
