import React from 'react'
import TriadBox from './triadBox'
function Board({ grid }) {
  return (
    <div className="sudoku-board">
      {[...Array(9)].map((_, blockIndex) => (
        <TriadBox 
          key={blockIndex} 
          blockIndex={blockIndex} 
          grid={grid} 
        />
      ))}
    </div>
  );
}

export default Board
