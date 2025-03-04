// src/__tests__/TodoList.initialRender.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Initial Render', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    // Verify that each initial todo is rendered in the document.
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });
});
