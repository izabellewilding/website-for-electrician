import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./service-article.css"
import Img from "../components/image"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"
import ServiceIcons from "../components/service-icons"


const ServiceArticle = () => (
  <Layout showLinkToHome>
    <div className="article-layout1">
      {/* <div className="article-title">
        <h1>DOMESTIC REWIRES</h1>
      </div> */}

      <ServiceIcons />

      <div className="article-content">
        <div className="article-text">
          {" "}
          <h1 className="article-subheading">CONSUMER UNIT UPGRADES</h1>
          <p>
            {" "}
            Commonly referred to as fuse boxes, consumer units play an important
            role in keeping your electrics safe. Consumer units should be kept
            in good condition as they play a vital role in detecting serious
            problems. All new consumer units are fitted with RCD protection -
            these are clever enough to detect faulty appliances before you
            notice them yourself. It is advised that any consumer unit that does
            not meet the modern standards should be upgraded.
          </p>
          <a
            href="mailto:alex@alexwildingelectricalservices.com"
            className="mailto-link mailto-services"
          >
            Get in Contact
          </a>
        </div>

        {/* <!--end into text--> */}

        <div className="article-img-container">
          <Img
            className="main-image"
            src="../images/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg"
            alt="finished dish"
          />
        </div>
        {/* <!--end main image container--> */}
      </div>
      {/* <!--end blog-intro--> */}
    </div>
    {/* <!--end of article--> */}
  </Layout>
)

export default ServiceArticle
