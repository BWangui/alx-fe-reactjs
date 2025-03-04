import React, { useState } from "react";
import TodoItem from "./TodoItem"; 

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice Testing", completed: false },
    { id: 3, text: "Build Projects", completed: false },
  ]);


  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={() => {}} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
