import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookDetails.css"; // separate CSS

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      navigate("/");
    } catch (err) {
      console.error("Failed to delete book:", err);
    }
  };

  if (!book) return <p>Loading book...</p>;

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} />
      <h1>{book.title}</h1>
      <h3>By {book.author}</h3>
      <p>{book.description}</p>
      <p><strong>Price: ₹{book.price}</strong></p>
      <button onClick={handleDelete} className="delete-btn">Delete Book</button>
    </div>
  );
};

export default BookDetails;
