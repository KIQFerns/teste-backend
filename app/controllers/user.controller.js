const userService = require("../services/user.service");

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
    res.status(500).send({
      message: err.message || "Erro ao criar usuário.",
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await userService.getAllUsers();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao buscar usuários.",
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await userService.getUserById(req.params.id);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Usuário com id=${req.params.id} não encontrado.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Erro ao buscar usuário com id=" + req.params.id,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const num = await userService.updateUser(req.params.id, req.body);
    if (num == 1) {
      res.send({ message: "Usuário atualizado com sucesso." });
    } else {
      res.send({
        message: `Não foi possível atualizar o usuário com id=${req.params.id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Erro ao atualizar usuário com id=" + req.params.id,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const num = await userService.deleteUser(req.params.id);
    if (num == 1) {
      res.send({ message: "Usuário deletado com sucesso." });
    } else {
      res.send({
        message: `Não foi possível deletar o usuário com id=${req.params.id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Erro ao deletar usuário com id=" + req.params.id,
    });
  }
};

exports.findAllActive = async (req, res) => {
  try {
    const data = await userService.getActiveUsers();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao buscar usuários ativos.",
    });
  }
};
