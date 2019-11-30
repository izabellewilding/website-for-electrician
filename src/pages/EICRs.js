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
          <h1 className="article-subheading">EICRs</h1>
          <p>
            {" "}
            An Electrical Installation Condition Report (EICR) is a formal
            document produced by a fully qualified electrician after the
            electrical installation of a property has been assessed.
          </p>
          <br />
          <p>
            EICRs are regularly required by Landloards, as they are the most
            simple way to prove that the electrical installation of a property
            is safe. An EICR is also recommended in all domestic properties
            every 10 years. This ensures that the electrical installation has
            not deteriorated. If you feel that you're due an EICR or a landlord
            who needs certification, get in touch to discuss the process.
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
