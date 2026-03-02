// Data Access Layer: Define model associations here
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/database");

const sequelize = new Sequelize(config);

const Incident = require("./Incident")(sequelize, DataTypes);
const Priority = require("./Priority")(sequelize, DataTypes);
const State = require("./State")(sequelize, DataTypes);
const UserAdmin = require("./UserAdmin")(sequelize, DataTypes);
const UserProv = require("./UserProv")(sequelize, DataTypes);

// Incident relationships
Incident.belongsTo(Priority, { foreignKey: "priority_id" });
Incident.belongsTo(State, { foreignKey: "state_id" });
Incident.belongsTo(UserAdmin, { foreignKey: "user_id" });

// User relationships
UserAdmin.belongsTo(UserProv, { foreignKey: "prov_id" });

module.exports = {
  sequelize,
  Incident,
  Priority,
  State,
  UserAdmin,
  UserProv
};
