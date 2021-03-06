import React from "react"
import { navigate } from "gatsby"
import "../components/footer.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>{" "}
        <div className="fields">
          <div className="field">
            <label className="label" htmlFor={"name"}>
              Your name
            </label>
            {/* <div className="control"> */}
            <input
              className="input"
              type={"text"}
              name={"name"}
              onChange={this.handleChange}
              id={"name"}
              required={true}
            />
            {/* </div> */}
          </div>{" "}
          <div className="field">
            <label className="label" htmlFor={"number"}>
              Phone Number
            </label>
            <br />
            {/* <div className="control"> */}
            <input
              className="input"
              type={"tel"}
              name={"phone"}
              onChange={this.handleChange}
              id={"phone"}
              required={true}
            />
            {/* </div> */}
          </div>
          <div className="field">
            <label className="label" htmlFor={"email"}>
              Email
            </label>
            <br />
            {/* <div className="control"> */}
            <input
              className="input"
              type={"email"}
              name={"email"}
              onChange={this.handleChange}
              id={"email"}
              required={false}
            />
            {/* </div> */}
          </div>
          <div className="field">
            <label className="label" htmlFor="message">
              Message
            </label>
            {/* <div className="control"> */}
            <textarea
              className="input text-area"
              name={"message"}
              onChange={this.handleChange}
              id={"message"}
              required={true}
            />
            {/* </div> */}
          </div>
          <div className="field">
            <button className="submit-button" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    )
  }
}
