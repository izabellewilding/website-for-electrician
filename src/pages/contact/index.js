import React from "react"
import { navigate } from "gatsby"
import "../../components/footer.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      className="contact-form"
      name="contact"
      method="post"
      action="/thanks"
      data-netlify="true"
      netlify-honeypot="bot-filed"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label for="bot-field">
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </div>{" "}
      <div className="fields">
        <div className="field">
          <label className="label" for="name" htmlFor={"name"}>
            Your name
          </label>
          {/* <div className="control"> */}
          <input
            className="input"
            type={"text"}
            name={"name"}
            onChange={handleChange}
          />
          {/* </div> */}
        </div>{" "}
        <div className="field">
          <label className="label" htmlFor={"email"}>
            Email
          </label>
          <br />
          {/* <div className="control"> */}
          <input
            className="input"
            onChange={handleChange}
            type={"email"}
            name={"email"}
          />
          {/* </div> */}
        </div>
        <div className="field">
          <label htmlFor="message" className="label ">
            Message
          </label>
          {/* <div className="control"> */}
          <textarea
            className="input text-area"
            id={"message"}
            required={true}
            name={"message"}
            onChange={handleChange}
          />
          {/* </div> */}
        </div>
        <div className="field">
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
