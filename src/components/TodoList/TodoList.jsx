import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul>
      {/* list of TodoItems */}
      {todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}
