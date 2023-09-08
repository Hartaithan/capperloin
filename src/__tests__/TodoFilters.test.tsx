import "@testing-library/jest-dom";
import { renderWithStore } from "../utils/tests";
import TodosFilters from "../components/TodosFilters";
import { createStore } from "../store";
import { fireEvent } from "@testing-library/react";
import { FILTER } from "../models/todo";

describe("TodoFilters", () => {
  it("should renders with initial state", () => {
    const { getByTestId } = renderWithStore(<TodosFilters />);

    expect(getByTestId("todo-filters")).toBeInTheDocument();
    expect(getByTestId("todo-filter-counter")).toBeInTheDocument();
  });

  it("should handle filter change", () => {
    const store = createStore();
    const { getByTestId } = renderWithStore(<TodosFilters />, store);

    fireEvent.click(getByTestId("todo-filter-active"));
    expect(store.getState().todos.filter).toEqual(FILTER.Active);

    fireEvent.click(getByTestId("todo-filter-completed"));
    expect(store.getState().todos.filter).toEqual(FILTER.Completed);
  });
});
