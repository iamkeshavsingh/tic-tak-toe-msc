function getWinner(board) {

    var arr = board;

    if ((arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === 'X') || (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === '0')) {
        return board[0];
    }

    if ((arr[3] === arr[4] && arr[4] === arr[5] && arr[5] === 'X') || (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] === '0')) {
        return board[3];
    }

    if ((arr[6] === arr[7] && arr[7] === arr[8] && arr[8] === 'X') || (arr[6] === arr[7] && arr[7] === arr[8] && arr[8] === '0')) {
        return board[6];
    }

    if ((arr[0] === arr[3] && arr[3] === arr[6] && arr[6] === 'X') || (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] === '0')) {
        return board[0];
    }

    if ((arr[1] === arr[3] && arr[3] === arr[7] && arr[7] === 'X') || (arr[1] === arr[3] && arr[3] === arr[7] && arr[7] === '0')) {
        return board[1];
    }

    if ((arr[2] === arr[5] && arr[5] === arr[6] && arr[6] === 'X') || (arr[2] === arr[5] && arr[5] === arr[6] && arr[6] === '0')) {
        return board[2];
    }

    if ((arr[0] === arr[4] && arr[4] === arr[8] && arr[8] === 'X') || (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] === '0')) {
        return board[0];
    }

    if ((arr[2] === arr[4] && arr[4] === arr[6] && arr[6] === 'X') || (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] === '0')) {
        return board[2];
    }

    return false;

}



export default getWinner;