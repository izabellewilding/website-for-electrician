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
        {/* <p>Get in touch for a quote</p>
        <p> Website by Izabelle Wilding </p> */}
      </div>
    </footer>
  )
}

export default Footer
