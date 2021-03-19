import React, { useState } from "react"
import PropTypes from "prop-types"
import Text from "react-font"
import { Link } from "gatsby"
import "./index.css"

function Header({ siteTitle }) {
  const [menuIcon, setMenuIcon] = useState("")

  const menuToggler = () => {
    menuIcon.length === 0 ? setMenuIcon("change") : setMenuIcon("")
  }

  return (
    <header style={{ borderBottom: "1px solid black" }}>
      <div style={{
        padding: `1.45rem 0.5rem`,
        display: "flex",
        justifyContent: "space-between"
      }}
      >
        <Text family="Francois One">
          <Link to="/">{siteTitle}</Link>
        </Text>
        <div className={`hamburger ${menuIcon}`} onClick={menuToggler}>
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
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
