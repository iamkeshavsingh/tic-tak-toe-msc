import React from 'react';

import './Square.css';

function Square({ type, click, idx }) {

    function handleClick() {
        if (type === null) {
            click(idx);
        }
    }

    return (
        <div className="Square" onClick={handleClick}>{type}</div>
    );
}


export default Square;