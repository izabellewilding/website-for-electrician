/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import IconBar from "./icon-bar"

import "../../node_modules/font-awesome/css/font-awesome.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <IconBar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
