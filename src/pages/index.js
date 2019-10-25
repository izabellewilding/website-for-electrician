import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Img from "../components/image"
import Video from "../components/video"
import classNames from "classnames"

const IndexPage = () => {
  const [viewMore, setViewMore] = useState(false)
  const [viewLess, setViewLess] = useState(false)
  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="page-layout">
        <div className="search-component">
          <Img
            alt="oranges"
            className="search-image"
            src="../images/rustic-kitchen.jpg"
          />
          <div className="search-bar">
            <p>
              <bold>Find a Recipe</bold>
            </p>
            <input type="text" className="search-input" />
            <button type="submit" className="search-button">
              <i className="fa fa-search"></i>
            </button>
            <Link className="search-link" to="/latest-recipes">
              NEED SOME INSPIRATION?...
            </Link>
          </div>
          {/* end of search bar */}
        </div>
        {/* end search component */}

        <article className="featured-items">
          <div className="featured-layout1-title">
            <h2>Staff Picks and Trending Articles</h2>
          </div>

          <div className="featured-row1">
            <Link to="/apple-pie-recipe" className="featured-card1">
              <Img
                src="../images/apple-pie-landscape.jpg"
                alt="apple pie ingredients"
                className="featured-img"
                type="small"
              />
              <p className="card1-numb">1.</p>
              <div className="card1-box">
                <p>The Ultimate Apple Pie Recipe</p>
              </div>
            </Link>

            <Link to="/" className="featured-card2">
              <Img
                src="../images/spices-on-table.jpg"
                alt="spices on the table"
                className="featured-img"
                type="small"
              />

              <p className="card2-numb">2.</p>
              <div className="card2-box">
                <p>How to Make the Most of your Spices</p>
              </div>
            </Link>
          </div>

          <div className="featured-row2">
            <Link to="/" className="featured-card1">
              <Img
                src="../images/cocktail-summer.jpg"
                alt="summer cocktails"
                className="featured-img"
                type="small"
              />
              <p className="card1-numb">3.</p>
              <div className="card1-box">
                <p>Cocktail Trends - Summer 2019</p>
              </div>
            </Link>

            <Link to="/macaron-recipe" className="featured-card2 hidden-mob">
              <Img
                src="../images/green-macrons.jpg"
                alt="spices on the table"
                className="featured-img hidden-mob"
                type="small"
              />

              <p className="card2-numb hidden-mob">4.</p>
              <div className="card2-box hidden-mob">
                <p className="hidden-mob">Guide to the Perfect Macaroons</p>
              </div>
            </Link>

            <Link to="/ice-pop-recipe" className="featured-card1 last-img">
              <Img
                src="../images/ice-pops-sq.jpg"
                alt="ice pops"
                className="featured-img"
                type="small"
              />

              <p className="card1-numb hidden-mob">5.</p>
              <div className="card1-box">
                <p>Ice-Pops made using Foraged Blackberries</p>
              </div>
            </Link>
          </div>
          {/* end of featured row 2 */}

          {/* end of video wrapper */}
        </article>
        <div className="video-section">
          <div className="video-container">
            <h2 className="video-title">Our Latest Videos</h2>
            <div className="video1">
              <Video videoSrcURL="https://www.youtube.com/embed/6C7Ml-AP1ZI" />
            </div>
            <div
              className={classNames("video2 hidden-mob", {
                "extra-videos": viewMore,
              })}
            >
              <Video videoSrcURL="https://www.youtube.com/embed/TOyxNvTLk1M" />
            </div>
            <div
              className={classNames("video3 hidden-mob", {
                "extra-videos": viewMore,
              })}
            >
              <Video videoSrcURL="https://www.youtube.com/embed/RJ4OoBRv5qs" />
            </div>
            <div className="button-div">
              <button
                className={classNames("more-vid-btn", {
                  "more-vid-btn-off": viewMore,
                })}
                onClick={() => setViewMore(true)}
              >
                <p className="more-videos">MORE VIDEOS</p>
                {/* <p className="lessVideos">LESS VIDEOS</p> */}
              </button>
              <button
                className={classNames("less-vid-btn", {
                  "less-vid-btn-on": viewMore,
                })}
                onClick={() => setViewMore(false)}
              >
                <p className="lessVideos">LESS VIDEOS</p>
              </button>
            </div>
          </div>
        </div>
        {/* end of featured items */}
      </div>
    </Layout>
  )
}
export default IndexPage
