// Data Access Layer: Implement Sequelize model here
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const State = sequelize.define('State', {
    state_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    state_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'state',
    timestamps: false
});

module.exports = State;
