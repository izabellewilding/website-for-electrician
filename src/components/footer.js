import React from "react"
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

const ContactForm = () => {
  return (
    <form
      className="contact-form"
      name="contact"
      action="POST"
      data-netlify="true"
    >
      <div className="feilds">
        <div className="field">
          <label className="label">Your name</label>
          <div className="control">
            <input className="input" type="text" name="name" />
          </div>
        </div>{" "}
        <div className="field">
          <label for="email" className="label">
            Email
          </label>
          <div className="control">
            <input className="input" type="email" name="email" />
          </div>
        </div>
        <div className="field">
          <label for="message" className="label ">
            Message
          </label>
          <div className="control">
            <textarea className="input text-area" type="text" name="Message" />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
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
      <Gradient />
      <div className="footerInner">
        <ContactForm />
        <div className="address-wrapper">
          <h3>Location</h3>
          <address>Galchen fach, Maenclochog, Pembrokeshire, SA66 7JX</address>
        </div>
        <div className="footer-contact-wrapper">
          <h3>Contact</h3>
          <ContactDetails location="footer" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
