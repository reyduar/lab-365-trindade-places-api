const { Router } = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { validJWT } = require("../middlewares/valid-jwt");
const { validUserPassword } = require("../middlewares/valid-user-password");

const router = new Router();

/**
 * @openapi
 * /api/users/:
 *  get:
 *    summary: Obter usuários
 *    tags:
 *        - User
 *    responses:
 *      200:
 *        description: OK
 *      404:
 *        description: Usuários não encontrados
 */
router.get("/", validJWT, getUsers);

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *    tags:
 *        - User
 *    summary: obtener usuário por id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User Id
 *        schema:
 *           type: integer
 *           default: 1
 *    responses:
 *      200:
 *        description: Usuário atualizado com sucesso
 *      404:
 *        description: Usuário não encontrado
 */
router.get("/:id", validJWT, getUser);
/**
 * @openapi
 * /api/users/:
 *  post:
 *    tags:
 *        - User
 *    summary: Criar novo usuário
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUserInput'
 *    responses:
 *      201:
 *        description: Usuário criado com sucesso
 *      500:
 *        description: Error ao Create o novo usuário
 */
router.post("/", [validJWT, validUserPassword], createUser);

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *    tags:
 *        - User
 *    summary: Atualizar usuário
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User Id
 *        schema:
 *           type: integer
 *           default: 1
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUserInput'
 *    responses:
 *      200:
 *        description: Usuário atualizado com sucesso
 *      404:
 *        description: Usuário não encontrado
 *      500:
 *        description: Error ao atualizar usuário
 */
router.put("/:id", [validJWT, validUserPassword], updateUser);

/**
 * @openapi
 * /api/users/{id}:
 *  delete:
 *    tags:
 *        - User
 *    summary: Deletar usuário
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User Id
 *        schema:
 *           type: integer
 *           default: 1
 *    responses:
 *      200:
 *        description: Usuário deletado com sucesso
 *      404:
 *        description: Usuário não encontrado
 *      500:
 *        description: Error ao deletar usuário
 */
router.delete("/:id", validJWT, deleteUser);

module.exports = router;
