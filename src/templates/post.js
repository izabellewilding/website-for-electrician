import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Img from "../components/image"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <article className="recipe-layout1">
        <div className="blog-title">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <h2 className="recipe-subheading">{post.frontmatter.subtitle}</h2>

        <div className="blog-intro">
          <p className="author-info">{post.frontmatter.author} </p>
          <div className="info-box">
            <ul className="top-info">
              <li>
                <b>Duration</b>
              </li>
              <li>
                <b>Quantity</b>
              </li>
              <li>
                <b>Difficulty</b>
              </li>
            </ul>

            <ul className="sub-info">
              <li>{post.frontmatter.duration}</li>
              <li>{post.frontmatter.quantity}</li>
              <li>{post.frontmatter.difficulty}</li>
            </ul>
          </div>
          {/* <!--end of info box--> */}

          <div className="intro-text">
            <p>{post.frontmatter.intro}</p>
          </div>
          {/* <!--end into text--> */}

          <div className="mainImage-container">
            {/* <Img
              className="main-image"
              fileName={post.frontmatter.recipeImage}
              alt="finished dish"
            /> */}
            {/* <p className="image-text">
          Chicken Thighs, Soft Aubergine, and Healthy Brown Chickpeas in a
          classNameic Indian Spiced Yoghurt Sauce
        </p> */}
          </div>
          {/* <!--end main image container--> */}
        </div>
        {/* <!--end blog-intro--> */}

        <div className="recipe-content">
          <div className="recipe-ingredients">
            <h2>
              <strong>Ingredients</strong>
            </h2>

            <ul>
              {post.frontmatter.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
              })}
            </ul>
          </div>
          {/* <!--end recipe ingredients--> */}

          <div className="recipe-method">
            <h2>
              <strong>Method</strong>{" "}
            </h2>

            <ul dangerouslySetInnerHTML={{ __html: post.html }}></ul>
          </div>
          {/* <!--end of recipe method--> */}
        </div>
        {/* <!--end recipe content--> */}
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
        author
        duration
        quantity
        difficulty
        intro
        ingredients
        recipeImage
      }
    }
  }
`
