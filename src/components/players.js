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

  function sortGoals() {
    players.sort(function(a, b) {
      return b.goals - a.goals;
    })
  }

  function sortApps() {
    console.log(players.sort(function(a, b) {
      return b.appstotal - a.appstotal;
    }))
  }

  return (
    <div className="container-fluid">
      <div className="header">
        <h1>Player List</h1>

        <h2>Most Goals: {getMostGoals()}</h2>
        <h2>Most Appearances: {getMostApps()}</h2>
        <h2>Most represented country: {getMostNations()}</h2>

        <form>
          <div class="form-group">
            <label for="sel1">Sort by:</label>
            <select class="form-control" id="sel1">
              <option>Oldest to newest</option>
              <option onClick={sortGoals}>Goals</option>
              <option onClick={sortApps}>Appearances</option>
            </select>
          </div>
        </form>
      </div>
      <div className="cards">
        {players.map((player) => 
          <div className="card">
            <div className="title">
              <span className="bold">Player:</span> {player.player}
            </div> 
            <div className="title">
              <span className="bold">Nationality:</span> {player.nationality}
            </div>
            <div className="title">
              <span className="bold">Position:</span> {player.pos}
            </div>
            <div className="title">
              <span className="bold">Goals:</span> {player.goals}
            </div>
            <div className="title">
              <span className="bold">Appearances:</span> {player.appstotal}
            </div>
            <div className="title">
              <span className="bold">Time at Club:</span> {player.club_career}
            </div>
          </div>
        )}
      </div>
        
    </div>
  )
};

export default Players