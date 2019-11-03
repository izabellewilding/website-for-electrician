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
          <div className="text-wrapper">
            <div className="website-logo">
              <p className="main-heading">Alex Wilding</p>
              <p className="sub-heading">Electrical Services</p>{" "}
            </div>
            <div className="website-description">
              <h1>
                Commercial and domestic electrician with over 10 years
                experience. No job too big or small.
              </h1>
              <br />
              <h2>Get in contact for a quote.</h2>
            </div>
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
