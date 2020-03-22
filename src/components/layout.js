/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.scss"

import Header from "./header"
import Footer from "./footer"

import "../../node_modules/font-awesome/css/font-awesome.css"

const Layout = ({ children, ...props }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <html lang="en" />

      <Header {...props} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
