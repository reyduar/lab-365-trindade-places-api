const { Router } = require("express");
const { userLogin } = require("../controllers/session.controller");

const router = new Router();

/**
 * @openapi
 * /api/session/login/:
 *  post:
 *    tags:
 *        - Session
 *    summary: Login de usuário
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUserInput'
 *    responses:
 *      200:
 *        description: Usuário logado com sucesso
 *      404:
 *        description: username/password incorreta
 *      500:
 *        description: Erro ao login de usuário
 */
router.post("/login", userLogin);

module.exports = router;
