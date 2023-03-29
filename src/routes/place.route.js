const { Router } = require("express");
const {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/place.controller");

const router = new Router();

/**
 * @openapi
 * /api/places/:
 *  get:
 *    summary: Obter places
 *    tags:
 *        - Place
 *    responses:
 *      200:
 *        description: OK
 */
router.get("/", getPlaces);

/**
 * @openapi
 * /api/places/{id}:
 *  get:
 *    tags:
 *        - Place
 *    summary: obtener usuário por id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Place Id
 *        schema:
 *           type: integer
 *           default: 1
 *    responses:
 *      200:
 *        description: Place atualizado com sucesso
 *      406:
 *        description: Está faltando dados para concluir a operação
 */
router.get("/:id", getPlace);
/**
 * @openapi
 * /api/places/:
 *  post:
 *    tags:
 *        - Place
 *    summary: Criar novo place
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreatePlaceInput'
 *    responses:
 *      201:
 *        description: Place criado com sucesso
 *      406:
 *        description: Está faltando dados para concluir a operação
 */
router.post("/", createPlace);

/**
 * @openapi
 * /api/places/{id}:
 *  put:
 *    tags:
 *        - Place
 *    summary: Atualizar place
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Place Id
 *        schema:
 *           type: integer
 *           default: 1
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreatePlaceInput'
 *    responses:
 *      200:
 *        description: Place atualizado com sucesso
 *      406:
 *        description: Está faltando dados para concluir a operação
 */
router.put("/:id", updatePlace);

/**
 * @openapi
 * /api/places/{id}:
 *  delete:
 *    tags:
 *        - Place
 *    summary: Deletar place
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Place Id
 *        schema:
 *           type: integer
 *           default: 1
 *    responses:
 *      200:
 *        description: Place deletado com sucesso
 *      406:
 *        description: Está faltando dados para concluir a operação
 */
router.delete("/:id", deletePlace);

module.exports = router;
