import React, { useState } from "react"
import PropTypes from "prop-types"
import Font from "react-font"
import Hamburger from "../Hamburger"
import Menu from "../Menu"
import { Link } from "gatsby"

function Header({ siteTitle }) {
  const [bun, setBun] = useState("")
  const [drop, setDrop] = useState("0%")

  const bunToggler = () => {
    bun.length === 0 ? setBun("change") : setBun("")
    drop === "0%" ? setDrop("100%") : setDrop("0%")
  }

  return (
    <header style={{ borderBottom: "1px solid black", }}>
      <Menu drop={drop} />
      <div style={{
        padding: `1.45rem 0.5rem`,
        display: "flex",
        justifyContent: "space-between"
      }}
      >
        <Font family="Oxanium" weight={600}>
          <Link to="/">{siteTitle}</Link>
        </Font>
        <Hamburger bun={bun} bunToggler={bunToggler} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
