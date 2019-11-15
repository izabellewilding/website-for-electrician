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
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
  List,
  ListItem,
} from "@rmwc/drawer"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"

const Header = props => {
  // const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  console.warn(props.className)
  // let arrowIcon

  // if (open) {
  //   arrowIcon = "keyboard_arrow_right"
  // } else {
  //   arrowIcon = "keyboard_arrow_left"
  // }

  let contactArrowIcon
  let homeLink

  if (contactOpen) {
    contactArrowIcon = "keyboard_arrow_up"
  } else {
    contactArrowIcon = "keyboard_arrow_down"
  }

  if (props.showLinkToHome) {
    homeLink = (
      <Link to="/" className="back-button">
        <Icon icon="keyboard_arrow_left" className="back-button-arrow" />
      </Link>
    )
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="website-logo-mobile">
            <p className="main-heading2">Alex Wilding</p>
            <p className="sub-heading2">Electrical Services</p>
          </div>

          <div className="mobile-nav-drawer">
            <Drawer
              dir="rtl"
              modal
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
            >
              {/** Set the content back to left-to-right */}
              <DrawerHeader dir="ltr">
                <DrawerTitle>Right Drawer</DrawerTitle>
                <DrawerSubtitle>Subtitle</DrawerSubtitle>
              </DrawerHeader>

              <DrawerContent dir="ltr"></DrawerContent>
            </Drawer>

            <Button onClick={() => setMenuOpen(!menuOpen)} raised>
              Toggle Right Drawer
            </Button>
          </div>

          <div className="header-logo-wrapper">
            {homeLink}
            <Img
              src="../images/eca-registered-member-logo.jpg"
              className="ECA-logo-footer"
            />
            <Img
              src="../images/new-elecsa-logo.jpg"
              className="elesca-logo-footer"
            />
          </div>
          <div className="header-section2">
            <div className="header-contact-details">
              <div className="contact-details">
                <p>alex@alexwildingelectricalservices.com</p>{" "}
                <Email className="contact-svg" />
                <p>07527 929222</p> <Mobile className="contact-svg" />
                <p>01437 532307</p> <Telephone className="contact-svg" />
              </div>
            </div>
          </div>
        </div>
        {/* <nav className="nav">
          <Button
            icon={contactArrowIcon}
            label="Contact"
            outlined
            onClick={() => setContactOpen(!contactOpen)}
            className="contact-button header-buttons"
          />
        </nav> */}
      </header>
    </>
  )
}

export default Header
