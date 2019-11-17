import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./service-article.css"
import Img from "../components/image"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"

import Appliance from "../assets/applicance.svg"
import Appliance2 from "../assets/applicance2.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Rewire2 from "../assets/plugs2.svg"
import Bolt from "../assets/bolt.svg"
import Bolt2 from "../assets/bolt2.svg"
import Fuse from "../assets/fuse-box.svg"
import Fuse2 from "../assets/fuse-box2.svg"
import Fault from "../assets/fault.svg"
import Fault2 from "../assets/fault2.svg"
import EICR from "../assets/EICR.svg"
import EICR2 from "../assets/EICR2.svg"
import WhiteCurve from "../assets/white-curve.svg"
import WhiteCurveInvert from "../assets/white-curve-invert.svg"

const ServiceArticle = () => (
  <Layout showLinkToHome>
    <div className="article-layout1">
      {/* <div className="article-title">
        <h1>DOMESTIC REWIRES</h1>
      </div> */}

      <div className="service-items-wrapper">
        <Link to="/domestic-rewires" className="service-item-wrapper">
          <div className="svg-wrapper">
            <Rewire className="gradient-svg" />
            <Rewire2 className="filled-svg" />
          </div>
          <div className="svg-text">
            <p className="service-icon-text">DOMESTIC REWIRES </p>
          </div>
        </Link>

        <Link to="/consumer-unit" className="service-item-wrapper">
          <div className="svg-wrapper">
            <Fuse className="gradient-svg" />
            <Fuse2 className="filled-svg" />
          </div>
          <div className="svg-text">
            <p className="service-icon-text fuse-box-text">
              CONSUMER UNIT UPGRADES{" "}
            </p>
          </div>
        </Link>

        <Link to="/fault-finding" className="service-item-wrapper">
          <div className="svg-wrapper">
            <Fault className="gradient-svg" />
            <Fault2 className="filled-svg" />
          </div>
          <div className="svg-text">
            <p className="service-icon-text ">FAULT FINDING </p>
          </div>
        </Link>

        <Link to="/EICRs" className="service-item-wrapper">
          <div className="svg-wrapper">
            <EICR className="gradient-svg" />
            <EICR2 className="filled-svg" />
          </div>
          <div className="svg-text">
            <p className="service-icon-text">EICRs </p>
          </div>
        </Link>

        <Link to="/commercial" className="service-item-wrapper">
          <div className="svg-wrapper">
            <Bolt className="gradient-svg" />
            <Bolt2 className="filled-svg" />
          </div>
          <p className="service-icon-text">COMMERCIAL </p>
        </Link>

        <Link to="/appliances" className="service-item-wrapper">
          <div className="svg-wrapper">
            <Appliance className="gradient-svg" />
            <Appliance2 className="filled-svg" />
          </div>
          <div className="svg-text">
            <p className="service-icon-text">PAT TESTING </p>
          </div>
        </Link>
      </div>

      <div className="article-content">
        <div className="article-text">
          {" "}
          <h1 className="article-subheading">
            REWIRING YOUR HOME
            <br />
            WHEN DO I NEED A REWIRE?
          </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br />
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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