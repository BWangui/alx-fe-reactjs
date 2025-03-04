import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

test("deletes a todo", () => {
  render(<TodoList />);

  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling; 

  
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
