// src/components/TodoList.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    // Check for one of the initial todos
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Enter new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    // Simulate entering a new todo and submitting the form
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText(/Learn React/i);

    // Initially, the todo should not be completed
    expect(todoText).toHaveStyle('text-decoration: none');

    // Click to toggle
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoText = screen.getByText(/Learn Jest/i);
    const deleteButton = screen.getByLabelText(/Delete Learn Jest/i);

    // Click the delete button for the todo
    fireEvent.click(deleteButton);
    expect(todoText).not.toBeInTheDocument();
  });
});