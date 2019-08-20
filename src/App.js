import React, { Component } from 'react';
import './App.css';
import Players from './components/Players';


class App extends Component {

  render() {
    return (
      // Sort by apps
      <Players players={this.state.players.sort(function(a, b) {
        return (
          b.appstotal - a.appstotal
        );
      })} />
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
