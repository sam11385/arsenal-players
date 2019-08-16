import React from 'react'
import './Players.scss'

const Players = ({ players }) => {

  function getGoals(){
    return players.map(player => player.goals)
  }
  
  function getMostGoals(){
    return Math.max(0, ...getGoals())
  }

  function getApps() {
    return players.map(player => player.appstotal)
  }

  function getMostApps() {
    return Math.max(0, ...getApps())
  }

  function getMostNations() {
    const allNations = players.map(player => player.nationality);
    let mostFrequent = 1;
    let m = 0;
    let nation;
    for (let i=0; i<allNations.length; i++) {
      for (let j=i; j<allNations.length; j++) {
        if (allNations[i] === allNations[j]) {
          m++;
        }
        if (mostFrequent<m) {
          mostFrequent=m; 
          nation = allNations[i];
        }
      }
      m=0;
    }
    return `${mostFrequent} players from ${nation} have over 100 appearances!`;
  }



  return (
    <div className="container-fluid">
        <h1>Player List</h1>

        <h2>Most Goals: {getMostGoals()}</h2>
        <h2>Most Appearances: {getMostApps()}</h2>
        <h2>Most represented country: {getMostNations()}</h2>
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