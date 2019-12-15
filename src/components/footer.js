import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./footer.scss"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"

import "../../node_modules/font-awesome/css/font-awesome.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section1">
        <div className="header-contact-details">
          <div className="footer-contact-details">
            <p>alex@alexwildingelectricalservices.com</p>{" "}
            <Email className="contact-svg" />
            <p className="phone-numb">07527 929222</p>{" "}
            <Mobile className="contact-svg" />
            <p className="phone-numb">01437 532307</p>{" "}
            <Telephone className="contact-svg" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
