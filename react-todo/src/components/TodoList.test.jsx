import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders TodoList component with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/practice javascript/i)).toBeInTheDocument();
  expect(screen.getByText(/read about jest/i)).toBeInTheDocument();
});

test("allows users to add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new task/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText(/new task/i)).toBeInTheDocument();
});

test("allows users to delete a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText(/delete/i);
  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});

test("allows users to toggle a todo as completed", () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/learn react/i);
  
  fireEvent.click(todoItem);
  
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});