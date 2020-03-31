import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

import "./electrical-services-pembrokeshire.scss"
import ServiceIcons from "../components/service-icons"

const ServicesHome = () => (
  <Layout>
    <SEO
      title="services homepage"
      description="List of services Alex Wilding Electrical provides in Pembrokeshire and surrounding areas"
    />
    <div className="article-layout1" id="services-page">
      <h1 className="article-subheading">Electrical Services Pembrokeshire</h1>
      <div className="article-content">
        <ServiceIcons />

        <div className="text-box">
          <p>
            {" "}
            Alex Wilding Electrical offers a bespoke service and can advise you
            on design and maintenance procedures. All parts and materials are
            source from local suppliers and merchants to ensure high quality and
            to input capital back into Pembrokeshire.
          </p>
          <br />
          <p>
            Before work begins, we will agree a quotation for the work, fix a
            firm start date and expected completion date. On completion, it will
            be fully tested and certified, with a copy of the relevant
            certificates given straight to you.{" "}
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default ServicesHome
