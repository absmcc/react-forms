import { useEffect } from "react"
import { useState } from "react"
import "./App.css"

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [validForm, setValidForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("Your description")
  const [author, setAuthor] = useState("Todd Albert")

  useEffect(() => {
    if (title.length > 3 && description.length > 10) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [title, description, author])

  async function formSubmit(e) {
    e.preventDefault()
    if (!validForm) {
      setErrorMessage("Not a valid form")
      return
    }

    try {
      //console.log("form submitted")

      // const comment = {
      //   title:title,
      //   description:description,
      //   author:author,
      // }
      // console.log("formSubmitted", comment)
      const comment = {
        title,
        description,
        author,
      }

      const results = await fetch("https://sql.bocacode.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      })
      const data = await results.json()
      setErrorMessage("")
      setValidForm(true)
      setFormSubmitted(true)
      alert("Wow! Submitted")
      //console.log(data)
    } catch (error) {
      console.error(error)
      setErrorMessage(
        "there was an error submittng your comment" + error.toString()
      )
    }
  }

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <h1>Comments</h1>
        <label>Title</label>
        {/* here is the title */}
        <input
          type="text"
          //required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <h3>{title}</h3>
        <label>Description</label>
        {/* this is the description */}
        <textarea
          value={description}
          required
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        ></textarea>
        <h3>{description}</h3>

        <label>Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.ariaValueMin)
          }}
        >
          <option value="">Choose One</option>
          <option value="Todd Albert">Todd</option>
          <option value="ludwigson">Ludwigson</option>
          <option value="other">Other</option>
        </select>
        <h3>{author}</h3>
        {!formSubmitted && <button>Submit Form</button>}

        {errorMessage && (
          <h1>
            There was an error:
            <br />
            {errorMessage}
          </h1>
        )}
      </form>
    </div>
  )
}

export default App
