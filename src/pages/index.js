import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Img from "../components/image.js"
import Curve from "../assets/corner-curve.svg"

import Appliance from "../assets/applicance.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Bolt from "../assets/bolt.svg"
import Fuse from "../assets/fuse-box.svg"
import Fault from "../assets/fault.svg"
import EICR from "../assets/EICR.svg"
import WhiteCurve from "../assets/white-curve.svg"
import WhiteCurveInvert from "../assets/white-curve-invert.svg"

const IndexPage = () => {
  const [viewMore, setViewMore] = useState(false)
  const [viewLess, setViewLess] = useState(false)
  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="homepage">
        <div className="homepage-section1">
          <Img
            src="../images/electrician-3087536_1920.jpg"
            className="section1-img"
          />
          <div className="section1-content">
            <div className="section1-text-wrapper">
              <div className="website-logo">
                <p className="main-heading">Alex Wilding</p>
                <p className="sub-heading">Electrical Services</p>{" "}
                <p className="sub-heading2">
                  {" "}
                  {/* alex@alexwildingelectricalservices.com */}
                </p>
              </div>

              <div className="website-description">
                <h1>
                  Commercial and domestic electrician with over 10 years
                  experience. All jobs considered.
                </h1>

                <br />

                <a
                  href="mailto:alex@alexwildingelectricalservices.com"
                  className="mailto-link"
                >
                  Get a free quote
                </a>
              </div>
            </div>
            {/* end homepage text wrapper */}
          </div>
          {/* end section1 content */}
          <WhiteCurve className="white-curve" />
        </div>
        {/* end homepage section 1 */}

        <div className="homepage-section2">
          <div className="service-items-wrapper">
            <div className="rewire-wrapper">
              <Rewire className="service-svg" />
              <p className="service-icon-text">DOMESTIC REWIRES </p>
            </div>
            <div className="fuse-box-wrapper">
              <Fuse className="service-svg" />
              <p className="service-icon-text fuse-box-text">
                CONSUMER UNIT UPGRADES{" "}
              </p>
            </div>
            <div className="fault-wrapper">
              <Fault className="service-svg" />
              <p className="service-icon-text ">FAULT FINDING </p>
            </div>

            <div className="EICR-wrapper">
              <EICR className="service-svg" />
              <p className="service-icon-text">EICRs </p>
            </div>

            <div className="bolt-wrapper">
              <Bolt className="service-svg" />
              <p className="service-icon-text">COMMERCIAL </p>
            </div>

            <div className="appliance-svg-wrapper">
              <Appliance className="service-svg" />
              <p className="service-icon-text">PAT TESTING </p>
            </div>
          </div>
        </div>
      </div>
      {/* end homepage section 2 */}
      <div className="homepage-section3">
        <WhiteCurveInvert className="white-curve-invert" />

        <div className="homepage-imgs">
          <Img
            src="../images/shirish-suwal-ctmuaOO-JJI-unsplash.jpg"
            className="homepage-img1 homepage-img"
          />
          <Img
            src="../images/patrick-tomasso-1NTFSnV-KLs-unsplash.jpg"
            className="homepage-img2 homepage-img"
          />
          <Img
            src="../images/markus-spiske-kK7uPfb2YWU-unsplash.jpg"
            className="homepage-img3 homepage-img"
          />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
