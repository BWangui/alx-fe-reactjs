// src/__tests__/TodoList.addTodo.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Add Todo', () => {
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Enter new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    // Simulate user entering a new todo and submitting the form
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Verify the new todo is rendered
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });
});