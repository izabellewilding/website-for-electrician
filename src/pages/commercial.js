import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./service-article.scss"
import Img from "../components/image"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"
import ServiceIcons from "../components/service-icons"
import ServiceArticleContainer from "../components/service-article-container"

const ServiceArticle = () => (
  <Layout>
    <SEO
      title="commercial"
      description="commercial electrician in Pembrokeshire"
    />
    <div className="mobile-header-padding"></div>
    <ServiceArticleContainer>
      <div className="article-layout1">
        {/* <div className="article-title">
        <h1>DOMESTIC REWIRES</h1>
      </div> */}

        <div className="article-content">
          <div className="article-text">
            {" "}
            <h1 className="article-subheading">Commercial</h1>
            <p>
              When you own, lease or rent commercial premises, the safety of
              your staff and customers is paramount. Alex Wilding Electrical
              offers a complete electrical service including, design,
              installation, maintenance contracts, certification and more. From
              small business like shops, salons and restaurants to larger
              premises like mechanical workshops and offices. A bespoke services
              can be tailored to suit any customer’s requirements.
            </p>
          </div>
          {/* <!--end into text--> */}

          <div className="article-img-container">
            <Img
              className="main-image"
              src="../images/commercial-3.jpg"
              alt="image of the service"
            />
          </div>
          {/* <!--end main image container--> */}
        </div>
        {/* <!--end blog-intro--> */}
      </div>
      {/* <!--end of article--> */}
    </ServiceArticleContainer>
  </Layout>
)

export default ServiceArticle
