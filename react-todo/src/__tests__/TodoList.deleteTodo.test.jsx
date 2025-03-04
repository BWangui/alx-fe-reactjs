// src/__tests__/TodoList.deleteTodo.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Delete Todo', () => {
  test('deletes a todo', () => {
    render(<TodoList />);
    const todoText = screen.getByText(/Learn Jest/i);
    const deleteButton = screen.getByLabelText(/Delete Learn Jest/i);

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Verify the todo is no longer in the document
    expect(todoText).not.toBeInTheDocument();
  });
});
