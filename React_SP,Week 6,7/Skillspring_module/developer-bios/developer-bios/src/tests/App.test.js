import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders home component on landing", () => {
  render(
    <App />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
