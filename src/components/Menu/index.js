import React from 'react'
import scrollTo from "gatsby-plugin-smoothscroll"

import "./index.scss"

export default function Menu({ drop, bunToggler }) {

  const goTo = (e) => {
    const destination = e.target.innerHTML.toLowerCase()
    bunToggler()
    scrollTo(`.${destination}`)
  }

  return (
    <div className="overlay" style={{ height: drop }}>
      <button onClick={goTo}>Projects</button>
      {/* <button onClick={goTo}>About</button> */}
      <button onClick={goTo}>Contact</button>
    </div>
  )
}
