import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./service-article.scss"
import Img from "../components/image"
import "@rmwc/icon/icon.css"
import ServiceArticleContainer from "../components/service-article-container"

const ServiceArticle = () => (
  <div>
    {" "}
    <ServiceArticleContainer>
      <SEO
        title="consumer-unit-upgrades"
        description="consumer unit upgrades in Pembrokeshire"
      />

      <div className="article-layout1">
        {" "}
        <h1 className="article-subheading">Consumer Unit Upgrades</h1>
        <div className="article-content">
          <div className="article-text">
            {" "}
            <p>
              {" "}
              Commonly referred to as fuse boxes, consumer units play an
              important role in keeping our electrics safe. Consumer units
              should be kept in good condition as they play a vital role in
              detecting serious problems. All new consumer units are installed
              with RCD protection, which provides a defence against electric
              shocks and can help identify faulty appliances. S.P.Ds and AFDDs
              can also be fitted if required.
            </p>
          </div>

          <div className="article-img-container">
            <Img
              className="main-image"
              src="../images/markus-spiske-kK7uPfb2YWU-unsplash.jpg"
            />
          </div>
          {/* <!--end main image container--> */}
        </div>
        {/* <!--end blog-intro--> */}
      </div>
      {/* <!--end of article--> */}
    </ServiceArticleContainer>
  </div>
)

export default ServiceArticle
