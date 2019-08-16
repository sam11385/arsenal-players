import React from 'react'
import './Players.scss'

const Players = ({ players }) => {

  // Instead of using a loop like we used to do
  // just map what you want
  function getGoals(){
    return players.map(player => player.goals);
  }
  
  function getMostGoals(){
    return Math.max(0, ...getGoals());
  }

  function getApps() {
    return players.map(player => player.appstotal);
  }

  function getMostApps() {
    return Math.max(0, ...getApps())
  }


  return (
    <div className="container-fluid">
        <h1>Player List</h1>

        <h2>Most Goals: {getMostGoals()}</h2>
        <h2>Most Appearances: {getMostApps()}</h2>
        
        <div className="cards">
            {players.map((player) => 
                <div className="card">
                  <div><span>Player:</span> {player.player}</div> 
                  <div><span>Nationality:</span> {player.nationality}</div>
                  <div><span>Position:</span> {player.pos}</div>
                  <div><span>Goals:</span> {player.goals}</div>
                  <div><span>Appearances:</span> {player.appstotal}</div>
                  <div><span>Time at Club:</span> {player.club_career}</div>
                </div>
            )}
        </div>
        
    </div>
  )
};

export default Players