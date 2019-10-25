import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import Icon from "../assets/alex-wilding-logo.svg"

const IndexPage = () => {
  const [viewMore, setViewMore] = useState(false)
  const [viewLess, setViewLess] = useState(false)
  return (
    <Layout>
      <SEO title="Homepage" />
      <body className="homepage-body">
        <div className="logo-section">
          <Icon className="website-logo" />
        </div>
      </body>
    </Layout>
  )
}
export default IndexPage
