import React from 'react'
import './Players.scss'

const Players = ({ players }) => {
  return (
    <div>
        <h1>Player List</h1>
        
        <div className="cards">
            {players.map((player) => 
                <div className="card">{player.player}, {player.nationality}, {player.club_career}</div>
            )}
        </div>
        
    </div>
  )
};

export default Players