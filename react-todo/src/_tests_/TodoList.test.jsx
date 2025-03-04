import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  
  test("renders TodoList with initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a React project/i)).toBeInTheDocument();
    expect(screen.getByText(/Master Jest Testing/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("toggles a todo as completed", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    
    expect(todoItem).toHaveStyle("text-decoration: none");
    
    fireEvent.click(todoItem);
    
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/delete/i)[0];
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });

});
