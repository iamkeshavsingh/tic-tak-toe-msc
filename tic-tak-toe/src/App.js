import React from 'react';

import PlayerInfo from './components/PlayerInfo.component';
import Turn from './components/Turn.component';
import Board from './components/Board.component';
import Feedback from './components/Feedback.component';
import Start from './components/Start.component';

class App extends React.Component {

  state = {
    player1: null,
    player2: null,
    chance: null,
    status: -1,
    isGameOn: false,
    firstChance: null
  };

  getPlayersInfo = (player1, player2) => {

    var value = Math.random();
    var flooredValue = Math.floor(value * 2);
    var current;

    if (flooredValue === 0) {
      current = player1;
    }
    else {
      current = player2;
    }

    this.setState({
      player1: player1,
      player2: player2,
      isGameOn: true,
      chance: current,
      firstChance: current
    });
  };

  handleChanceChange = (isX) => {

    if (isX) {
      if (this.state.firstChance === this.state.player1) {
        this.setState({
          chance: this.state.player2
        });
      }
      else {
        this.setState({
          chance: this.state.player1
        });
      }
    }
    else {
      if (this.state.firstChance === this.state.player1) {
        this.setState({
          chance: this.state.player1
        });
      }
      else {
        this.setState({
          chance: this.state.player2
        });
      }
    }

  };

  handleWinner = (winner) => {
    if (winner === 'X') {
      this.setState({
        status: 1
      });
    }
    else {
      if (this.state.firstChance === this.state.player1) {
        this.setState({
          status: 2
        });
      }
      else {
        this.setState({
          status: 1
        });
      }
    }
  }

  render() {

    var { player1, player2, chance, status, isGameOn } = this.state;

    return isGameOn ? (
      <div>
        <PlayerInfo player1={player1} player2={player2} />
        <Turn chance={chance} />
        <Board chance={this.handleChanceChange} winner={this.handleWinner} />
        <Feedback status={status} player1={player1} player2={player2} />
      </div>
    ) : <Start getPlayersInfo={this.getPlayersInfo} />;
  }
}

export default App;
