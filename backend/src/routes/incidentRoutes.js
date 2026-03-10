// Application Layer: Define routes here
const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");

// Search Route (Must be above /:id)
router.get("/search", ticketController.searchTickets);

// GET /api/incidents - Fetch all tickets (with Priority, State, and User data)
router.get("/", ticketController.getAllTickets);

// GET /api/incidents/:id - Fetch a specific ticket by its ID
router.get("/:id", ticketController.getTicketById);

// POST /api/incidents - Create a new ticket (expects JSON in req.body)
router.post("/", ticketController.createTicket);

// PUT /api/incidents/:id - Update an existing ticket (e.g., changing status)
router.put("/:id", ticketController.updateTicket);

// DELETE /api/incidents/:id - Remove a ticket from the database
router.delete("/:id", ticketController.deleteTicket);

module.exports = router;