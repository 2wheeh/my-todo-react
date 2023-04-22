import { useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Body filter={filter} />
    </div>
  );
}

const filters = ["all", "active", "completed"];
