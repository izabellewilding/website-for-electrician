import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./footer.css"
import Img from "../components/image"

import "../../node_modules/font-awesome/css/font-awesome.css"

const Footer = () => {
  return (
    <footer className="footer">
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
      <div class="footer-info">
        <p>Website by Izabelle Wilding</p>
        <br />
      </div>
    </footer>
  )
}

export default Footer
