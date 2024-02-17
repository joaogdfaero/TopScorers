import React, { useState, useEffect } from 'react';

function App() {
  const [jsonData, setJsonData] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:8000/topscorers/151/'); 
        const data = await response.json();
        setJsonData(JSON.stringify(data, null, 2)); 
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h1>Top Scorers</h1>
      <pre>{jsonData}</pre>
    </div>
  );
}

export default App;

