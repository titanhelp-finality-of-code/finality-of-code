// Application Layer: Define routes here
const express = require("express");
const router = express.Router();
const { UserAdmin } = require("../models"); // Import the initialized model

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await UserAdmin.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a user (Accessible at DELETE /api/users/:id)
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await UserAdmin.destroy({
            where: { user_id: req.params.id }
        });

        if (deleted) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;