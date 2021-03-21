import React from "react"

import { Grid } from "@material-ui/core"
import "./index.scss"

const Font = loadable.lib(() => import("react-font"))

export default function Project({ project }) {
  return (
    <Grid 
      item 
      className="project" 
    >
      <img
        alt={`${project.title}-preview`}
        src={project.image}
      />
      <figcaption>
        <Font family="Oxanium" wight={600}><h2>{project.title}</h2></Font>
        <Font family="Poppins">{project.description}</Font>
      </figcaption>
    </Grid>
  )
}

