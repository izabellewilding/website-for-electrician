import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Img from "../components/image.js"
import Curve from "../assets/corner-curve.svg"

import Appliance from "../assets/applicance.svg"
import Appliance2 from "../assets/applicance2.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Bolt from "../assets/bolt.svg"
import Bolt2 from "../assets/bolt2.svg"
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
          <div className="section1-logos">
            <Img src="../images/new-elecsa-logo.jpg" className="elesca-logo" />
            <Img
              src="../images/eca-registered-member-logo.jpg"
              className="ECA-logo"
            />
          </div>

          <div className="section1-content">
            <div className="section1-text-wrapper">
              <div className="website-logo">
                <p className="main-heading">Alex Wilding</p>
                <p className="sub-heading">Electrical Services</p>{" "}
              </div>

              <div className="website-description">
                <p>
                  As a fully qualified electrician with over 10 years
                  experience, Alex Wilding electricial services provide domestic
                  and commerical electrical solutions across South West Wales
                  and beyond. Get in contact to discuss services and prices.
                </p>

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
              <div className="svg-wrapper">
                <Rewire className="service-svg" />
              </div>
              <div className="svg-text">
                <p className="service-icon-text">DOMESTIC REWIRES </p>
              </div>
            </div>

            <div className="fuse-box-wrapper">
              <div className="svg-wrapper">
                <Fuse className="service-svg" />
              </div>
              <div className="svg-text">
                <p className="service-icon-text fuse-box-text">
                  CONSUMER UNIT UPGRADES{" "}
                </p>
              </div>
            </div>

            <div className="fault-wrapper">
              <div className="svg-wrapper">
                <Fault className="service-svg" />
              </div>
              <div className="svg-text">
                <p className="service-icon-text ">FAULT FINDING </p>
              </div>
            </div>

            <div className="EICR-wrapper">
              <div className="svg-wrapper">
                <EICR className="service-svg" />
              </div>
              <div className="svg-text">
                <p className="service-icon-text">EICRs </p>
              </div>
            </div>

            <div className="bolt-wrapper">
              <div className="svg-wrapper">
                <Bolt className="gradient-svg" />
                <Bolt2 className="filled-svg" />
              </div>
              <p className="service-icon-text">COMMERCIAL </p>
            </div>

            <div className="appliance-svg-wrapper">
              <div className="svg-wrapper">
                <Appliance className="gradient-svg" />
                <Appliance2 className="filled-svg" />
              </div>
              <div className="svg-text">
                <p className="service-icon-text">PAT TESTING </p>
              </div>
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
