import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

test("toggles todo completion", () => {
  render(<TodoList />);


  const todoItem = screen.getByText("Learn React");

  expect(todoItem).toHaveStyle("text-decoration: none");

  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: line-through");
  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: none");
});
