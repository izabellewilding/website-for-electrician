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
    contactArrowIcon = "keyboard_arrow_right"
  } else {
    contactArrowIcon = "keyboard_arrow_left"
  }

  return (
    <>
      <header className="header">
        <nav className="nav">
          <Button
            icon={contactArrowIcon}
            label="Contact"
            dense
            onClick={() => setContactOpen(!contactOpen)}
            className="contact-button header-buttons"
          />
        </nav>
      </header>
      {/* <Drawer
        dir="rtl"
        className="contact-form"
        modal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      ></Drawer> */}
    </>
  )
}

export default Header
