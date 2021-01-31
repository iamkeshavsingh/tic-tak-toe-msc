import React from 'react';

import Square from './Square.component';
import './Board.css';
import getWinner from '../helper/winner';


class Board extends React.Component {

    state = {
        board: Array(9).fill(null),
        isX: true
    };

    handleChange = (idx) => {
        var value = this.state.isX ? 'X' : '0';
        var copyBoard = [...this.state.board];
        copyBoard[idx] = value;
        this.props.chance(this.state.isX);

        // check all the boards are filled
        // match drawn

        var winner = getWinner(copyBoard);
        if (winner === false) {
            this.setState({
                board: copyBoard,
                isX: !this.state.isX
            });
        }
        else {
            this.props.winner(winner);
        }
    };

    render() {
        return (
            <div className="Board">
                {this.state.board.map((value, idx) => {
                    return <Square key={idx} type={value} click={this.handleChange} idx={idx} />
                })}
            </div>
        );
    }
}



export default Board;