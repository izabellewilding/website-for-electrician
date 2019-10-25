import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
import Img from "../components/image"
import Video from "../components/video"

const Contact = () => (
  <Layout>
    <SEO title="ContactPage" />
    <div className="contact-heading">
      <h1 className="contact-main-title">GET IN TOUCH </h1>

      <h2 className="contact-subtitle">
        {" "}
        We're always on the lookout for new writers, posts, and feedback!{" "}
      </h2>
    </div>

    <div className="contact-form">
      <Img
        alt="oranges"
        className="contact-image"
        src="../images/milkshake-chef.jpg"
      />
      <div className="contact-form-items">
        <h3 className="contact-title">
          {" "}
          Send us your details and a message - we'll get back to you.
        </h3>
        <div className="contact-form-inputs">
          <div className="contact-form-name-entry">
            <p>NAME:</p>
            <input
              type="text"
              className="name-input"
              name="name"
              placeholder="Enter name"
            />
          </div>
          <div className="contact-form-email-entry">
            <p>EMAIL:</p>
            <input
              type="text"
              className="email-input"
              name="email"
              placeholder="Enter email"
            />
          </div>
          <div className="contact-form-message-entry">
            <p>MESSAGE:</p>
            <input
              type="text"
              className="message-input"
              name="message"
              placeholder="Enter message"
            />
          </div>
          <button type="submit" className="submit-button">
            <p>SUBMIT</p>
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
