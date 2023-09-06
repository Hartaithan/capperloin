import "@testing-library/jest-dom";
import App from "../App";
import { renderWithStore } from "../utils/tests";

describe("App", () => {
  test("renders without errors", () => {
    expect(() => {
      renderWithStore(<App />);
    }).not.toThrow();
  });
});
