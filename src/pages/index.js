import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import IndexPage from "../components/Intro"
import Portfolio from "./portfolio"
import About from "./about"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <IndexPage />
      <Header siteTitle={data.site.siteMetadata?.title || `Chomie`} />
      <Portfolio>
        <main>{children}</main>
      </Portfolio>
      <About />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
