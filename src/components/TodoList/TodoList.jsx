import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <ul>
      {/* list of TodoItems */}
      {todos.map(item => (
        <TodoItem
          key={item.id}
          todo={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
