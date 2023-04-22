import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const { id, desc, status } = todo;

  const handleDelete = () => onDelete(todo);

  const handleChange = e => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id}>{desc}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
