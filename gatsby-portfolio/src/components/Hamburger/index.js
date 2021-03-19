import React from "react"
import "./index.css"

function Hamburger({ bun, bunToggler }) {
  return (
    <div className={`hamburger ${bun}`} onClick={bunToggler}>
      <div class="bar1"></div>
      <div class="bar2"></div>
    </div>
  )
}

export default Hamburger
