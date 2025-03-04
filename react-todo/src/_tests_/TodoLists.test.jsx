import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";  // Adjust path if needed

test("renders TodoList component", () => {
  render(<TodoList />);
  const heading = screen.getByText(/todo list/i);
  expect(heading).toBeInTheDocument();
});
