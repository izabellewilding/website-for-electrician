import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./footer.css"
import Img from "../components/image"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"

import "../../node_modules/font-awesome/css/font-awesome.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section1">
        <div className="contact-details footer-contact-details">
          <Email className="contact-svg" />
          <p>alex@alexwildingelectricalservices.com</p>
          <Mobile className="contact-svg" />
          <p>07527 929222</p>
          <Telephone className="contact-svg" />
          <p>01437 532307</p>
        </div>
      </div>
      <div className="footer-section2">
        <div className="footer-logo-wrapper">
          <Img
            src="../images/eca-registered-member-logo.jpg"
            className="ECA-logo-footer"
          />
          <Img
            src="../images/new-elecsa-logo.jpg"
            className="elesca-logo-footer"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
