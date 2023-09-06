import { render } from "@testing-library/react";
import { createStore } from "../store";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

export const renderWithStore = (component: ReactNode) => {
  const store = createStore();
  return render(<Provider store={store}>{component}</Provider>);
};
