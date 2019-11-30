import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import Img from "../components/image.js"
import Curve from "../assets/corner-curve.svg"
import ServiceIcons from "../components/service-icons"
import "../components/service-icons.scss"

import Tick from "../assets/check-symbol.svg"
import LivelyTick from "../assets/check-mark.svg"

import WhiteCurve from "../assets/white-curve.svg"
import WhiteCurveInvert from "../assets/white-curve-invert.svg"

const IndexPage = () => {
  const [viewMore, setViewMore] = useState(false)
  const [viewLess, setViewLess] = useState(false)
  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="homepage">
        <div className="mobile-header-padding"></div>
        <div className="homepage-section1">
          <Img
            className="section1-img"
            src="../images/electrician-3087536_1920.jpg"
          />
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
                  Fully qualified electrician based in Maenclochog,
                  Pembrokeshire. From a broken socket to domestic rewires, I
                  provide a full range of professional electrical services
                  across South West Wales and beyond. All jobs considered, so
                  get in touch to discuss services and prices.
                </p>

                <br />

                <a
                  href="mailto:alex@alexwildingelectricalservices.com"
                  className="mailto-link"
                >
                  Get in Contact
                </a>
                <Link to="/domestic-rewires" className="services-button">
                  <div className="services-button-content">
                    <p>Services</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* end homepage text wrapper */}
            <div className="certification-wrapper">
              <div className="certification-items">
                <LivelyTick className="tick-svg" />
                <p className="certification-text">
                  Fully qualified to the 18th edition
                </p>
                <LivelyTick className="tick-svg" />
                <p className="certification-text">
                  Registered member of the Electrical Contractors' Association
                  (ECA) and Elecsa for part P
                </p>
                <LivelyTick className="tick-svg" />
                <p className="certification-text">
                  All jobs considered, no job too small
                </p>
              </div>
            </div>
          </div>
          {/* end section1 content */}
          <WhiteCurve className="white-curve" />
        </div>
        {/* end homepage section 1 */}
        <div className="services-title-wrapper">
          <h1 className="services-title">Services</h1>
        </div>
        <div className="homepage-section2">
          <ServiceIcons />
        </div>
      </div>

      {/* end homepage section 2 */}
      <div className="homepage-section3">
        <WhiteCurveInvert className="white-curve-invert" />
        {/* 
        <div className="homepage-imgs">
        
        </div> */}
      </div>
    </Layout>
  )
}
export default IndexPage
