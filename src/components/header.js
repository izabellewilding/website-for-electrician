import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.scss"
import Img from "../components/image"
import { List, ListItem, SimpleListItem } from "@rmwc/list"
import "@material/list/dist/mdc.list.css"

import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"
import "@material/button/dist/mdc.button.css"
import { Button } from "@rmwc/button"
// import "@material/drawer/dist/mdc.drawer.css"
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@rmwc/drawer"
import Email from "../assets/email.svg"
import Mobile from "../assets/smartphone-call.svg"
import Telephone from "../assets/old-telephone-ringing.svg"
import Facebook from "../assets/iconmonstr-facebook-6.svg"
import Instagram from "../assets/iconmonstr-instagram-11.svg"
import Twitter from "../assets/iconmonstr-twitter-1.svg"

const Header = props => {
  // const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  console.warn(props.className)

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
          <div className="header-row1">
            <Link to="/" className="website-logo-wrapper">
              <div className="website-logo">
                <p className="main-heading">Alex Wilding</p>
                <p className="sub-heading">Electrical Services</p>
              </div>
            </Link>

            <div className="icon-bar">
              <a href="https://www.facebook.com/alexwildingelectricalservices/">
                <Facebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/alexwildingelectrical/?hl=en">
                <Instagram className="social-icon" />
              </a>

              <Twitter className="social-icon" />
            </div>

            <div className="header-contact-details">
              <div className="contact-details">
                <p>alex@alexwildingelectricalservices.com</p>{" "}
                <Email className="contact-svg" />
                <p className="phone-numb">07527 929222</p>{" "}
                <Mobile className="contact-svg" />
                <p className="phone-numb">01437 532307</p>{" "}
                <Telephone className="contact-svg" />
              </div>
            </div>
          </div>
          {/* end mobile nav drawer */}
          <div className="header-row2">
            <div className="header-row2-content">
              <div className="header-logo-wrapper">
                {homeLink}
                <Img
                  src="../images/eca-registered-member-logo.jpg"
                  className="ECA-logo"
                  alt="Electrical Contractors Association logo"
                />
                <Img
                  src="../images/new-elecsa-logo.jpg"
                  className="elecsa-logo"
                  alt="Elecsa logo"
                />
              </div>

              <div className="mobile-nav-drawer">
                <Button className="menu-button mobile-hidden-button">
                  <a href="mailto:alex@alexwildingelectricalservices.com">
                    Contact
                  </a>
                </Button>{" "}
                <Link to="/services">
                  <Button outlined className="menu-button mobile-hidden-button">
                    <p>Services</p>
                  </Button>{" "}
                </Link>
                <Button
                  className="menu-button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  outlined
                >
                  MENU
                </Button>
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
                      <Link to="/services" className="menu-link">
                        <ListItem>Services</ListItem>
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
                      <Link to="/new-builds" className="menu-link">
                        <ListItem>New Builds</ListItem>
                      </Link>
                      <Link to="/consumer-unit" className="menu-link">
                        <ListItem>Consumer Unit Upgrades</ListItem>
                      </Link>
                    </List>
                  </DrawerContent>
                </Drawer>
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
