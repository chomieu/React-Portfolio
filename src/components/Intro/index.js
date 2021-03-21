import * as React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

import Typewriter from "typewriter-effect"
import Font from "react-font"
import { Button } from "@material-ui/core"
import "./index.scss"

export default function IntroPage() {
  return (
    <section className="intro">
      <StaticImage
        alt="cartoon-icon"
        className="cartoonIcon"
        src="../../images/cartoon-icon.png"
        placeholder="blurred"
      />
      <Typewriter
        options={{ delay: 50 }}
        onInit={(typewriter) => {
          typewriter.start()
            .typeString(`Hi there, I'm Chomie.<br/>A JavaScript developer<br/>based in Seattle.`)
        }}
      />
      <Button
        onClick={() => scrollTo(".projects")}
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
}
