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
    <div className="mobile-header-padding"></div>

    <div className="article-layout1">
      {/* <div className="article-title">
        <h1>DOMESTIC REWIRES</h1>
      </div> */}
      <ServiceIcons />

      <div className="article-content">
        <div className="article-text">
          {" "}
          <h1 className="article-subheading">
            DOMESITC REWIRES:
            <br />
            WHEN DO I NEED MY HOME REWIRING?
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
          <br />
          <p>
            {" "}
            As a registered electrician I am fully qualified to carry out
            Periodic Inspection Reports and domestic rewires.
          </p>
          <a
            href="mailto:alex@alexwildingelectricalservices.com"
            className="mailto-link mailto-services"
          >
            Contact
          </a>
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
    </div>
    {/* <!--end of article--> */}
  </Layout>
)

export default ServiceArticle
