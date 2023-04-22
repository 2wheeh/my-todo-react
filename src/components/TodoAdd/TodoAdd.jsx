import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoAdd.module.css";

export default function TodoAdd({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = text.trim();

    if (trimmed.length === 0) return;

    onAdd({ id: uuidv4(), desc: trimmed, status: "active" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
