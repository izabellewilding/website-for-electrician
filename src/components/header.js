import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "../components/image"
import classNames from "classnames"
import "@rmwc/icon/icon.css"
import { Icon } from "@rmwc/icon"

const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <Icon icon="keyboard_arrow_down" className="arrow-icon" />
    </header>
  )
}

export default Header
