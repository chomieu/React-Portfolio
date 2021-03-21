import * as React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

import loadable from '@loadable/component'
import Typewriter from "typewriter-effect"
import { Button } from "@material-ui/core"
import "./index.scss"

const Font = loadable.lib(() => import("react-font"))

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
