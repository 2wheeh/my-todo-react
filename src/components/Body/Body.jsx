import React from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";

export default function Body() {
  return (
    <div>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
