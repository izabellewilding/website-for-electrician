import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import Img from "../components/image.js"
import ServiceIcons from "../components/service-icons"
import "../components/service-icons.scss"
import LivelyTick from "../assets/check-mark.svg"

import Bulb from "../assets/idea.svg"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"
import WhiteCurve from "../assets/white-curve.svg"

const IndexPage = () => {
  const [viewMore, setViewMore] = useState(false)
  const [viewLess, setViewLess] = useState(false)
  return (
    <Layout>
      <SEO title="Electrician in Pembrokeshire" />

      <div className="home">
        <div className="mobile-header-padding"></div>
        <div className="home-section1">
          <Img
            className="section1-img"
            src="../images/electrician-3087536_1920.jpg"
            size="medium"
          />
          <div className="section1-logos">
            <Img src="../images/new-elecsa-logo.jpg" className="elesca-logo" />
            <Img
              src="../images/eca-registered-member-logo.jpg"
              className="ECA-logo"
            />
          </div>
          <div className="home-section1-content">
            <h2 className="home-title">Domestic and Commercial Electrician </h2>
            <h2 className="home-title2">
              {" "}
              <strong>Based in Maenclochog</strong> <br />
              <strong>Pembrokeshire</strong>
            </h2>
            <div className="svg-container">
              <Bulb className="home-bulb" />
            </div>
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
          </div>
          {/* end section1 content */}
        </div>
        {/* end home section 1 */}
        <div className="breadcrumb">
          <div className="certification-items">
            {" "}
            <LivelyTick className="tick-svg" />
            <p className="certification-text">
              Fully qualified to the 18th edition
            </p>
            <LivelyTick className="tick-svg" />
            <p className="certification-text">
              Compliant with Part P of the Building Regulations for domestic
              installation work and repairs.
            </p>{" "}
            <LivelyTick className="tick-svg" />
            <p className="certification-text">
              Registered member of the Electrical Contractors' Association (ECA)
            </p>
          </div>
        </div>

        <p className="text-box">
          <strong>Fully qualified </strong> electrician with over{" "}
          <strong>10 years of experience </strong> carrying out electrical
          services across Pemrokeshire and surrounding areas for{" "}
          <strong>commercial, domestic, and agricultural clients</strong>.
          Clients are currently based in Clynderwen, Crymych, Cardigan, Newport,
          Haverfordwest, Narberth, Whitland and surrounding regions.{" "}
          <strong>No job too big or small,</strong> get in touch if you'd like
          to discuss services and prices.
        </p>
        <Link to="/electrical-services-pembrokeshire">
          <h2 className="mob-clickme">Click to view services</h2>
        </Link>
        <Link
          to="/electrical-services-pembrokeshire"
          className="services-title-wrapper"
        >
          <h1 className="services-title">Our Services</h1>
        </Link>
        <div className="home-section2">
          <ServiceIcons id="index-icons" />
        </div>
        {/* end home section 2 */}
        <div className="home-section3">
          <div className="section3-img-wrapper">
            <div className="featured-imgs">
              <Link to="/commercial" className="img-wrapper1">
                {" "}
                <Img
                  src="../images/commercial-3.jpg"
                  className="featured-img"
                  type="small"
                />
                <div className="info-box">
                  <p>Commercial Lighting</p>
                </div>
              </Link>

              {/* <Link to="/" className="img-wrapper2">
                <Img
                  src="../images/van.jpg"
                  className="featured-img "
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
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
