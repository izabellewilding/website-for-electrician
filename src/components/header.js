import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "../components/image"
import classNames from "classnames"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"
import "@material/fab/dist/mdc.fab.css"
import { Fab } from "@rmwc/fab"
import "@material/button/dist/mdc.button.css"
import { Button } from "@rmwc/button"
import "@material/drawer/dist/mdc.drawer.css"
import { Drawer } from "@rmwc/drawer"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"

const Header = props => {
  // const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  console.warn(props.className)
  // let arrowIcon

  // if (open) {
  //   arrowIcon = "keyboard_arrow_right"
  // } else {
  //   arrowIcon = "keyboard_arrow_left"
  // }

  let contactArrowIcon

  if (contactOpen) {
    contactArrowIcon = "keyboard_arrow_up"
  } else {
    contactArrowIcon = "keyboard_arrow_down"
  }

  return (
    <>
      <header className="header">
        <div className="website-logo-mobile">
          <p className="main-heading2">Alex Wilding</p>
          <p className="sub-heading2">Electrical Services</p>{" "}
        </div>

        <nav className="nav">
          <Button
            icon={contactArrowIcon}
            label="Contact"
            outlined
            onClick={() => setContactOpen(!contactOpen)}
            className="contact-button header-buttons"
          />
        </nav>
      </header>

      <div
        className={classNames("header-contact-details", {
          "header-contact-details-open": contactOpen,
        })}
      >
        <div className="contact-details">
          <Email className="contact-svg" />
          <p>alex@alexwildingelectricalservices.com</p>
          <Mobile className="contact-svg" />
          <p>07527 929222</p>
          <Telephone className="contact-svg" />
          <p>01437 532307</p>
        </div>
      </div>
    </>
  )
}

export default Header
