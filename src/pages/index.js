import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      // title="TechKrunch"
      styleClass="default-background"
    />
    <Info />
    <Menu  items={data.menu}></Menu>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "a.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 100, height: 120) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
