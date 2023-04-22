import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos }) {
  return (
    <section>
      {/* list of TodoItems */}
      {todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </section>
  );
}
