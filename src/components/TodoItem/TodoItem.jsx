import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const { id, desc, status } = todo;

  const handleDelete = () => onDelete(todo);

  const handleChange = e => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      {status === "active" ? (
        <label className={styles.desc} htmlFor={id}>
          {desc}
        </label>
      ) : (
        <label className={styles.completed_desc} htmlFor={id}>
          {desc}
        </label>
      )}
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
