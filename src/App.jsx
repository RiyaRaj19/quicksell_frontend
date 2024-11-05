import { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupControls from './components/GroupControls';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'Status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'Priority');
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => setError(error.message));
  }, [apiUrl]);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  return (
    <div className="App">
      <GroupControls 
        grouping={grouping} 
        sorting={sorting} 
        setGrouping={setGrouping} 
        setSorting={setSorting} 
      />
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : (
        <KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
      )}
    </div>
  );
}

export default App;
