import React from 'react';
import styled from 'styled-components';

const tile = (props) => {

    const TileWrapper = styled.div`
        background-color: #f8f8ff;
        border: ${props.hover ? 'solid black 1px'  :  'solid transparent 1px'};
        width: 150px;
        height: 150px;

        font-family: 'Helvetica', 'Arial', sans-serif;
        font-size: 10em;
        font-weight: bold;
        text-align: center;

        color: ${props.mark == 'Y' ? 'midnightblue': 'mediumvioletred'};
    `;

    return (
        <TileWrapper 
            onMouseEnter={props.mouseEnter} 
            onMouseLeave={props.mouseExit}
            onMouseClick={props.clicked}
        >
            <div style={{height: '150px',width: '150px'}} onClick={props.clicked}>
                {props.mark}
            </div>
        </TileWrapper>
    );
}

export default tile;