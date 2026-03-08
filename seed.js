const { sequelize, UserProv, UserAdmin, Priority, State, Incident } = require("./models");

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

        // 4. Create Priorities
        const highPriority = await Priority.create({
            priority_type: "High",
            sla_time: "4 Hours"
        });
        const lowPriority = await Priority.create({
            priority_type: "Low",
            sla_time: "48 Hours"
        });
        console.log("Created Priorities");

        // 5. Create States
        const openState = await State.create({ state_type: "Open" });
        const resolvedState = await State.create({ state_type: "Resolved" });
        console.log("Created States");

        // 6. Create an Initial Incident
        // Note: Matches 'lond_des' from your Incident.js model
        await Incident.create({
            short_des: "System Slowdown",
            long_des: "The EHR system is experiencing high latency in the oncology wing.",
            priority_id: highPriority.priority_id,
            state_id: openState.state_id,
            user_id: newAdmin.user_id
        });
        console.log("Created Initial Incident");

        console.log("\nDatabase seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("\nError seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();