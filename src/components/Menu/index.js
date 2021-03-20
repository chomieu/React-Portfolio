import React from 'react'
import "./index.scss"

function Menu({ drop }) {
  return (
    <div className="overlay" style={{ height: drop }}>

      <div>
        <a href="/Portfolio">Portfolio</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
      </div>
    </div>
  )
}

export default Menu
