import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "../components/image"
import classNames from "classnames"

import "../../node_modules/font-awesome/css/font-awesome.css"
import Icon from "../assets/beetroot-logo-vector-invert.svg"
import MenuIcon from "../assets/menuicon.svg"
import CloseIcon from "../assets/close-icon.svg"
import {
  Dialog,
  DialogActions,
  DialogButton,
  DialogContent,
  DialogTitle,
} from "@rmwc/dialog"
import "@material/button/mdc-button.scss"
// import "@material/dialog/mdc-dialog.scss"

const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <Link to="/" className="top-logo">
        <Img src="../images/logo.png" alt="header logo" />
      </Link>
      <nav className={classNames("nav", { "nav-open": open })}>
        <ul className="nav-list">
          <CloseIcon className="close-icon" onClick={() => setOpen(false)} />
          <Icon className="mobile-nav-logo" />

          <Link to="/" className="nav-list-item">
            <li> HOME </li>
          </Link>

          <li className="nav-list-item">
            <Link to="/latest-recipes">RECIPES</Link>
            <div class="nav-box">
              <Link to="/latest-recipes" className="nav-box-list">
                <p>LATEST RECIPES</p>
              </Link>
              <Link to="/" className="nav-box-list">
                <p>SIMPLE RECIPES</p>
              </Link>
              <Link to="/" className="nav-box-list">
                <p>RECIPES BY COURSE</p>
              </Link>
            </div>
            {/* </div> //end of box */}
          </li>

          {/* <BeetrootLogoVector /> */}

          <Link to="/about" className="nav-list-item">
            <li>ABOUT</li>
          </Link>

          <Link to="/contact" className="nav-list-item">
            <li>CONTACT </li>
          </Link>
          <div className="nav-icon-bar">
            <Link to="https://en-gb.facebook.com/">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="https://twitter.com/?lang=en-gb">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </ul>
      </nav>
      <div className="web-icons">
        <i
          className="far fa-heart heart-icon"
          onClick={() => setDialogOpen(true)}
        ></i>
      </div>
      <div className="mob-icons">
        <i className="fas fa-heart heart-icon"></i>
        <MenuIcon
          className="menu-icon"
          onClick={() => setOpen(true)}
        ></MenuIcon>
      </div>
      <div className="dialog-box">
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <div className="dialog-logo-container">
            <Img
              src="../images/beetroot-logo-vector.png"
              className="dialog-logo"
            />
          </div>
          <h3 className="dialog-title">A NEW RECIPE EVERY DAY!</h3>
          <div className="dialog-content">
            Sign-up to hear about our newest recipes, posts, and exciting
            competitions.
            <div className="email-entry">
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                className="email-input"
              />
            </div>
          </div>
          <DialogActions>
            <DialogButton action="close">No Thanks</DialogButton>
            <DialogButton action="accept" isDefaultAction>
              Yes Please!
            </DialogButton>
          </DialogActions>
          {/* <div className="sign-up-box">
          <div className="email-entry">
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              className="email-input"
            />

            <div className="subscribe-button">
              <p>Subscribe!</p>
            </div>
          </div>
        </div> */}
        </Dialog>
      </div>
    </header>
  )
}

export default Header
