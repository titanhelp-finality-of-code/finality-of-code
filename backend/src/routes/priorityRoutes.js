// Application Layer: Define routes here
const express = require("express");
const router = express.Router();
const { Priority } = require("../models");

/**
 * GET /api/priority
 * Returns all priority levels for dropdown menus on the front end
 */
router.get("/", async (req, res) => {
    try {
        const priorities = await Priority.findAll();
        res.json(priorities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * GET /api/priority/:id
 * Returns a specific priority level by its ID
 */
router.get("/:id", async (req, res) => {
    try {
        const priority = await Priority.findByPk(req.params.id);
        if (!priority) {
            return res.status(404).json({ message: "Priority not found" });
        }
        res.json(priority);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;