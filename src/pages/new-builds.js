import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./service-article.scss"
import Img from "../components/image"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"

import ServiceArticleContainer from "../components/service-article-container"

const ServiceArticle = () => (
  <Layout showLinkToHome>
    <SEO title="new-builds" />
    <div className="mobile-header-padding"></div>

    <ServiceArticleContainer>
      <div className="article-content">
        <div className="article-text">
          {" "}
          <h1 className="article-subheading">New Builds</h1>
        </div>
        {/* <!--end into text--> */}

        <div className="article-img-container">
          <Img
            className="main-image"
            src="../images/patrick-tomasso-1NTFSnV-KLs-unsplash.jpg"
            alt="finished dish"
          />
        </div>
        {/* <!--end main image container--> */}
      </div>
      {/* <!--end blog-intro--> */}
    </ServiceArticleContainer>
    {/* <!--end of article--> */}
  </Layout>
)

export default ServiceArticle
