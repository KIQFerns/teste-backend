const userService = require("../services/user.service");
const sendErrorResponse = require("../utils/errorHandler");

exports.create = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      active: req.body.active || false,
    };

    const data = await userService.createUser(user);
    res.status(201).send(data);
  } catch (err) {
    sendErrorResponse(res, 500, err.message || "Erro ao criar usuário.");
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await userService.getAllUsers();
    res.send(data);
  } catch (err) {
    sendErrorResponse(res, 500, err.message || "Erro ao buscar usuários.");
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await userService.getUserById(req.params.id);
    if (data) {
      res.send(data);
    } else {
      sendErrorResponse(
        res,
        404,
        `Usuário com id=${req.params.id} não encontrado.`
      );
    }
  } catch (err) {
    sendErrorResponse(res, 500, err.message || "Erro ao buscar o usuário.");
  }
};

exports.update = async (req, res) => {
  try {
    const data = await userService.updateUser(req.params.id, req.body);
    res.send(data);
  } catch (err) {
    sendErrorResponse(
      res,
      500,
      `Erro ao atualizar o usuário com id=${req.params.id}.`
    );
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await userService.deleteUser(req.params.id);
    res.send({ message: "Usuário deletado com sucesso." });
  } catch (err) {
    sendErrorResponse(
      res,
      500,
      `Erro ao deletar o usuário com id=${req.params.id}.`
    );
  }
};

exports.findAllActive = async (req, res) => {
  try {
    const data = await userService.getActiveUsers();
    res.send(data);
  } catch (err) {
    sendErrorResponse(
      res,
      500,
      err.message || "Erro ao buscar usuários ativos."
    );
  }
};
