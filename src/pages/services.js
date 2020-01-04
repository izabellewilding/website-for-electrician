import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"

import "./service-article.scss"

const ServicesHome = () => (
  <Layout showLinkToHome>
    <SEO title="services homepage" />
    <div className="article-layout1">
      <div className="article-content">
        <h1 className="article-subheading">Services</h1>

        <p>
          Below are just some of the services I am fully qualified to carry out:{" "}
        </p>
        <ul>
          <li>Domestic Rewires</li>
          <li>Consumer Unit Upgrades</li>
          <li>Commercial Electrics</li>
          <li>Landlord Electrical Certificates</li>
          <li>
            Electrical Installation Condition Reports
            <abbr> &#40; EICRs &#41; </abbr>
          </li>
        </ul>
        <p>
          Before work begins, I will agree a quotation for the work, fix a firm
          start date and expected completion date. On completion, it will be
          fully tested and certified, with a copy of the relevant certificates
          given straight to you.
        </p>
      </div>
    </div>
  </Layout>
)

export default ServicesHome
