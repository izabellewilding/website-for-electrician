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
// import "@material/top-app-bar/dist/mdc.top-app-bar.css"
// import { SimpleTopAppBar } from "@rmwc/top-app-bar"

import Appliance from "../assets/applicance.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Bolt from "../assets/bolt.svg"
import Fuse from "../assets/fuse-box.svg"
import Fault from "../assets/fault.svg"
import EICR from "../assets/EICR.svg"
// import HeaderSvg from "../assets/special.svg"

const Header = props => {
  const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  console.warn(props.className)
  let arrowIcon

  if (open) {
    arrowIcon = "keyboard_arrow_right"
  } else {
    arrowIcon = "keyboard_arrow_left"
  }

  let contactArrowIcon

  if (contactOpen) {
    contactArrowIcon = "keyboard_arrow_right"
  } else {
    contactArrowIcon = "keyboard_arrow_left"
  }

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Button
            icon={arrowIcon}
            label="Menu"
            dense
            onClick={() => {
              setOpen(!open)
            }}
            className="mobile-menu-button header-buttons"
          />
          <Button
            icon={contactArrowIcon}
            label="Contact"
            dense
            onClick={() => setContactOpen(!contactOpen)}
            className="contact-button header-buttons"
          />
          <Button
            icon={arrowIcon}
            dense
            className="services-button header-buttons"
            onClick={() => {
              setOpen(!open)
            }}
            label="Services"
          />
        </nav>
      </header>
      <Drawer
        dir="rtl"
        className="contact-form"
        modal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      ></Drawer>

      <Drawer
        dir="rtl"
        modal
        open={open}
        className={classNames("service-drawer", {
          "service-drawer-active": open,
        })}
      >
        <div className="service-items-wrapper">
          <div className="rewire-wrapper">
            <Rewire className="service-svg" />
            <p className="service-icon-text">DOMESTIC REWIRES </p>
          </div>
          <div className="fuse-box-wrapper">
            <Fuse className="service-svg" />
            <p className="service-icon-text fuse-box-text">
              CONSUMER UNIT UPGRADES{" "}
            </p>
          </div>
          <div className="fault-wrapper">
            <Fault className="service-svg" />
            <p className="service-icon-text ">FAULT FINDING </p>
          </div>

          <div className="EICR-wrapper">
            <EICR className="service-svg" />
            <p className="service-icon-text">EICRs </p>
          </div>

          <div className="bolt-wrapper">
            <Bolt className="service-svg" />
            <p className="service-icon-text">COMMERCIAL </p>
          </div>

          <div className="appliance-svg-wrapper">
            <Appliance className="service-svg" />
            <p className="service-icon-text">PAT TESTING </p>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header
