import React from 'react'
import './Players.scss'

const Players = ({ players }) => {
  
  // players.map((player) => {
  //   let scot = 0;
  //   if(player.nationality === 'Scotland') {
  //     return console.log(player.nationality)
  //   }
  // })

  // Instead of using a loop like we used to do
  // just map what you want
  function getYs(){
    return players.map(player => player.goals);
  }
  
  function getMaxY(){
    return console.log('MOST GOALS: ' + Math.max(...getYs()));
  }

  console.log(getMaxY())

  

  return (
    <div>
        <h1>Player List</h1>
        
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