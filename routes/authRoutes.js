/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: User with this email already exists
 *       '500':
 *         description: Internal server error
 *
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login as a user
 *     description: Login with email and password to obtain a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: JWT token obtained successfully
 *       '401':
 *         description: Invalid email or password
 *       '500':
 *         description: Internal server error
 *
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout a user
 *     description: Logout the currently authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Logout successful
 *       '401':
 *         description: Unauthorized - No token provided
 *       '403':
 *         description: Invalid token
 * 
 * @swagger
 * /api/user/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve all users from the database.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized - No token provided
 *       '403':
 *         description: Invalid token
 *       '500':
 *         description: Internal server error
 */

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", AuthMiddleware.verifyToken, UserController.logout);

router.get("/users", AuthMiddleware.verifyToken, UserController.getAllUsers);


module.exports = router;
