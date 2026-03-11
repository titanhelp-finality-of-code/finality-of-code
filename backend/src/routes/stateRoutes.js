// Application Layer: Define routes here
const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");

// GET /api/states - Returns all possible incident states (Open, Resolved, etc.)
router.get("/", ticketController.getAllStates);

// GET /api/states/:id - Fetches a specific state by its primary key
router.get("/:id", ticketController.getStateById);

module.exports = router;
