const Book = require("../models/book");

// Получим все книги из БД
const getBooks = (req, res) => {
  Book.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим книгу по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  Book.findById(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book is not found");
      } else {
        res.status(200).send(book);
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Создаем книгу
const createBook = (req, res) => {
  const data = req.body;
  Book.create(data)
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Обновляем книгу
const updateBook = (req, res) => {
  const { book_id } = req.params;
  const data = req.body;
  Book.findByIdAndUpdate(book_id, data, { new: true, runValidators: true })
    .then((book) => {
      if (!book) {
        response.status(404).send("Book is not found");
      } else {
        res.status(200).send(book);
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем книгу
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book is not found");
      } else {
        res.status(200).send("Done");
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};