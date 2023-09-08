import { render } from "@testing-library/react";
import { createStore } from "../store";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

export const renderWithStore = (
  component: ReactNode,
  externalStore?: ToolkitStore,
) => {
  const store: ToolkitStore = externalStore || createStore();
  return render(<Provider store={store}>{component}</Provider>);
};
