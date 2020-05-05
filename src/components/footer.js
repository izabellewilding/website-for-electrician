import React from "react"
import { navigate } from "gatsby-link"
import ContactForm from "../pages/contact"
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

const Footer = props => {
  return (
    <footer className="footer">
      {" "}
      <div className="footerInner">
        <div className="contact-form-wrapper">
          <h2>Contact</h2>
          <h3 className="contact-subheading">Have a question?</h3>
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
