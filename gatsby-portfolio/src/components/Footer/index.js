import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./index.css"

const Footer = ({ siteTitle }) => (
  <footer style={{ borderTop: "1px solid black" }}>
    <div style={{
      padding: `1.45rem 1.0875rem`,
    }}
    >
      © {new Date().getFullYear()}, Built with
          {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </footer>
)

export default Footer