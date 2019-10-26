import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "../components/image"
import classNames from "classnames"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
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
      <div
        className={classNames("header-dropdown", {
          "header-dropdown-active": open,
        })}
      ></div>
    </header>
  )
}

export default Header
