import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "../components/image"
import classNames from "classnames"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"
import "@material/fab/dist/mdc.fab.css"
import { Fab } from "@rmwc/fab"

import Appliance from "../assets/applicance.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Bolt from "../assets/bolt.svg"
import Fuse from "../assets/fuse-box.svg"
import Fault from "../assets/fault.svg"
import EICR from "../assets/EICR.svg"

const Header = props => {
  const [open, setOpen] = useState(false)

  console.warn(props.className)
  let arrowIcon

  if (open) {
    arrowIcon = "keyboard_arrow_up"
  } else {
    arrowIcon = "keyboard_arrow_down"
  }

  return (
    <>
      <header className="header">
        {/* <div className="quote-button">
          <p>GET A QUOTE</p>
        </div> */}
        <div className="header-logo-wrapper">
          <Img
            src="../images/eca-registered-member-logo.jpg"
            className="ECA-logo-header"
          />
          <Img
            src="../images/new-elecsa-logo.jpg"
            className="elesca-logo-header"
          />
        </div>

        <nav className="nav">
          <Fab
            icon={arrowIcon}
            label="GET QUOTE"
            onClick={() => {
              setOpen(!open)
            }}
            className="quote-button header-buttons"
          />
          <Fab
            icon={arrowIcon}
            className="services-button header-buttons"
            onClick={() => {
              setOpen(!open)
            }}
            label="SERVICES"
          />
          {/* <Icon
            icon={"arrowIcon"}
            className={"arrow-down"}
            onClick={() => {
              setOpen(!open)
            }}
          /> */}
        </nav>
        {/* <Icon
          icon="keyboard_arrow_up"
          className={classNames("arrow-up-off", { "arrow-up": open })}
          onClick={() => setOpen(false)}
        /> */}
        {/* end header dropdown */}
      </header>

      <div
        className={classNames("header-dropdown", {
          "header-dropdown-active": open,
        })}
      >
        {/* <h1 className="services-title">SERVICES</h1> */}
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
      </div>
    </>
  )
}

export default Header
