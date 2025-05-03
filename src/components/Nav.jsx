export default function Nav({ articles, setArticle, selectedArticle }) {
  return (
    <nav>
      {!articles
        ? "No articles"
        : articles.map((a) => (
          <div
            key={a.id}
            className={`article-item ${selectedArticle?.id === a.id ? "selected" : ""}`}
            onClick={() => setArticle(a)}
          >
            {a.title}
        </div>
        ))}
    </nav>
  )
}
