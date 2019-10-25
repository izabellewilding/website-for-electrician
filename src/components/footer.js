import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./footer.css"
import Img from "../components/image"

import "../../node_modules/font-awesome/css/font-awesome.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-inner">
        <p>Website by Izabelle Wilding | 2019</p>
        <br />
      </div>
    </footer>
  )
}

export default Footer
