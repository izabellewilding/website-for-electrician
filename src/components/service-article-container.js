import React from "react"
import ServiceIcons from "./service-icons"

function ServiceArticleContainer(props) {
  return (
    <div className="article-layout1">
      {props.children}
      <ServiceIcons />
    </div>
  )
}

export default ServiceArticleContainer
