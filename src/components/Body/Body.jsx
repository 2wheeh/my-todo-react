import React, { useEffect, useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";

export default function Body({ filter }) {
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

  const filtered = getFiltered(todos, filter);

  return (
    <section>
      <TodoList
        todos={filtered}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
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

/* return filtered todos */
const getFiltered = (todos, filter) => {
  if (filter === "all") return todos;

  return todos.filter(todo => todo.status === filter);
};
