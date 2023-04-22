import React, { useEffect, useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";

export default function Body() {
  const [todos, setTodos] = useState(readTodos);

  const handleAdd = todo => {
    setTodos([...todos, todo]);
  };

  const handleDelete = deleted =>
    setTodos(todos.filter(el => el.id !== deleted.id));

  const handleUpdate = updated =>
    setTodos(todos.map(el => (el.id === updated.id ? updated : el)));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section>
      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
      <TodoAdd onAdd={handleAdd} />
    </section>
  );
}

/* read todos from localStorage.
 * If there is not todos, it returns an empty array */
const readTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
