import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import "./about.css"
import Img from "../components/image"

const About = () => (
  <Layout>
    <SEO title="AboutPage" />
    <h1 class="latest-recipes-heading">
      <b>ABOUT US</b>
    </h1>
    {/* <div class="latest-recipes"> */}
    <div className="about-page-imgs">
      <Img src="../images/rustic-kitchen.jpg" className="about-img1" />
    </div>

    <div class="about-section">
      <div class="about-img">
        <Img src="../images/blog-people.jpg" className="about-img-item" />
      </div>
      {/* //end latest recipes img */}
      <div class="about-textbox">
        {/* <div class="about-infobox">
            <ul class="top-info">
              <li>
                <b>Duration</b>
              </li>
              <li>
                <b>Serves</b>
              </li>
              <li>
                <b>Difficulty</b>
              </li>
            </ul>

            <ul class="sub-info">
              <li>4hr 20min</li>
              <li>6 ice-pops</li>
              <li>Intermediate</li>
            </ul>
          </div> */}

        <p class="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tincidunt et magna at congue. Mauris pellentesque vel arcu sed mollis.
          Quisque turpis tellus, maximus sed nunc at, convallis facilisis risus.
          Sed blandit interdum lacus nec varius.Quisque mattis ultrices arcu
          vitae ornare. In sed justo vel dui feugiat ullamcorper ac non metus.
          Vestibulum efficitur lectus eu augue bibendum, quis pulvinar lacus
          congue. Pellentesque ullamcorper lacus ut magna pretium, nec elementum
          leo commodo.
        </p>
      </div>
      {/* // end of latest recipes text */}
    </div>
  </Layout>
)

export default About
