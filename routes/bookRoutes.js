const express = require("express");
const router = express.Router();
const db = require("../models"); // Make sure models/index.js exports Book
const Book = db.Book;

// ✅ GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: "Error fetching books" });
  }
});

// ✅ POST add a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, description, price, image } = req.body;
    const book = await Book.create({ title, author, description, price, image });
    res.status(201).json(book);
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).json({ message: "Error adding book" });
  }
});

// ✅ DELETE a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Book deleted successfully." });
    } else {
      res.status(404).json({ message: "Book not found." });
    }
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error during deletion." });
  }
});

module.exports = router;
