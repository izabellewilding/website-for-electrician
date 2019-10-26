import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "../components/image"
import classNames from "classnames"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"
import Appliance from "../assets/applicance.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Bolt from "../assets/bolt.svg"
import Fuse from "../assets/fuse-box.svg"
import Fault from "../assets/fault.svg"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <Icon
          icon="keyboard_arrow_down"
          className={classNames("arrow-down", { "arrow-down-off": open })}
          onClick={() => setOpen(true)}
        />
        <Icon
          icon="keyboard_arrow_up"
          className={classNames("arrow-up-off", { "arrow-up": open })}
          onClick={() => setOpen(false)}
        />

        {/* end header dropdown */}
      </header>

      <div
        className={classNames("header-dropdown", {
          "header-dropdown-active": open,
        })}
      >
        <h1 className="services-title">OUR SERVICES</h1>
        <div className="service-items-wrapper">
          <div className="appliance-svg-wrapper">
            <Appliance className="service-svg" />
          </div>
          <div className="light-bulb-wrapper">
            <Bulb className="service-svg" />
          </div>
          <div className="rewire-wrapper">
            <Rewire className="service-svg" />
          </div>
          <div className="bolt-wrapper">
            <Bolt className="service-svg" />
          </div>
          <div className="fuse-box-wrapper">
            <Fuse className="service-svg" />
          </div>
          <div className="fault-wrapper">
            <Fault className="service-svg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
