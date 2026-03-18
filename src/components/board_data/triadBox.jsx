import React from 'react'
import Cell from './cell.jsx'
function TriadBox({ blockIndex, grid }) {
    
    const getIndicesForCoord = (blockIndex) => {
        const indices = [];
        const rowOffset = Math.floor(blockIndex / 3) * 27;
        const colOffset = (blockIndex % 3) * 3;

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
            indices.push(rowOffset + (r * 9) + colOffset + c);
            }
        }
        return indices; // Returns array of 9 indices for that 3x3 block
    };
    const cellIndices = getIndicesForCoord(blockIndex);
    console.log(cellIndices)

    return (
        <div className="triad-box">
        {cellIndices.map((globalIndex) => (
            <Cell 
            key={globalIndex} 
            value={grid[globalIndex]} 
            index={globalIndex}
            />
        ))}
        </div>
    );
}

export default TriadBox
