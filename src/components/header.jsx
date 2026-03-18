import React from 'react'

function header() {
  return (
    <>
        <header className="sudoku-header">
            <div className="header-content-wrapper">
                <div className="header-main">
                    <div className="header-badge">4</div>
                    <h1 className="header-title">SUDOKU DOJO</h1>
                </div>
                
                <div className="header-stats">
                    <span className="score-value">37</span>
                    <span className="score-label">点</span>
                </div>
            </div>
        </header>
  </>
  )
}

export default header;
