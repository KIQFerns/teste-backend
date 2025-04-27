const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const createUser = async (userData) => {
  return await User.create(userData);
};

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, data) => {
  return await User.update(data, { where: { id } });
};

const deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};

const getActiveUsers = async () => {
  return await User.findAll({ where: { active: true } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getActiveUsers,
};
