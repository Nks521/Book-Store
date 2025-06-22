import React, { useState } from "react";
import axios from "axios";
import "./AddBook.css";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/books", formData);
      alert("✅ Book added successfully!");
      setFormData({
        title: "",
        author: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (err) {
      console.error("Add book error:", err);
      alert("❌ Failed to add book.");
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <label>📘 Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>✍️ Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />

        <label>📝 Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>💰 Price (₹):</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />

        <label>🖼️ Image URL:</label>
        <input type="url" name="image" value={formData.image} onChange={handleChange} required />

        <button type="submit">➕ Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
