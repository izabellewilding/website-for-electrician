import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import "./latest-recipes.css"
import Img from "../components/image"

const LatestRecipes = () => (
  <Layout>
    <SEO title="LatestRecipesPage" />
    <h1 className="latest-recipes-heading">OUR LATEST RECIPES</h1>
    <article className="latest-recipes-main-items">
      <div className="latest-recipes">
        <Link to="/ice-pop-recipe" className="latest-recipes-item1">
          <div className="latest-recipe-img-container">
            <Img
              src="../images/ice-pops.jpg"
              alt="ice-pops"
              className="latest-recipe-img"
            />
            <div className="lr-subtitle1">
              <p>Seasonal</p>
            </div>
            <div className="lr-subtitle2">
              <p>blackberry</p>
            </div>
            <div className="lr-subtitle3">
              <p>ice-pops</p>
            </div>
          </div>
          {/* //end latest recipes img container */}

          <div className="recipe-description1">
            <h2 className="recipe-title"> Blackberry ice-cream pops</h2>
            <div className="latest-recipes-infobox">
              <ul className="top-info">
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

              <ul className="sub-info">
                <li>4hr 20min</li>
                <li>6 ice-pops</li>
                <li>Intermediate</li>
              </ul>
            </div>

            <p className="recipe-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque tincidunt et magna at congue. Mauris pellentesque vel
              arcu sed mollis. Quisque turpis tellus, maximus sed nunc at,
              convallis facilisis risus. Sed blandit interdum lacus nec
              varius.Quisque mattis ultrices arcu vitae ornare.{" "}
            </p>
            <p className="recipe-text hidden-mob-text">
              {" "}
              In sed justo vel dui feugiat ullamcorper ac non metus. Vestibulum
              efficitur lectus eu augue bibendum, quis pulvinar lacus congue.
            </p>
          </div>
          {/* // end of latest recipes text */}
        </Link>
        {/* // end latest recipes item1 */}
        <div className="latest-recipes-item2">
          <div className="latest-recipe-img-container2">
            <Img
              alt="fig-bowl"
              classNameName="latest-recipe-img"
              src="../images/fig-bowl.jpg"
            />
            <div className="lr2-subtitle1">
              <p>Mediterranean</p>
            </div>
            <div className="lr2-subtitle2">
              <p>mezze</p>
            </div>
            <div className="lr2-subtitle3">
              <p>platter</p>
            </div>
          </div>
          {/* // end latest recipes img2 */}
          <div className="recipe-description2">
            <h2 className="recipe-title"> Mediterranean Fig Sharing Platter</h2>
            <div className="latest-recipes-infobox">
              <ul className="top-info">
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

              <ul className="sub-info">
                <li>1hr 30min</li>
                <li>4 people</li>
                <li>Easy</li>
              </ul>
            </div>
            {/* end latest recipes infobox */}
            <div className="recipe-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque tincidunt et magna at congue. Mauris pellentesque
                vel arcu sed mollis. Quisque turpis tellus, maximus sed nunc at,
                convallis facilisis risus. Sed blandit interdum lacus nec
                varius.
              </p>
              <br />
              <p>
                Vestibulum efficitur lectus eu augue bibendum, quis pulvinar
                lacus congue. Pellentesque ullamcorper lacus ut magna pretium,
                nec elementum leo commodo.
              </p>
            </div>
            {/* //end latest recipes text */}
          </div>
          {/* //end latest recipes textbox */}
        </div>
        {/* //end latest recipes item2 */}
      </div>
      {/* //end latest recipes */}
    </article>
  </Layout>
)

export default LatestRecipes
