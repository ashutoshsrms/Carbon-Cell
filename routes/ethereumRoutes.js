/**
 * @swagger
 * /api/ethereum/balance/{address}:
 *   get:
 *     summary: Get Ethereum account balance
 *     description: Retrieve the balance of a specified Ethereum account.
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         description: Ethereum address for which to retrieve the balance.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The Ethereum account balance.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 balance:
 *                   type: string
 *                   description: The account balance in Ether.
 *       '400':
 *         description: Invalid Ethereum address provided.
 *       '500':
 *         description: Internal server error.
 */

const express = require("express");
const router = express.Router();
const EthereumController = require("../controllers/EthereumController");

router.get("/balance/:address", EthereumController.getAccountBalance);

module.exports = router;
