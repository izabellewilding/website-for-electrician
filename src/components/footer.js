import React from "react"
import { navigate } from "gatsby-link"

import "./footer.scss"
import ContactDetails from "./contact-details"
import styled from "styled-components"

const Gradient = styled.div`
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgb(42, 67, 101)),
    to(#00192db5)
  );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      className="contact-form"
      name="contact"
      action="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-filed"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="feilds">
        <div className="field">
          <label className="label" for="name">
            Your name
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="field">
          <label className="label" for="email">
            Email
          </label>
          <br />
          <div className="control">
            <input
              className="input"
              onChange={handleChange}
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className="field">
          <label for="message" className="label ">
            Message
          </label>
          <div className="control">
            <textarea
              className="input text-area"
              type="text"
              name="message"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

const Footer = props => {
  return (
    <footer className="footer">
      {" "}
      {/* <Gradient /> */}
      <div className="footerInner">
        <div className="contact-form-wrapper">
          <h2>Contact</h2>
          <h3 className="contact-subheading">
            Have a question?
            <br />
            Send us a message and we'll get back as soon as possible...
          </h3>
          <ContactForm />
        </div>
        {/* <div className="contact-specifics">
          <address>Galchen fach, Maenclochog, Pembrokeshire, SA66 7JX</address>
          <ContactDetails location="footer" />
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
