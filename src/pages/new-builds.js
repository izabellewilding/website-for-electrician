import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./service-article.scss"
import Img from "../components/image"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"

import ServiceArticleContainer from "../components/service-article-container"

const ServiceArticle = () => (
  <div>
    <ServiceArticleContainer>
      <SEO
        title="new-builds"
        description="new build electrical wiring and installation in Pembrokeshire"
      />

      <div className="article-content">
        <div className="mobile-header-padding"></div>
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
  </div>
)

export default ServiceArticle
