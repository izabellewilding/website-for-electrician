import React from "react"
import { Link } from "gatsby"
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
        title="commercial"
        description="commercial electrician in Pembrokeshire"
      />
      <div className="article-layout1">
        {" "}
        <div className="mobile-header-padding"></div>
        <div className="article-content">
          <div className="article-text">
            {" "}
            <h1 className="article-subheading">Commercial</h1>
            <p>
              When you own, lease or rent commercial premises, the safety of
              your staff and customers is paramount. Alex Wilding Electrical
              Services offers a complete electrical service including, design,
              installation, maintenance contracts, certification and more. From
              small business like shops, salons and restaurants to larger
              premises like mechanical workshops and offices. A bespoke services
              can be tailored to suit any customer’s requirements.
            </p>
          </div>
          {/* <!--end into text--> */}

          <div className="home-section3">
            <div className="section3-img-wrapper">
              <div className="featured-imgs">
                <div className="img-wrapper1">
                  {" "}
                  <Img
                    src="../images/commercial-3.jpg"
                    className="featured-img"
                    type="small"
                  />
                  <div className="info-box">
                    <p>Commercial Lighting</p>
                  </div>
                </div>
              </div>
            </div>
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
