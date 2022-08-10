import { useState, useEffect } from "react";

export default function Form(props) {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [validForm, setValidForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [form, setForm] = useState({})
  
  useEffect(() => {
    if (form?.title?.length > 3 && form?.description.length > 10) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [form])
  
  async function formSubmit(e) {
    e.preventDefault()
    if (!validForm) {
      setErrorMessage("Not a valid form")
      return
      ;<span></span>
    }
  
  
  try {
    const results = await fetch("https://sql.bocacode.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
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
  
  console.log("this is form =>", form)
}
  

    const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
      <div className="App">

        <form onSubmit={formSubmit}>
          <h1>Comments</h1>
          <label>Title</label>
  
          <input
            type="text"
            name="title"
            //required
            value={form.title}
            onChange={updateForm}
          />
          <h3>{form.title}</h3>
          <label>Description</label>
          {/* this is the description */}
          <textarea
            //required
            name="description"
            value={form.description}
            onChange={updateForm}
          ></textarea>
          <h3>{form.description}</h3>
  
          <label>form.author</label>
          <select name="author" value={form.author} onChange={updateForm}>
            <option value="">Choose One</option>
            <option value="Todd Albert">Todd</option>
            <option value="ludwigson">Ludwigson</option>
            <option value="other">Other</option>
          </select>
          <h3>{form.author}</h3>
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
  