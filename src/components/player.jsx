import React from 'react'
import Board from './board_data/board.jsx'
import {SOLVED_GRID_1, SOLVED_GRID_2, SOLVED_GRID_3} from './board_data/test_value_maps.jsx'
function Player({ name = "PLAYER 1" }) {
  return (
    <div className="player-container">
        <div className="player-info">
            <h2 className="player-name">{name}</h2>
            <div className="player-score">
              <span className="score-num">12</span>
              <span className="score-unit">pts</span>
            </div>
        </div>

        <Board grid = {SOLVED_GRID_1}/>

        <div className="number-pad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button key={num} className="num-btn">{num}</button>
            ))}
            <button className="num-btn delete">×</button>
        </div>
    </div>
  );
}
export default Player;