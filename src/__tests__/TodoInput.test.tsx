import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import TodoInput from "../components/TodoInput";
import { createStore } from "../store";
import { renderWithStore } from "../utils/tests";

describe("TodoInput", () => {
  it("should render input and form", () => {
    const { getByTestId } = renderWithStore(<TodoInput />);

    const input = getByTestId("todo-input");
    expect(input).toBeInTheDocument();

    const form = getByTestId("todo-form");
    expect(form).toBeInTheDocument();
  });
  it("should add a todo when the form is submitted", () => {
    const store = createStore();
    const { getByTestId } = renderWithStore(<TodoInput />, store);

    const input = getByTestId("todo-input");
    fireEvent.change(input, {
      target: { value: "Test todo" },
    });

    const form = getByTestId("todo-form");
    fireEvent.submit(form);

    expect(store.getState().todos.list).toEqual([
      { id: 1, content: "Test todo", completed: false },
    ]);
  });
});
