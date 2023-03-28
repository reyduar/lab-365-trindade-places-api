const { Router } = require("express");
const { check } = require("express-validator");
const { eUsuarioLider } = require("../middlewares/validar-novo-usuario");
const { usuarioIdExiste } = require("../middlewares/validar-id-usuario");
const {
  getUsers,
  newUser,
  updateUser,
  deleteUser,
} = require("../controllers/usuario.controller");

const router = new Router();

/**
 * @openapi
 * /api/usuarios/:
 *  get:
 *    summary: Obter usuários
 *    tags:
 *        - Usuario
 *    parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *           default: 20
 *           description: limite de usuários para obter
 *    responses:
 *      200:
 *        description: OK
 */
router.get("/", getUsers);

/**
 * @openapi
 * /api/usuarios/:
 *  post:
 *    tags:
 *        - Usuario
 *    summary: Criar novo usuário
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CriarUsuarioInput'
 *    responses:
 *      201:
 *        description: Usuário criado com sucesso
 *      406:
 *        description: Está faltando dados para concluir a operação
 */
router.post(
  "/",
  [
    eUsuarioLider,
    check("nome").isLength({ min: 4 }),
    check("senha").isLength({ min: 4 }),
  ],
  newUser
);

/**
 * @openapi
 * /api/usuarios/{id}:
 *  put:
 *    tags:
 *        - Usuario
 *    summary: Atualizar usuário
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Usuario Mongo Id Object
 *        schema:
 *           type: string
 *           default: 640be68a33e01cdf3f66f74e
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CriarUsuarioInput'
 *    responses:
 *      200:
 *        description: Usuário atualizado com sucesso
 *      406:
 *        description: Está faltando dados para concluir a operação
 */
router.put(
  "/:id",
  [
    check("id", "MongoId invalido").isMongoId(),
    check("id").custom(usuarioIdExiste),
  ],
  updateUser
);

/**
 * @openapi
 * /api/usuarios/{id}:
 *  delete:
 *    tags:
 *        - Usuario
 *    summary: Deletar usuário
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Usuario Mongo Id Object
 *        schema:
 *           type: string
 *           default: 640be68a33e01cdf3f66f74e
 *    responses:
 *      200:
 *        description: Usuário deletado com sucesso
 *      406:
 *        description: Está faltando dados para concluir a operação
 */
router.delete(
  "/:id",
  [
    check("id", "MongoId invalido").isMongoId(),
    check("id").custom(usuarioIdExiste),
  ],
  deleteUser
);

module.exports = router;
