import React from "react"
import Layout from "../components/layout"
import "./thanks.scss"

const Thanks = () => {
  return (
    <Layout>
      <div className="mobile-header-padding"></div>
      <div className="thanks-wrapper">
        <p
          style={{
            padding: "1rem",
            fontSize: "2.5rem",
            color: "#102e50",
            lineHeight: "3rem",
          }}
        >
          Thank you for your message
        </p>
        <p
          style={{
            padding: "1rem",
            fontSize: "1.75rem",
            lineHeight: 1.75,
            color: "#32323c",
          }}
        >
          We'll be in touch as soon as possible
        </p>
      </div>
    </Layout>
  )
}

export default Thanks
