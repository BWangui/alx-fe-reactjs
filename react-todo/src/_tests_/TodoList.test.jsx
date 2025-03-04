import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

test("adds a new todo", () => {
  render(<TodoList />);

  
  const inputField = screen.getByPlaceholderText("Add a new todo...");
  const addButton = screen.getByText("Add");

  
  fireEvent.change(inputField, { target: { value: "New Todo" } });


  fireEvent.click(addButton);


  expect(screen.getByText("New Todo")).toBeInTheDocument();
});
