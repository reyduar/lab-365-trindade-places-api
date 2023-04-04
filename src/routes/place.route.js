const { Router } = require("express");
const {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/place.controller");
// const { check } = require("express-validator");
// const { validarCampos } = require("../middlewares/res-express-validator");
const { validPlaceIdParam } = require("../middlewares/validar-place-id");

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
 *      404:
 *        description: Places não encontrados
 */
router.get("/", getPlaces);

/**
 * @openapi
 * /api/places/{id}:
 *  get:
 *    tags:
 *        - Place
 *    summary: Obtener place por id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: place Id
 *        schema:
 *           type: integer
 *           default: 1
 *    responses:
 *      200:
 *        description: Place atualizado com sucesso
 *      404:
 *        description: Place não encontrado
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
 *      500:
 *        description: Error ao criar o novo place
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
 *      404:
 *        description: Place não encontrado
 *      500:
 *        description: Error ao atualizar o place
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
 *        description: Place deletada com sucesso
 *      404:
 *        description: Place não encontrado
 *      500:
 *        description: Error ao deletar o place
 */

router.delete("/:id", deletePlace);

router.all("*", validPlaceIdParam);

module.exports = router;
