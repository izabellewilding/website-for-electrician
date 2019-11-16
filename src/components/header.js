import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "../components/image"
import classNames from "classnames"
import { List, ListItem } from "@rmwc/list"
import "@material/list/dist/mdc.list.css"

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
        <Icon icon="arrow_back" className="back-button-arrow" />
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
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>

              <DrawerContent dir="ltr">
                {" "}
                <List>
                  <Link to="/" className="menu-link">
                    <ListItem>Home</ListItem>
                  </Link>
                  <Link to="/EICRs" className="menu-link">
                    <ListItem>EICRs</ListItem>
                  </Link>
                  <Link to="/domestic-rewires" className="menu-link">
                    <ListItem>Domestic Rewires</ListItem>
                  </Link>
                  <Link to="/fault-finding" className="menu-link">
                    <ListItem>Fault Finding</ListItem>
                  </Link>
                  <Link to="/commercial" className="menu-link">
                    <ListItem>Commercial</ListItem>
                  </Link>
                  <Link to="/appliances" className="menu-link">
                    <ListItem>PAT Testing</ListItem>
                  </Link>
                  <Link to="/consumer-unit" className="menu-link">
                    <ListItem>Consumer Unit Upgrades</ListItem>
                  </Link>
                </List>
              </DrawerContent>
            </Drawer>

            <Button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              outlined
            >
              MENU
            </Button>
          </div>
          {/* end mobile nav drawer */}
          <div className="header-logo-wrapper">
            {homeLink}
            <Img
              src="../images/eca-registered-member-logo.jpg"
              className="ECA-logo"
              alt="Electrical Contractors Association logo"
            />
            <Img
              src="../images/new-elecsa-logo.jpg"
              className="elesca-logo"
              alt="Elecsa logo"
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
