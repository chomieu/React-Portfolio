import React from "react"

import Font from "react-font"
import { Grid } from "@material-ui/core"
import "./index.scss"

export default function Project({ project }) {
  return (
    <Grid className="project" item s={12} m={6}>
      <img
        alt={`${project.title}-preview`}
        src={project.image}
      />
      <Font family="Oxanium" wight={600}><h2>{project.title}</h2></Font>
      <Font family="Poppins"><figcaption>{project.description}</figcaption></Font>
    </Grid>
  )
}

