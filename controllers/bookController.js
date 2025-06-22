const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

exports.addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
};

exports.getBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  await book.update(req.body);
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  await book.destroy();
  res.json({ message: "Book deleted" });
};
