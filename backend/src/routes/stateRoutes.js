// Application Layer: Define routes here
const express = require("express");
const router = express.Router();
const { State } = require("../models");

/**
 * GET /api/states
 * Returns all possible incident states (Open, Resolved, etc.)
 */
router.get("/", async (req, res) => {
    try {
        const states = await State.findAll();
        res.json(states);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * GET /api/states/:id
 * Fetches a specific state by its primary key (state_id)
 */
router.get("/:id", async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (!state) {
            return res.status(404).json({ message: "State not found" });
        }
        res.json(state);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;