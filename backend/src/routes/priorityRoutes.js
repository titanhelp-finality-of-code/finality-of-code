// Application Layer: Define routes here
const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");

// GET /api/priority - Returns all priority levels for dropdown menus
router.get("/", ticketController.getAllPriorities);

// GET /api/priority/:id - Returns a specific priority level by ID
router.get("/:id", ticketController.getPriorityById);

module.exports = router;
