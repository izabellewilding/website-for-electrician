import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./footer.scss"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"

const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      <div className="address-wrapper">
        <h3>Location</h3>
        <address>Galchen fach, Maenclochog, Pembrokeshire, SA66 7JX</address>
      </div>
      <div className="footer-contact-wrapper">
        <h3>Contact</h3>

        <div className="footer-contact-details">
          <p>alex@alexwildingelectricalservices.com</p>{" "}
          <Email className="contact-svg" />
          <p className="phone-numb">07527 929222</p>{" "}
          <Mobile className="contact-svg" />
          <p className="phone-numb">01437 532307</p>{" "}
          <Telephone className="contact-svg" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
