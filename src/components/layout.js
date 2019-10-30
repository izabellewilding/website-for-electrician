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

import "../../node_modules/font-awesome/css/font-awesome.css"

const Layout = ({ children }) => {
  return (
    <>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
