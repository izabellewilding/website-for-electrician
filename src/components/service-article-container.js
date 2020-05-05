import React from "react"
import { navigate } from "gatsby"
import ServiceIcons from "./service-icons"
import Footer from "../components/footer"
import Header from "../components/header"

const handleHeaderNavigation = navItem => {
  if (navItem === "landing") {
    navigate("/")
  } else if (navItem === "contact") {
    navigate("/#contact")
  } else if (navItem === "services") {
    navigate("/services")
  }
}

const ServiceArticleContainer = props => {
  return (
    <div>
      <Header onNav={handleHeaderNavigation} />
      <div className="article-layout1">
        <div className="mobile-header-padding"></div>
        <ServiceIcons />
        {props.children} <Footer />
      </div>
    </div>
  )
}

export default ServiceArticleContainer
