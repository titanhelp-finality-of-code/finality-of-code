const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

// Import empty route files (safe)
const incidentRoutes = require("./routes/incidentRoutes");
const userRoutes = require("./routes/userRoutes");
const stateRoutes = require("./routes/stateRoutes");
const priorityRoutes = require("./routes/priorityRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP", timestamp: new Date() });
});

// Mount the empty routes (safe)
app.use("/api/incidents", incidentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/priority", priorityRoutes);

// Global error handler (optional, but good practice)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message
    });
});

// Load models + associations (DAL teammate will fill these later)
const PORT = process.env.PORT || 3001;

async function startServer() {
    try {
        // Verify the database connection
        await sequelize.authenticate();
        console.log("Database connection verified.");

        // Sync models (alter: false prevents accidental schema wipes in dev)
        await sequelize.sync({ alter: false });
        console.log("Database models synced.");

        app.listen(PORT, () => {
            console.log("Server is live at http://localhost:" + PORT);
            console.log("API Endpoints ready for the front end.");
        });
    } catch (error) {
        console.error("Unable to start the server: ", error);
    }
}

startServer();

module.exports = app;