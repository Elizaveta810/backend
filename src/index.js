const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const userSchema = require("./models/user");
const bookSchema = require("./models/book");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose.connect(MONGO_URL);

const app = express();

// app.use(cors());

app.use(bodyParser.json());

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World!!!!!!");

  if (!userRouter || !bookRouter) {
    response.statusCode = 404;
    response.statusMessage = "Bad Request";
    response.setHeader("Content-Type", "application/json");
    response.write("Читателя или книги по такому адресу не существует");
    response.end();
    return;
  }
};
app.get("/", helloWorld);
app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST!");
});

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
