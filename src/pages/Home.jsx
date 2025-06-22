import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        setBooks(res.data);
        console.log("Fetched books:", res.data);
      })
      .catch((err) => console.error("Error fetching books:", err));
  };

  const deleteBook = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`http://localhost:5000/api/books/${id}`);
      console.log("Delete response:", res.data);
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      console.error("Error deleting book:", err.response?.data || err.message);
      alert("Failed to delete the book. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <h1>📚 Available Books</h1>
      {books.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading books...</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.description?.split(" ")[2]}</p>
              <p><strong>Price:</strong> ₹{book.price}</p>
              <p className="rating">
                ⭐ {Math.floor(Math.random() * 2) + 4}.{Math.floor(Math.random() * 10)}
              </p>
              <button className="delete-btn" onClick={() => deleteBook(book.id)}>
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
