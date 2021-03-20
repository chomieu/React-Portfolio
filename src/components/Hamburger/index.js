import React from "react"
import "./index.scss"

function Hamburger({ bun, bunToggler }) {
  return (
    <div 
      role="button"
      tabIndex={0}
      className={`hamburger ${bun}`} 
      onClick={bunToggler}
      onKeyDown={bunToggler}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
    </div>
  )
}

export default Hamburger
