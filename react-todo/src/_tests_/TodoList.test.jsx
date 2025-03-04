import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./components/TodoList";

test("adds a new todo", () => {
  render(<TodoList />);

  
  const input = screen.getByPlaceholderText("Add a new todo...");
  const addButton = screen.getByText("Add");


  fireEvent.change(input, { target: { value: "New Todo" } });

  
  fireEvent.click(addButton);


  expect(screen.getByText("New Todo")).toBeInTheDocument();
});
