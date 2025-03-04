import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add todo...');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');

    // Click to toggle to completed
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    // Find the todo and its adjacent delete button
    const todoText = screen.getByText('Learn Testing');
    const deleteButton = todoText.nextSibling;
    
    fireEvent.click(deleteButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
