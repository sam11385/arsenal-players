import React from 'react'
import './Players.scss'

const Players = ({ players }) => {

  // function getGoals(){
  //   return players.map(player => player.goals)
  // }
  
  // function getMostGoals(){
  //   return Math.max(0, ...getGoals())
  // }

  // function getApps() {
  //   return players.map(player => player.appstotal)
  // }

  // function getMostApps() {
  //   return Math.max(0, ...getApps())
  // }

  // function getMostNations() {
  //   const allNations = players.map(player => player.nationality);
  //   let mostFrequent = 1;
  //   let m = 0;
  //   let nation;
  //   for (let i=0; i<allNations.length; i++) {
  //     for (let j=i; j<allNations.length; j++) {
  //       if (allNations[i] === allNations[j]) {
  //         m++;
  //       }
  //       if (mostFrequent<m) {
  //         mostFrequent=m; 
  //         nation = allNations[i];
  //       }
  //     }
  //     m=0;
  //   }
  //   return `${mostFrequent} players from ${nation} have over 100 appearances!`;
  // }

  // function sortApps() {
  //   players.sort(function(a, b) {
  //     return b.appstotal - a.appstotal;
  //   })
  // }

  // function sortGoals() {
  //   function handleClick(e) {
  //     e.preventDefault();
  //     players = players.sort(function(a, b) {
  //       return b.goals - a.goals;
  //     })
  //     console.log(players);
      
      
  //   }

  //   return (
  //     <div>
  //       <button onClick={handleClick}>
  //         Sort players by goals
  //       </button>      
  //     </div>
  //   );
  // }

  return (
    <div className="container-fluid">
      
      

        {/* <h2>Most Goals: {getMostGoals()}</h2>
        <h2>Most Appearances: {getMostApps()}</h2>
        <h2>Most represented country: {getMostNations()}</h2> */}

        {/* <div>{sortGoals()}</div> */}

      
      <div className="cards">
        {players.map((player) => 
          <div key={player.player} className="card">
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