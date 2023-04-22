import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoItem({ todo, onDelete }) {
  const { desc, status } = todo;
  const handleDelete = () => onDelete(todo);

  return (
    <li>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">{desc}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
