import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Img from "../components/image.js"
import Curve from "../assets/corner-curve.svg"

import Logo from "../assets/alex-wilding-logo.svg"

const IndexPage = () => {
  const [viewMore, setViewMore] = useState(false)
  const [viewLess, setViewLess] = useState(false)
  return (
    <Layout>
      <SEO title="Homepage" />
      {/* <body className="homepage-body"> */}
      <div className="homepage">
        <Img
          src="../images/electrician-3087536_1920.jpg"
          className="index-img"
        />
        <div className="homepage-wrapper">
          <div className="website-logo">
            <h1 className="main-heading">Alex Wilding</h1>
            <h2 className="sub-heading">Electrical Services</h2>
          </div>
        </div>

        {/* <div className="contact-details">
          <p>alex@alexwildingelectricalservices.com</p>
          <p>Tel: 01437 532307</p>
          <p>Mob: 07527 929222</p>
        </div> */}
      </div>

      {/* </body> */}
    </Layout>
  )
}
export default IndexPage
