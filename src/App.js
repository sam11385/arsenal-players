import React, { Component } from 'react';
import './App.css';
import Players from './components/players';


class App extends Component {

  render() {
    return (
      <Players players={this.state.players} />
    );
  }

  state = {
    players: []
  };

  componentDidMount() {
    fetch('https://bridge.buddyweb.fr/api/arsenalplayers/arsenalplayers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ players: data })
    })
    .catch(console.log)
  }
  
}

export default App;
