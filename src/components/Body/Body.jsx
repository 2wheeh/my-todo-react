import React, { useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";

export default function Body() {
  const [todos, setTodos] = useState(dummy);

  const handleAdd = todo => {
    setTodos([...todos, todo]);
  };

  return (
    <section>
      <TodoList todos={todos} />
      <TodoAdd onAdd={handleAdd} />
    </section>
  );
}

const dummy = [
  { id: "1", desc: "잠자기", status: "active" },
  { id: "2", desc: "숨쉬기", status: "active" },
  { id: "3", desc: "눈뜨기", status: "completed" },
];
