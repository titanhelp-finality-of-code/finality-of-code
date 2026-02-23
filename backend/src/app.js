const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/database");

// Import empty route files (safe)
const incidentRoutes = require("./routes/incidentRoutes");
const userRoutes = require("./routes/userRoutes");
const stateRoutes = require("./routes/stateRoutes");
const priorityRoutes = require("./routes/priorityRoutes");
const app = express();
app.use(cors());
app.use(express.json());

// Mount the empty routes (safe)
app.use("/api/incidents", incidentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/priority", priorityRoutes);

// Load models + associations (DAL teammate will fill these later)
require("./models");

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(3001, () => console.log("Backend running on port 3001"));
});
