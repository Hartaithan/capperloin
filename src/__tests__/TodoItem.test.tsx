import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import type { Todo } from "../models/todo";
import { toggleTodo } from "../store/todos/actions";
import { useDispatch } from "../hooks/useStore";
import TodoItem from "../components/TodoItem";
import { renderWithStore } from "../utils/tests";

jest.mock("../hooks/useStore");

describe("TodoItem", () => {
  const todo: Todo = {
    id: 1,
    content: "Test todo",
    completed: false,
  };

  it("renders the todo content", () => {
    const { getByText } = renderWithStore(<TodoItem todo={todo} />);
    expect(getByText(todo.content)).toBeInTheDocument();
  });

  it("toggles the todo when the checkbox is clicked", () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);

    const { getByRole } = renderWithStore(<TodoItem todo={todo} />);
    fireEvent.click(getByRole("checkbox"));

    expect(dispatch).toHaveBeenCalledWith(toggleTodo(todo.id));
  });
});
