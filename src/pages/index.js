import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Intro from "../components/Intro"
// import About from "../components/About"
import Contact from "../components/Contact"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import "./index.scss"

export default function Layout ({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)

  return (
    <>
      <Intro />
      <Header siteAuthor={data.site.siteMetadata?.author || `Chomie`} />
      <Projects>
        <main>{children}</main>
      </Projects>
      {/* <About /> */}
      <Contact />
      <Footer siteDescription={data.site.siteMetadata?.description || `Built by Chomie`}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
