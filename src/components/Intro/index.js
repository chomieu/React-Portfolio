import * as React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../seo"
import Typewriter from "typewriter-effect"
import { Button } from "@material-ui/core"
import Font from "react-font"
import "./index.scss"

const IntroPage = () => (
  <section className="contents">
    <SEO title="Home" />
    <StaticImage
      alt="cartoon-icon"
      className="cartoonIcon"
      src="../../images/cartoon-icon.png"
      placeholder="blurred"
    />
    <Typewriter
      options={{ delay: 55 }}
      onInit={(typewriter) => {
        typewriter.start()
          .typeString(`Hi there, I'm Chomie.<br/>A JavaScript developer<br/>based in Seattle.`)
      }}
    />
    <Button 
      onClick={() => scrollTo("header")}
      variant="outlined"
      size="large"
    >
      <Font
        family="Oxanium"
        weight={600}
      >
        View Portfolio
    </Font>
    </Button>
  </section>
)

export default IntroPage
