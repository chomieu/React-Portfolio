import React from 'react'
import "./index.scss"

function Menu({ drop }) {
  return (
    <div class="overlay" style={{ height: drop }}>
      <div>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Menu
