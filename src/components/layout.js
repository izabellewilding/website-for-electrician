/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import "./layout.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

import "../../node_modules/font-awesome/css/font-awesome.css"

const handleHeaderNavigation = navItem => {
  if (navItem === "landing") {
    navigate("/")
  } else if (navItem === "services") {
    navigate("/services")
  } else if (navItem === "contact") {
    navigate("/#contact")
  }
}

const Layout = ({ children, ...props }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <html lang="en" />
      <Header onNav={handleHeaderNavigation} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
