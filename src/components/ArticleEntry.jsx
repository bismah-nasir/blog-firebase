import { useState } from "react"

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied")
    } else {
      addArticle({ title, body })
    }
  }

  return (
    <div className="article-entry">
      <form onSubmit={submit} className="entry-form">
        {error && <p className="error-message">{error}</p>}

        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          className="form-textarea"
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  )
}