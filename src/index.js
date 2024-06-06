const http = require("http");
const getUsers = require("./modules/users");
const { URL } = require("url");

const server = http.createServer((request, response) => {
  const ipAddress = "http://127.0.0.1";
  const url = new URL(request.url, ipAddress);
  const helloValue = url.searchParams.get("hello");

  if (helloValue) {
    response.statusCode = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: text/plain";
    response.write(`hello, ${helloValue}`);
    response.end();
    return;
  }

  if (request.url === "/users") {
    response.statusCode = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: aplication/json";
    response.write(getUsers());
    response.end();

    return;
  }

  if (request.url === "/hello") {
    response.statusCode = 400;
    response.statusMessage = "Bad Request";
    response.setHeader("Content-Type", "text/plain");
    response.write(`Enter a name`);
    response.end();
    return;
  }

  if (request.url === "/") {
    response.statusCode = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: text/plain";
    response.write("Hello, world");
    response.end();
    return;
  }

  response.statusCode = 500;
  response.statusMessage = "Ok";
  response.header = "Content-Type: text/plain";
  response.write("{}");
  response.end();

  // Написать обработчик запроса:
  // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
  // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
  // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
  // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
  // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
