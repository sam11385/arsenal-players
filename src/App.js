import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';


class App extends Component {

  render() {
    function reSort() {
      console.log('test')
    }
    return (
      <div>
      <button onClick={reSort}>test</button>
      
      
      <Players players={this.state.players.sort(function(a, b) {  
        return b.appstotal - a.appstotal  
      })} />

      {/* // Sort by goals
      // <Players players={this.state.players.sort(function(a, b) {  
      //   return b.goals - a.goals
      // })} /> */}

      </div>
    );
  }

  state = {
    players: []
  };

  componentDidMount() {
    const endpoint = 'https://bridge.buddyweb.fr/api/arsenalplayers/arsenalplayers'
    fetch(endpoint)
    .then(res => res.json())
    .then((data) => {
      this.setState({ players: data })
    })
    .catch(console.log)
  }
  
}

export default App;
