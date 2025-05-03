import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut } from "./Auth";
import { useAuthentication } from "../services/authService";
import { fetchArticles, createArticle, deleteArticle, updateArticle, getArticle } from "../services/articleService";
import "./App.css";

export default function App() {
	const [articles, setArticles] = useState([]);
	const [article, setArticle] = useState(null);
	const [writing, setWriting] = useState(false);
	const [searchId, setSearchId] = useState("");
	const user = useAuthentication();
	
	// useEffect(() => {
	// 	console.log("Articles:", articles);
	// }, [articles]);

	useEffect(() => {
		if (user) {
			fetchArticles().then(setArticles);
		}
	}, [user]);

	function addArticle({ title, body }) {
		createArticle({ title, body }).then((article) => {
			setArticle(article);
			setArticles([article, ...articles]);
			setWriting(false);
		});
	}

	async function handleDelete() {
		if (!article) return
		const confirmDelete = window.confirm("Are you sure you want to delete this article?")
		if (!confirmDelete) return
	  
		try {
		  await deleteArticle(article.id)
		  setArticles(articles.filter((a) => a.id !== article.id))
		  setArticle(null)
		} catch (err) {
		  console.error("Delete failed:", err)
		  alert("Failed to delete article.")
		}
	}

	async function handleUpdate() {
		if (!article) return
		const newTitle = prompt("Enter new title:", article.title)
		const newBody = prompt("Enter new body:", article.body)
		if (!newTitle || !newBody) return
	  
		try {
		  await updateArticle(article.id, { title: newTitle, body: newBody })
		  const updated = { ...article, title: newTitle, body: newBody }
		  setArticle(updated)
		  setArticles(
			articles.map((a) => (a.id === article.id ? updated : a))
		  )
		  alert("Updated!")
		} catch (err) {
		  console.error("Update failed:", err)
		  alert("Failed to update article.")
		}
	}

	async function handleSearchById(e) {
		e.preventDefault();
		try {
			const found = await getArticle(searchId.trim());
			console.log("Found article:", found);
			setArticle(found);
		} catch (err) {
			console.error("Search failed:", err);
			alert("Article not found.");
		}
	}


	return (
		<div className="App">

			{/* Header */}
			<header className="app-header">
				<div className="header-left">
					<span className="header-title">Blog</span>
					{user && <button onClick={() => setWriting(true)}>New Article</button>}
				</div>

				<div className="header-right">
					{user && user.photoURL && (
					<img src={user.photoURL} alt="User" className="user-avatar" />
					)}
					{!user ? <SignIn /> : <SignOut />}
				</div>
				</header>

			{/* Search Bar */}
			{user && (
			<form onSubmit={handleSearchById} className="search-bar">
				<input
				type="text"
				placeholder="Search by ID"
				value={searchId}
				onChange={(e) => setSearchId(e.target.value)}
				className="search-input"
				/>
				<button type="submit" className="search-button">Search</button>
			</form>
			)}

			{/* Main Content: Nav and Article */}
			{user && (
				<div className="main-section">
					{/* Left: Nav Bar */}
					<div className="nav-sidebar">
						<h1 className="nav-heading">Articles</h1>
						<Nav articles={articles} setArticle={setArticle} selectedArticle={article} />
					</div>

					{/* Right: Article Entry or Article View */}
					<div className="article-view">
					{writing ? (
						<ArticleEntry addArticle={addArticle} />
					) : (
						<>
						<Article article={article} />
						{article && (
							<div className="action-buttons">
								<button onClick={handleUpdate}>Update</button>
								<button onClick={handleDelete}>Delete</button>
							</div>
						)}
						</>
					)}
					</div>
				</div>
			)}
		</div>
	)
}