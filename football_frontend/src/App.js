import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbolBall, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

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
    <div className="container">
      <h1 className="title">Top Scorers</h1>
      <div className="player-list">
        {players.map((player, index) => {
          return (
            <div className="player-card" key={index}>
              <p className="player-name">Player Name: {player.player_name}</p>
              <p className="team-name">Team Name: {player.team_name}</p>
              <p className="goals">
                <FontAwesomeIcon icon={faFutbolBall} /> Goals: {player.goals}
              </p>
              <p className="assists">Assists: {player.assists}</p>
              <p className="penalty-goals">
                <FontAwesomeIcon icon={faFlagCheckered} /> Penalty Goals: {player.penalty_goals}
              </p>
              <hr className="divider" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
