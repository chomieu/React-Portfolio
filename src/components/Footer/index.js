import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./index.scss"

export default function Footer({ siteDescription }) {
  return (
    <footer class="footer">
      <span>© {new Date().getFullYear()},
        <a href="https://www.gatsbyjs.com/">{siteDescription}</a>
      </span> 
      <div class="social">
        <div>
        <StaticImage
          alt="github-icon"
          className="footer__icon"
          src="../../images/github.png"
          placeholder="blurred"
        />
        <a href="https://github.com/chomieu">GitHub</a>
        </div>
        <div>
        <StaticImage
          alt="linkedin-icon"
          className="footer__icon"
          src="../../images/linkedin.png"
          placeholder="blurred"
        />
        <a href="https://www.linkedin.com/in/chomieu/">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
