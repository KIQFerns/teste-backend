// middlewares/validateUser.js

const { body, validationResult } = require("express-validator");
const sendErrorResponse = require("../utils/errorHandler");

const validateUser = [
  body("name").notEmpty().withMessage("Nome é obrigatório."),
  body("email").isEmail().withMessage("E-mail inválido."),
  body("active")
    .optional()
    .isBoolean()
    .withMessage("Active deve ser true ou false."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendErrorResponse(
        res,
        400,
        "Erros de validação: " +
          errors
            .array()
            .map((err) => err.msg)
            .join(", ")
      );
    }
    next();
  },
];

module.exports = validateUser;
