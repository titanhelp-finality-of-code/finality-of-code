// Application Layer: Define routes here
const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");

// GET /api/users - Returns all users (password field excluded)
router.get("/", ticketController.getAllUsers);

// DELETE /api/users/:id - Removes a user by ID
router.delete("/:id", ticketController.deleteUser);

module.exports = router;
