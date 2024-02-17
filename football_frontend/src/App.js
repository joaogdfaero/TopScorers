import React, { useState, useEffect } from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:8000/topscorers/152/');
        const data = await response.json();
        const parsedData = JSON.parse(data);
        setPlayers(parsedData);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Top Scorers</h1>
      <div>
        {players.map((player, index) => {
          return (
            <div key={index}>
              <p>Player Name: {player.player_name}</p>
              <p>Team Name: {player.team_name}</p>
              <p>Goals: {player.goals}</p>
              <p>Assists: {player.assists}</p>
              <p>Penalty Goals: {player.penalty_goals}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;