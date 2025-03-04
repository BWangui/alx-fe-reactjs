
import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
