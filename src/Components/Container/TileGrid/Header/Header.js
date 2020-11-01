import React from 'react';
import styled from 'styled-components';

const header = (props) => {
    
    // Define the header
    const StyledWrapper = styled.div`
        background-color: white;
        height: 200px;
        width: 100%;
        h1 {
            text-align: center;
        }
        p {
            text-align: center;
        }
    `;

    let turn = 'Player 1'
    if(props.turnX){
        turn = 'Player 2'
    }

    let mark = 'a Y'
    if(props.turnX){
        mark = 'an X'
    }

    let title = 'Welcome to Tic-Tac-Toe!';
    if (props.winner) {
        title = 'Player ' + props.winner + ' has won the game!';
    }

    return (
        <StyledWrapper>
            <h1>{title}</h1>
            <p>It is {turn}'s turn. Select a square to leave {mark}</p>
        </StyledWrapper>
    )
}

export default header;