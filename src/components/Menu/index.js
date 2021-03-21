import React from 'react'
import scrollTo from "gatsby-plugin-smoothscroll"

import "./index.scss"

export default function Menu({ drop, bunToggler }) {

  const goTo = () => {
    bunToggler()
    scrollTo(".projects")
  }

  return (
    <div className="overlay" style={{ height: drop }}>
      <button onClick={goTo}>Portfolio</button>
      <button onClick={goTo}>About</button>
      <button onClick={goTo}>Contact</button>
    </div>
  )
}
