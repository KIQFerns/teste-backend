// utils/errorHandler.js

/**
 * Função para enviar erro de forma padronizada.
 * @param {Object} res - Resposta do express.
 * @param {Number} statusCode - Código de status HTTP.
 * @param {String} message - Mensagem de erro.
 */
const sendErrorResponse = (res, statusCode, message) => {
  return res.status(statusCode).send({
    message,
  });
};

module.exports = sendErrorResponse;
