import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { createStore } from "../store";

describe("App", () => {
  const store = createStore();
  test("renders without errors", () => {
    expect(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    }).not.toThrow();
  });
});
