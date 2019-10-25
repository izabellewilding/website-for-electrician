import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./icon-bar.css"
import Img from "../components/image"

import "../../node_modules/font-awesome/css/font-awesome.css"

const IconBar = () => {
  return (
    <div className="icon-bar">
      <Link to="https://en-gb.facebook.com/">
        <i className="fab fa-facebook"></i>
      </Link>
      <Link to="https://www.instagram.com/">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link to="https://twitter.com/?lang=en-gb">
        <i className="fab fa-twitter"></i>
      </Link>
    </div>
  )
}

export default IconBar
