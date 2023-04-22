import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoAdd({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ id: uuidv4(), desc: text, status: "active" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
