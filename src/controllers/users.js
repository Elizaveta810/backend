const User = require("../models/user");
const userSchema = require("../models/user");

// Получим всех пользователей из БД
const getUsers = (request, response) => {
  // if (request.schema === userSchema) {
  return User.find({})
    .then((data) => {
      if (!data) {
        return response.status(404).send("Читатели не найдены");
      }
      response.status(200).send(data);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
  // } else {
  //   response.status(404).send("Читатели не найдены");
  // }
};

// Получим пользователя по ID
const getUser = (request, response) => {
  const { user_id } = request.params;
  // if (request.schema === userSchema) {
  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        return response.status(404).send("Читатель не найден");
      }
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Создаем пользователя
const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Обновляем пользователя
const updateUser = (request, response) => {
  const { user_id } = request.params;
  const data = request.body;
  // if (request.schema === userSchema) {
  return User.findByIdAndUpdate(user_id, data, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        return response.status(404).send("Читатель не найден");
      }
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Удаляем пользователя
const deleteUser = (request, response) => {
  const { user_id } = request.params;
  // if (request.schema === userSchema) {
  return User.findByIdAndDelete(user_id)
    .then((user) => {
      if (!user) {
        return response.status(404).send("Читетель не найден");
      } else {
        response.status(200).send("Удалено");
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
