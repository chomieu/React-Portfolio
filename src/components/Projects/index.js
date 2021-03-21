import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../seo"
import Project from "../Project"
import { Grid } from "@material-ui/core"
import "./index.scss"


export default function Projects() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            projects {
              title
              description
              image
            }
          }
        }
      }
    `
  )

  return (
    <>
      <SEO title="Projects" />
      <Grid 
        container
        spacing={10} 
        justify="center"
        className="projects">
        {site.siteMetadata.projects.map(item => <Project project={item} />)}
      </Grid>
    </>
  )
}