// Data Access Layer: Define model associations here
const UserAdmin = require('./UserAdmin');
const UserProv = require('./UserProv');
const State = require('./State');
const Priority = require('./Priority');
const Incident = require('./Incident');

// Example associations (adjust as needed)
UserAdmin.belongsTo(UserProv, { foreignKey: 'prov_id' });
Incident.belongsTo(UserAdmin, { foreignKey: 'user_id' });
Incident.belongsTo(State, { foreignKey: 'state_id' });
Incident.belongsTo(Priority, { foreignKey: 'priority_id' });

module.exports = {
    UserAdmin,
    UserProv,
    State,
    Priority,
    Incident
};

