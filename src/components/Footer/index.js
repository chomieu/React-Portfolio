import * as React from "react"

const Footer = ({ siteDescription }) => (
  <footer style={{ borderTop: "1px solid black" }}>
    <div style={{
      padding: `1.45rem 1.0875rem`,
    }}
    >
      © {new Date().getFullYear()}, {siteDescription}
    </div>
  </footer>
)

export default Footer
