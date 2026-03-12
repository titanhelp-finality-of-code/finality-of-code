// Data Access Layer: Define model associations here
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Incident = require("./Incident")(sequelize, DataTypes);
const Priority = require("./Priority")(sequelize, DataTypes);
const State = require("./State")(sequelize, DataTypes);
const UserAdmin = require("./UserAdmin")(sequelize, DataTypes);
const UserProv = require("./UserProv")(sequelize, DataTypes);

// --- Incident relationships ---
// BelongsTo allows Incident.findOne({ include: [Priority] })
Incident.belongsTo(Priority, { foreignKey: "priority_id" });
Incident.belongsTo(State, { foreignKey: "state_id" });
Incident.belongsTo(UserAdmin, { foreignKey: "user_id" });

// --- Inverse relationships (The "hasMany" side) ---
// This allows UserAdmin.findOne({ include: [Incident] })
UserAdmin.hasMany(Incident, { foreignKey: "user_id" });
State.hasMany(Incident, { foreignKey: "state_id" });
Priority.hasMany(Incident, { foreignKey: "priority_id" });

// --- User relationships ---
UserAdmin.belongsTo(UserProv, { foreignKey: "prov_id" });
UserProv.hasMany(UserAdmin, { foreignKey: "prov_id" });

module.exports = {
  sequelize,
  Incident,
  Priority,
  State,
  UserAdmin,
  UserProv
};
