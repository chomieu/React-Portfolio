import React from 'react'
import "./index.scss"

function Menu({ drop }) {
  return (
    <div className="overlay" style={{ height: drop }}>
      <a href="/Portfolio">Portfolio</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a>
    </div>
  )
}

export default Menu
