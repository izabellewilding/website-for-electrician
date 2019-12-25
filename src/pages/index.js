import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import Img from "../components/image.js"
import ServiceIcons from "../components/service-icons"
import "../components/service-icons.scss"
import LivelyTick from "../assets/check-mark.svg"

import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"
import WhiteCurve from "../assets/white-curve.svg"

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
              <div className="header-contact-details">
                <div className="contact-details-mob ">
                  {" "}
                  <Email className="contact-svg" />
                  <p>alex@alexwildingelectricalservices.com</p>{" "}
                  <Mobile className="contact-svg" />
                  <p>07527 929222</p> <Telephone className="contact-svg" />
                  <p>01437 532307</p>
                </div>
              </div>
              <div className="website-description">
                <p>
                  Fully qualified electrician based in Maenclochog,
                  Pembrokeshire. From a broken socket to a full domestic rewire,
                  I offer a range of professional electrical services across
                  South West Wales. All jobs are considered, so get in touch via
                  email or phone to discuss services and prices.
                </p>

                <br />

                <a
                  href="mailto:alex@alexwildingelectricalservices.com"
                  className="mailto-link"
                >
                  Contact
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

        {/* end homepage section 2 */}
        <div className="homepage-section3">
          <div className="section3-img-wrapper">
            <div className="featured-imgs">
              <Link to="/commercial" className="img-wrapper1">
                {" "}
                <Img
                  src="../images/commercial-3.jpg"
                  className="featured-img1"
                  type="small"
                />
                <div className="info-box">
                  <p>Commercial Lighting</p>
                </div>
              </Link>

              <Link to="/" className="img-wrapper2">
                <Img
                  src="../images/van.jpg"
                  className="hover-img "
                  type="small"
                />
                <div className="info-box">
                  <p></p>
                </div>
              </Link>

              <Link to="/" className="img-wrapper3">
                <Img
                  src="../images/commercial-after.jpg"
                  className="featured-img"
                  type="small"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
