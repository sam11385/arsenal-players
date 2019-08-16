import React from 'react'
import './Players.scss'

const Players = ({ players }) => {
  
  players.map((player) => {
    let scot = 0;
    if(player.nationality === 'Scotland') {
      return console.log(player.nationality)
    }
  })

  

  return (
    <div>
        <h1>Player List</h1>
        
        <div className="cards">
            {players.map((player) => 
                <div className="card">
                  <div><span>Player:</span> {player.player}</div> 
                  <div><span>Nationality:</span> {player.nationality}</div>
                  <div><span>Time at Club:</span> {player.club_career}</div>
                </div>
            )}
        </div>
        
    </div>
  )
};

export default Players