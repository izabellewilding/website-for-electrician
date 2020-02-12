import React from "React"

import classnames from "classnames"

import Bulb from "../assets/idea.svg"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"
import "./contact-details.scss"

const ContactDetails = ({ location }) => {
  return (
    <div
      className={classnames("contact-details", {
        footerContactDetails: location === "footer",
        headerContactDeatils: location === "header",
        mobileContactDetails: location === "mobile",
      })}
    >
      <p>alex@alexwildingelectricalservices.com</p>{" "}
      <Email className="contact-svg" />
      <p className="phone-numb">07527 929222</p>{" "}
      <Mobile className="contact-svg" />
      <p className="phone-numb">01437 532307</p>{" "}
      <Telephone className="contact-svg" />
    </div>
  )
}

export default ContactDetails
