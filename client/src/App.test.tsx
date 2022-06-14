import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./app/store";
import { App } from "./App";

test("renders learn react link", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByText(/Recepea/i)).toBeInTheDocument();
  });
});
