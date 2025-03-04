import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Adjust path if needed

test("adds a new todo", () => {
  // Render the component
  render(<TodoList />);

  // Get input field and add button
  const input = screen.getByPlaceholderText("Add a new todo...");
  const addButton = screen.getByText("Add");

  // Simulate typing a new todo
  fireEvent.change(input, { target: { value: "New Todo" } });

  // Simulate clicking the add button
  fireEvent.click(addButton);

  // Check if the new todo appears in the list
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo completion status", () => {
  // Render the component
  render(<TodoList />);

  // Get the todo item (assuming "Learn React" exists initially)
  const todoItem = screen.getByText("Learn React");

  // Simulate clicking the todo item to toggle its completion
  fireEvent.click(todoItem);

  // Check if the todo item has the completed style (e.g., line-through)
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  // Click again to toggle it back to not completed
  fireEvent.click(todoItem);

  // Check if the todo item is no longer marked as completed
  expect(todoItem).toHaveStyle("text-decoration: none");
});

test("deletes a todo item", () => {
  // Render the component
  render(<TodoList />);

  // Get the todo item (assuming "Learn React" exists initially)
  const todoItem = screen.getByText("Learn React");

  // Get the delete button for this item
  const deleteButton = todoItem.closest("li").querySelector("button");

  // Click the delete button
  fireEvent.click(deleteButton);

  // Verify that the todo item is removed from the DOM
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});