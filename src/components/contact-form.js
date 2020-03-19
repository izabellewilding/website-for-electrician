import React from "react"
import "./contact-form.scss"

const ContactForm = () => {
  return (
    <form
      className="contact-form"
      name="contact"
      action="POST"
      data-netlify="true"
    >
      <div className="field">
        <label className="label">Your name</label>
        <div className="control">
          <input className="input" type="text" name="name" />
        </div>
      </div>{" "}
      <div className="field">
        <label for="email" className="label">
          Email
        </label>
        <div className="control">
          <input className="input" type="email" name="email" />
        </div>
      </div>
      <div className="field text-area">
        <label for="message" className="label ">
          Message
        </label>
        <div className="control">
          <input className="input" type="text" name="Message" />
        </div>
      </div>
      <div className="field">
        <button className="button is-link" type="submit">
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm
