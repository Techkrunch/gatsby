import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import  BackgroundSection  from "../components/Globals/BackgroundSection"
import Info from '../components/Home/Info'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About TechKrunch"
      styleClass="default-background"
    />
    <Info/>
    </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "morgan-sessions-k5zv-Hv4Kpc-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage