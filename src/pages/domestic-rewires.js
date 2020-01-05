import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./service-article.scss"
import Img from "../components/image"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"
import ServiceArticleContainer from "../components/service-article-container"

const ServiceArticle = () => (
  <Layout>
    <SEO
      title="domestic rewires"
      description="domestic rewires in Pembrokeshire"
    />
    <div className="mobile-header-padding"></div>

    <ServiceArticleContainer>
      <div className="article-content">
        <div className="article-text">
          {" "}
          <h1 className="article-subheading">
            Domestic Rewires:
            <br />
            When do I need my home rewiring?
          </h1>
          <p>
            There are no set rules for when a domestic property needs a full
            rewire. The age and condition of the installation determine whether
            the property is in need of an upgrade. As all electrical
            installations deteriorate with age, it is recommended that a
            periodic inspection test is carried out every 10 years for an
            occupied domestic property, and every 5 years for an occupied rented
            property or when the tenancy changes to determine if the electrical
            wiring is safe. If your property still has it's original wiring and
            is over 30 years old, it is likely that the wiring will need
            upgrading, at least in part, to the modern standard.
          </p>
        </div>

        {/* <!--end into text--> */}

        <div className="article-img-container">
          <Img
            className="main-image"
            src="../images/lines-2147464_1920.jpg"
            alt="finished dish"
          />
        </div>
        {/* <!--end main image container--> */}
      </div>
      {/* <!--end blog-intro--> */}
    </ServiceArticleContainer>
  </Layout>
)

export default ServiceArticle
