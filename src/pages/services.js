import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"

import "./services.scss"

const ServicesHome = () => (
  <Layout showLinkToHome>
    <SEO title="services homepage" />
    <div className="article-layout1">
      <div className="article-content">
        <h1 className="article-subheading">Services</h1>

        <ul className="services-list">
          <li>Domestic Rewires</li>
          <li>Consumer Unit Upgrades</li>
          <li>Commercial Electrics</li>
          <li>Landlord Electrical Certificates</li>
          <li>
            Electrical Installation Condition Reports
            <abbr> &#40; EICRs &#41; </abbr>
          </li>
          <li>Domestic Rewires</li>
          <li>New Builds</li>
          <li>Fault Finding</li>
          <li>Landlord Electrical Certificates</li>
        </ul>
        <p>
          Before work begins, I will agree a quotation for the work, fix a firm
          start date and expected completion date. On completion, it will be
          fully tested and certified, with a copy of the relevant certificates
          given straight to you.{" "}
        </p>

        <p>
          {" "}
          Alex Wilding Electrical offers a bespoke service and can advise you on
          design and maintenance procedures. All parts and materials are source
          from local suppliers and merchants to ensure high quality and to input
          capital back into Pembrokeshire.
        </p>
      </div>
    </div>
  </Layout>
)

export default ServicesHome
