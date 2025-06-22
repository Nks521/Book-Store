import React from "react";
import { Link } from "react-router-dom";
import "./Bookcard.css"; // separate styling file

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>₹{book.price}</p>
      <Link to={`/book/${book._id}`} className="details-btn">View Details</Link>
    </div>
  );
};

export default BookCard;
