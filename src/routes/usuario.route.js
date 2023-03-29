const { Router } = require("express");
const {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuario.controller");

const router = new Router();

/**
 * @openapi
 * /api/usuarios/:
 *  get:
 *    summary: Obter usuários
 *    tags:
 *        - Usuario
 *    responses:
 *      200:
 *        description: OK
 *      404:
 *        description: Usuários não encontrados
 */
router.get("/", getUsuarios);

/**
 * @openapi
 * /api/usuarios/{id}:
 *  get:
 *    tags:
 *        - Usuario
 *    summary: obtener usuário por id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Usuario Id
 *        schema:
 *           type: integer
 *           default: 1
 *    responses:
 *      200:
 *        description: Usuário atualizado com sucesso
 *      404:
 *        description: Usuário não encontrado
 */
router.get("/:id", getUsuario);
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
 *      500:
 *        description: Error ao criar o novo usuário
 */
router.post("/", createUsuario);

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
 *        description: Usuario Id
 *        schema:
 *           type: integer
 *           default: 1
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CriarUsuarioInput'
 *    responses:
 *      200:
 *        description: Usuário atualizado com sucesso
 *      404:
 *        description: Usuário não encontrado
 *      500:
 *        description: Error ao atualizar usuário
 */
router.put("/:id", updateUsuario);

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
 *        description: Usuario Id
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
router.delete("/:id", deleteUsuario);

module.exports = router;
