import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <ul className={styles.list}>
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
