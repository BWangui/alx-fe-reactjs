import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList"; 

test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add a new task/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "New Todo Item" } });

 
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();

  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a React project/i)).toBeInTheDocument();
  expect(screen.getByText(/Master Jest Testing/i)).toBeInTheDocument();
});
