import React from 'react';

import './Start.css';

class Start extends React.Component {

    state = {
        player1: null,
        player2: null
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getPlayersInfo(this.state.player1, this.state.player2);
    };

    handleChange = (e) => {

        if (e.target.id === 'player1') {
            this.setState({
                player1: e.target.value
            });
        }
        else {
            this.setState({
                player2: e.target.value
            });
        }
    }

    render() {
        return (
            <div className="Start">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="player1">Player1 Info</label>
                    <input required onChange={this.handleChange} id="player1" />
                    <label htmlFor="player2">Player2 Info</label>
                    <input required onChange={this.handleChange} id="player2" />
                    <button type="submit">Start The Game</button>
                </form>
            </div>
        );
    }
}



export default Start;