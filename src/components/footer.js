import React from "react"
import "./footer.scss"
import ContactDetails from "./contact-details"

const Footer = props => {
  return (
    <footer className="footer">
      {" "}
      <div className="address-wrapper">
        <h3>Location</h3>
        <address>Galchen fach, Maenclochog, Pembrokeshire, SA66 7JX</address>
      </div>
      <div className="footer-contact-wrapper">
        <h3>Contact</h3>
        <ContactDetails location="footer" />
      </div>
    </footer>
  )
}

export default Footer
