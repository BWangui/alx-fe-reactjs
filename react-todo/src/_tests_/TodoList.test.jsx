import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList with initial todos", () => {
  render(<TodoList />);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Practice Testing")).toBeInTheDocument();
  expect(screen.getByText("Build Projects")).toBeInTheDocument(); 
});

test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Add a new todo...");
  fireEvent.change(input, { target: { value: "New Todo" } });


  const addButton = screen.getByText("Add"); 
  fireEvent.click(addButton);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  
  fireEvent.click(todoItem);
  expect(todoItem.closest("li")).toHaveStyle("text-decoration: line-through");


  fireEvent.click(todoItem);
  expect(todoItem.closest("li")).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");

  
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
