import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Hamburger from "../Hamburger"
import Menu from "../Menu"
import "./index.scss"

export default function Header({ siteAuthor }) {
  const [bun, setBun] = useState("")
  const [drop, setDrop] = useState("0%")

  function bunToggler() {
    bun.length === 0 ? setBun("change") : setBun("")
    drop === "0%" ? setDrop("100%") : setDrop("0%")
  }

  return (
    <header>
      <Menu drop={drop} bunToggler={bunToggler} />
      <nav>
        <Link to="/">
          <StaticImage
            alt="cu-logo"
            className="logo"
            src="../../images/cu-logo.png"
            placeholder="blurred"
          />
        </Link>
        <Hamburger bun={bun} bunToggler={bunToggler} />
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
