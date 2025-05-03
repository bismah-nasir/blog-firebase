export default function Article({ article }) {

  // Function to format date
  function formatDate(timestamp) {
    if (!timestamp) return "";
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JS Date
    return date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${formatDate(article.date)}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
