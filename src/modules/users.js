const fs = require("fs"); //создали модуль для чтения содержимого файла
const path = require("path"); //подключеие модуля, что бы использовать привычные, относительные пути до файла

//ф-я для чтения данных их файла user.json
const getUsers = () => {
  const filePath = path.join(__dirname, "../data/users.json"); //метод join применяем для правильного пути до файла. 1-ым аргументом - значение деректории, в которой лежит файл, 2-ым - относительный путь до файла с пользователем
  return fs.readFileSync(filePath);
};

module.exports = getUsers;
