import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Appliance from "../assets/applicance.svg"
import Appliance2 from "../assets/applicance2.svg"
import Bulb from "../assets/light-bulb.svg"
import Rewire from "../assets/plugs.svg"
import Rewire2 from "../assets/plugs2.svg"
import Bolt from "../assets/bolt.svg"
import Bolt2 from "../assets/bolt2.svg"
import Fuse from "../assets/fuse-box.svg"
import Fuse2 from "../assets/fuse-box2.svg"
import Fault from "../assets/fault.svg"
import Fault2 from "../assets/fault2.svg"
import EICR from "../assets/EICR.svg"
import EICR2 from "../assets/EICR2.svg"

function ServiceIcons(props) {
  return (
    <div className="service-items-wrapper">
      <Link
        to="/domestic-rewires"
        className="service-item-wrapper"
        aria-label="domestic rewires"
      >
        <div className="svg-wrapper">
          <Rewire className="gradient-svg" aria-hidden="true" />
          <Rewire2 className="filled-svg" aria-hidden="true" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text">DOMESTIC REWIRES </p>
        </div>
      </Link>

      <Link
        to="/consumer-unit"
        className="service-item-wrapper"
        aria-label="consumer unit upgrades"
      >
        <div className="svg-wrapper">
          <Fuse className="gradient-svg" aria-hidden="true" />
          <Fuse2 className="filled-svg" aria-hidden="true" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text fuse-box-text">
            CONSUMER UNIT UPGRADES{" "}
          </p>
        </div>
      </Link>

      <Link
        to="/fault-finding"
        className="service-item-wrapper"
        aria-label=" fault finding"
      >
        <div className="svg-wrapper">
          <Fault className="gradient-svg" aria-hidden="true" />
          <Fault2 className="filled-svg" aria-hidden="true" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text ">FAULT FINDING </p>
        </div>
      </Link>

      <Link
        to="/EICRs"
        className="service-item-wrapper"
        aria-label=" electrical installation certificates"
      >
        <div className="svg-wrapper">
          <EICR className="gradient-svg" aria-hidden="true" />
          <EICR2 className="filled-svg" aria-hidden="true" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text">EICRs </p>
        </div>
      </Link>

      <Link
        to="/commercial"
        className="service-item-wrapper"
        aria-label=" commercial services"
      >
        <div className="svg-wrapper">
          <Bolt className="gradient-svg" aria-hidden="true" />
          <Bolt2 className="filled-svg" aria-hidden="true" />
        </div>
        <p className="service-icon-text">COMMERCIAL </p>
      </Link>

      <Link
        to="/appliances"
        className="service-item-wrapper"
        aria-label=" portable appliance testing"
      >
        <div className="svg-wrapper">
          <Appliance className="gradient-svg" aria-hidden="true" />
          <Appliance2 className="filled-svg" aria-hidden="true" />
        </div>
        <div className="svg-text">
          <p className="service-icon-text">PAT TESTING </p>
        </div>
      </Link>
    </div>
  )
}

export default ServiceIcons
