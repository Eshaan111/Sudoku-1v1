import React from 'react'
import Player from './player.jsx'

function panel() {
  return (
    <div className="game-panel">
        <Player className="player-container" name='HI'/>
        <Player className="player-container" name='HO'/>
    </div>
  )
}

export default panel
