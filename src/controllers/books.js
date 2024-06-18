const Book = require("../models/book");
const bookSchema = require("../models/book");

// Получим все книги из БД
const getBooks = (request, response) => {
  // if (request.schema === bookSchema) {
  return Book.find({})
    .then((data) => {
      if (!data) {
        return response.status(404).send("Такие книги не найдены");
      }
      response.status(200).send(data);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};
// Получим книгу по ID
const getBook = (request, response) => {
  const { book_id } = request.params;
  // if (request.schema === bookSchema) {
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
        return response.status(404).send("Книга не найдена");
      }
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Создаем книгу
const createBook = (request, response) => {
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Обновляем книгу
const updateBook = (request, response) => {
  const { book_id } = request.params;
  const data = { ...request.body };
  // if (request.schema === bookSchema) {
  return Book.findByIdAndUpdate(book_id, data, {
    new: true,
    runValidators: true,
  })
    .then((book) => {
      if (!book) {
        return response.status(404).send("Книга не найдена");
      } else {
        response.status(200).send(book);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};
// Удаляем книгу
const deleteBook = (request, response) => {
  const { book_id } = request.params;
  // if (request.schema === bookSchema) {
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        return response.status(404).send("Книга не найдена");
      } else {
        response.status(200).send("Удалено");
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};
module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
