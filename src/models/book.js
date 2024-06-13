const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    minlength: 2,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
  },
  release: {
    type: Number,
    required: true,
    minlength: 2,
  },
});

module.exports = mongoose.model('book', bookSchema);