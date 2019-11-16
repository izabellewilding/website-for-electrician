import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import Img from "../components/image.js"
import Curve from "../assets/corner-curve.svg"

import Tick from "../assets/check-symbol.svg"
import LivelyTick from "../assets/check-mark.svg"
import Appliance from "../assets/applicance.svg"
import Appliance2 from "../assets/applicance2.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Rewire2 from "../assets/plugs2.svg"
import Bolt from "../assets/bolt.svg"
import Bolt2 from "../assets/bolt2.svg"
import Fuse from "../assets/fuse-box.svg"
import Fuse2 from "../assets/fuse-box2.svg"
import Fault from "../assets/fault.svg"
import Fault2 from "../assets/fault2.svg"
import EICR from "../assets/EICR.svg"
import EICR2 from "../assets/EICR2.svg"
import WhiteCurve from "../assets/white-curve.svg"
import WhiteCurveInvert from "../assets/white-curve-invert.svg"

function ServiceIcons(props) {
  return (
    <div className="service-items-wrapper">
      <Link to="/domestic-rewires" className="service-item-wrapper ">
        <div className="svg-wrapper">
          <Rewire className="gradient-svg" />
          <Rewire2 className="filled-svg" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text">DOMESTIC REWIRES </p>
        </div>
      </Link>

      <Link to="/consumer-unit" className="service-item-wrapper">
        <div className="svg-wrapper">
          <Fuse className="gradient-svg" />
          <Fuse2 className="filled-svg" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text fuse-box-text">
            CONSUMER UNIT UPGRADES{" "}
          </p>
        </div>
      </Link>

      <Link to="/fault-finding" className="service-item-wrapper">
        <div className="svg-wrapper">
          <Fault className="gradient-svg" />
          <Fault2 className="filled-svg" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text ">FAULT FINDING </p>
        </div>
      </Link>

      <Link to="/EICRs" className="service-item-wrapper">
        <div className="svg-wrapper">
          <EICR className="gradient-svg" />
          <EICR2 className="filled-svg" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text">EICRs </p>
        </div>
      </Link>

      <Link to="/commercial" className="service-item-wrapper">
        <div className="svg-wrapper">
          <Bolt className="gradient-svg" />
          <Bolt2 className="filled-svg" />
        </div>
        <p className="service-icon-text">COMMERCIAL </p>
      </Link>

      <Link to="/appliances" className="service-item-wrapper">
        <div className="svg-wrapper">
          <Appliance className="gradient-svg" />
          <Appliance2 className="filled-svg" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text">PAT TESTING </p>
        </div>
      </Link>
    </div>
  )
}

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
                  Based in Maenclochog, Pembrokeshire, we provide affordable and
                  professional electrical services across South West Wales. All
                  jobs considered, so get in touch if you'd like to discuss
                  services and prices.
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
            <div className="certification-wrapper">
              <div className="certification-items">
                <LivelyTick className="tick-svg" />
                <p className="certification-text">
                  Registered member of the ECA and Elesca
                </p>
                <LivelyTick className="tick-svg" />
                <p className="certification-text">No job too small</p>
                <LivelyTick className="tick-svg" />
                <p className="certification-text">
                  Registered member of the ECA and Elesca
                </p>
              </div>
            </div>
          </div>
          {/* end section1 content */}
          <WhiteCurve className="white-curve" />
        </div>
        {/* end homepage section 1 */}

        <div className="homepage-section2">
          <ServiceIcons />
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
