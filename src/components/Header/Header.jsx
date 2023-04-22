import React from "react";
import styles from "./header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <heade className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index} className={styles.filter}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </heade>
  );
}
