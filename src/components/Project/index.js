import React from "react"

import { Grid } from "@material-ui/core"
import "./index.scss"

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
      <h2>{project.title}</h2>
      <figcaption>
        {project.description}
      </figcaption>
    </Grid>
  )
}

