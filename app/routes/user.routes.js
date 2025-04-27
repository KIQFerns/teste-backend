module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const validateUser = require("../middlewares/validateUser");

  var router = require("express").Router();

  // Create a new User
  router.post("/", validateUser, users.create);

  // Retrieve all Users
  router.get("/", users.findAll);

  // Retrieve all active Users
  router.get("/active", users.findAllActive);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update a User with id
  router.put("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  app.use("/api/users", router);
};
