const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "backend", ".env") });
process.env.DB_STORAGE = path.join(__dirname, "backend", "db.db");
const { sequelize, UserProv, UserAdmin, Priority, State, Incident } = require("./backend/src/models");

const seedDatabase = async () => {
    try {
        // 1. Clear and Sync (drops existing tables and recreates them)
        console.log("Cleaning and syncing database...");
        await sequelize.sync({ force: true });

        // 2. Create the Provider first
        const newProv = await UserProv.create({
            prov_type: "Healthcare IT Support",
            sec_lev: 5
        });
        console.log("Created Provider: " + newProv.prov_type);

        // 3. Create the Admin linked to the Provider
        const newAdmin = await UserAdmin.create({
            first_name: "Jane",
            last_name: "Doe",
            email: "jane.doe@healthcare.com",
            password: "securepassword123",
            prov_id: newProv.prov_id
        });
        console.log("Created Admin: " + newAdmin.first_name);

        // 4. Create Priorities (Low / Medium / High)
        const lowPriority = await Priority.create({
            priority_type: "Low",
            sla_time: "48 Hours"
        });
        const mediumPriority = await Priority.create({
            priority_type: "Medium",
            sla_time: "24 Hours"
        });
        const highPriority = await Priority.create({
            priority_type: "High",
            sla_time: "4 Hours"
        });
        console.log("Created Priorities");

        // 5. Create States
        const openState = await State.create({ state_type: "Open" });
        const resolvedState = await State.create({ state_type: "Resolved" });
        console.log("Created States");

        // 6. Create sample Incidents
        await Incident.create({
            short_des: "System Slowdown",
            long_des: "The EHR system is experiencing high latency in the oncology wing.",
            priority_id: highPriority.priority_id,
            state_id: openState.state_id,
            user_id: newAdmin.user_id
        });
        await Incident.create({
            short_des: "Printer not working",
            long_des: "The printer on the 3rd floor is offline and not responding to print jobs.",
            priority_id: mediumPriority.priority_id,
            state_id: openState.state_id,
            user_id: newAdmin.user_id
        });
        await Incident.create({
            short_des: "Password reset request",
            long_des: "User needs password reset for their workstation login.",
            priority_id: lowPriority.priority_id,
            state_id: resolvedState.state_id,
            user_id: newAdmin.user_id
        });
        console.log("Created Sample Incidents");

        console.log("\nDatabase seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("\nError seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();
