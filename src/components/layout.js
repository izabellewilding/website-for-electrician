/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./layout.css"

import Header from "./header"
import Footer from "./footer"

import "../../node_modules/font-awesome/css/font-awesome.css"

const Layout = ({ children }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"
        rel="stylesheet"
      ></link> */}
      <Header />

      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
