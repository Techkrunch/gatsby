import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import  BackgroundSection  from "../components/Globals/BackgroundSection"
import Info from '../components/Home/Info'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      // title="TechKrunch"
      styleClass="default-background"
    />
    <Info/>  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "computer-1572345347195-9607.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
