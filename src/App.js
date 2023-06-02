import { useState } from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Body filter={filter} />
    </DarkModeProvider>
  );
}

const filters = ['all', 'active', 'completed'];
