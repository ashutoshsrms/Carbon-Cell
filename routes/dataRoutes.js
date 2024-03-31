/**
 * @swagger
 * /api/data/entries:
 *   get:
 *     summary: Get entries from the public API
 *     description: Retrieve entries from the public API with optional filtering options.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter entries by category
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of entries
 *     responses:
 *       '200':
 *         description: A list of entries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Entry'
 *       '401':
 *         description: Unauthorized - No token provided
 *       '403':
 *         description: Invalid token
 *       '500':
 *         description: Internal server error
 */

const express = require("express");
const router = express.Router();
const DataController = require("../controllers/dataController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.get("/entries", AuthMiddleware.verifyToken, DataController.getData);

module.exports = router;
