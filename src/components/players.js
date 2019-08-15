import React from 'react'

const Players = ({ players }) => {
  return (
    <div>
        <h1>Player List</h1>
        {players.map((player) => 
            <div>{player.player}, {player.nationality}</div>
        )}
      
    </div>

    
  )
};

export default Players