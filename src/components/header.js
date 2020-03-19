import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.scss"
import Img from "../components/image"
import { List, ListItem, SimpleListItem } from "@rmwc/list"
import cx from "classnames"
import "./base.scss"
import { Button } from "@rmwc/button"
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@rmwc/drawer"
import Facebook from "../assets/iconmonstr-facebook-6.svg"
import Instagram from "../assets/iconmonstr-instagram-11.svg"
import Twitter from "../assets/iconmonstr-twitter-1.svg"
import Clock from "../assets/iconmonstr-clock-thin.svg"
import styled from "styled-components"
import ContactDetails from "./contact-details"

const Header = ({ ...props }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  console.warn(props.className)

  let homeLink

  // if (props.showLinkToHome) {
  //   homeLink = (
  //     <Link to="/" className="back-button">
  //       <Icon icon="arrow_back" className="back-button-arrow" />
  //     </Link>
  //   )
  // }

  const StlyedDrawer = styled(Drawer)`
    top: 0;
    bottom: 0;
    left: 0;
  `
  return (
    <>
      <div className="top-section">
        <div className="top-section-content">
          <p>Electrician in Pembrokeshire </p> <Clock className="clock-svg" />
          <p>08:00 - 21:00 Mon - Sat, 09:00 - 17:00 Sun</p>
        </div>
      </div>
      <header className="header">
        <div className="header-content">
          <div className="header-row1">
            <Link to="/" className="website-logo-wrapper">
              <div className="website-logo">
                <p className="main-heading">Alex Wilding</p>
                <p className="sub-heading">Electrical Services</p>
              </div>
            </Link>

            {/* icon bar */}
            <div className="icon-bar">
              <a
                href="https://www.facebook.com/alexwildingelectricalservices/"
                target="_blank"
              >
                <Facebook className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/alexwildingelectrical/?hl=en"
                target="_blank"
              >
                <Instagram className="social-icon" />
              </a>
            </div>
            <ContactDetails location="header" />
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

              <div className="nav">
                <Button className="nav-button mobile-hidden-button">
                  <a href="mailto:alex@alexwildingelectricalservices.com">
                    Contact
                  </a>
                </Button>{" "}
                <Link to="/electrical-services-pembrokeshire">
                  <Button outlined className="nav-button mobile-hidden-button">
                    Services
                  </Button>{" "}
                </Link>
                <Button
                  className="nav button menu-button"
                  onClick={() => {
                    if (menuOpen) {
                      setMenuOpen(false)
                    } else {
                      setMenuOpen(true)
                    }
                  }}
                  outlined
                >
                  MENU
                </Button>
                <StlyedDrawer
                  dir="ltr"
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
                      <Link
                        to="/electrical-services-pembrokeshire"
                        className="menu-link"
                      >
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
                </StlyedDrawer>
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
