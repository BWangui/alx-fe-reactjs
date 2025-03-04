import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList"; 

test("renders TodoList with initial todos", () => {
  render(<TodoList />);

  
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();

  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a React project/i)).toBeInTheDocument();
  expect(screen.getByText(/Master Jest Testing/i)).toBeInTheDocument();
});
