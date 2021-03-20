import * as React from "react"
import Font from "react-font"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typewriter from "typewriter-effect"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="contents">
      <Typewriter
        options={{ delay: 55 }}
        onInit={(typewriter) => {
          typewriter.start()
            .typeString(`Hi there, I'm Chomie.<br/>A JavaScript developer<br/>based in Seattle.<br/>`)
        }}
      />
      <Link to="portfolio">
        <img alt="down-icon" className="downIcon" src="https://i.imgur.com/q2jKiGg.png" />
      </Link>
      <Font family="Oxanium" weight={600}>View Portfolio</Font>
    </section>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}

  </Layout>
)

export default IndexPage
