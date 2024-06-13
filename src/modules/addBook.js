const fs = require("fs");
const path = require("path");
const books = require("../data/books.json");

const addBook = (id) => {
  const filePath = path.join(__dirname, "../data/favBooks.json");
  const target = books.find((book) => book.id === id);
  fs.writeFileSync(filePath, JSON.stringify(target));
};

module.exports = addBook;