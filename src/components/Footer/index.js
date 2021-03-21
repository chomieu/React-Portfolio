import * as React from "react"

export default function Footer({ siteDescription }) {
  return (
    <footer style={{ borderTop: "1px solid black" }}>
      <div style={{
        padding: `1.45rem 1.0875rem`,
      }}
      >
        © {new Date().getFullYear()}, {siteDescription}
      </div>
    </footer>
  )
}
