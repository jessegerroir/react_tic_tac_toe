import React, { Component } from 'react';
import styled from 'styled-components';

import Tile from './Tile/Tile';
import Header from './Header/Header';


class tileGrid extends Component {

  constructor(props) {
    super(props);
    // Use the initial grid size to create grid array
    const gridInitialValues = [];
    for(let index = 0; index < 9; index++){
      gridInitialValues.push({
        hover: false,
        mark: false
      });
    }
    // set initial state
    this.state = {
      grid: gridInitialValues,
      turnX: false,
      winner: false
    }
  }

  tileEnterhandler = (index) => {
    // update state of grid item so hover is true
    const newGrid = this.state.grid;
    // If the square hasn't been marked yet
    if (!newGrid[index].mark && !this.state.winner) {
      newGrid[index].hover = true;
    }
    this.setState({grid: newGrid});
  }

  tileExithandler = (index) => {
    // update state of grid item so hover is true
    const newGrid = this.state.grid;
    newGrid[index].hover = false;
    
    this.setState({grid: newGrid});
  }

  tileClickhandler = (index, turnX) => {
    const newGrid = this.state.grid;

    let newTurn = turnX;

    // If the square hasn't been marked yet
    if (!newGrid[index].mark && !this.state.winner) {
      // Save what was marked in the square
      if (turnX){
        newGrid[index].mark = 'X';
      } else {
        newGrid[index].mark = 'Y';
      }
        // Toggle value of the turn
        newTurn = !turnX;
    }

    // update state
    this.setState({grid: newGrid, turnX: newTurn});

    // check winState
    this.checkWinState(this.state.grid);
  }

  checkWinState = (grid) => {
    const entries = grid.map((element) => {
      return element.mark ? element.mark : '';
    });

    const lines = [
      entries[0] + entries[1] + entries[2],
      entries[3] + entries[4] + entries[5],
      entries[6] + entries[7] + entries[8],

      entries[0] + entries[3] + entries[6],
      entries[1] + entries[4] + entries[7],
      entries[2] + entries[5] + entries[8],

      entries[0] + entries[4] + entries[8],
      entries[2] + entries[4] + entries[6]
    ]

    const found = lines.find((line) => {
      return (line === 'YYY' || line === 'XXX')
    });
    if(found === 'YYY') {
      this.setState({winner: 'Y'});
    }
    if(found === 'XXX') {
      this.setState({winner: 'Y'});
    }


  }

  render() {

      // Define the size and style of the grid
      const StyledWrapper = styled.div`
        background-color: white;
        border: solid 5px black;
        height: 460px;
        width: 460px;
        margin: auto;
        
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start
      `;

      // create the grid (shoud optimize this so it only runs if this.state.gridSize changes)
      const grid = [];
      for(let index = 0; index < 9; index++){
        grid.push(<Tile 
                      key={index} 
                      mark={this.state.grid[index].mark}
                      hover={this.state.grid[index].hover} 
                      mouseEnter={() => this.tileEnterhandler(index)}
                      mouseExit={() => this.tileExithandler(index)}
                      clicked={() => this.tileClickhandler(index, this.state.turnX)}
                  />);
      }

      // render the grid
      return (
        <div>
          <Header turnX={this.state.turnX} winner={this.state.winner}/>
          <StyledWrapper>
            {grid}
          </StyledWrapper>
        </div>
      )
  }
}

export default tileGrid;