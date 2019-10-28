import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaGulp} from "react-icons/fa";
const IndexPage = () => ( 
    <Layout>
    <SEO title = "Home"/>
    <h1> Hi Watenga </h1> 
    <p> Vue Js is awesome But your OG is Doing Gatsby. </p> 
    <FaGulp></FaGulp>
    </Layout>
)

export default IndexPage