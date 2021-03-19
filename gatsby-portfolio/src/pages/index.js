import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typewriter from "typewriter-effect"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typewriter
      options={{ delay: 85 }}
      onInit={(typewriter) => {
        typewriter.start()
          .typeString(`Hi there, I'm Chomie.<br/>A JavaScript developer<br/>based in Seattle.`)
      }}
    />
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
