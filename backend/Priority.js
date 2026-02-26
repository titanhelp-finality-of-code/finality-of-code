// Data Access Layer: Implement Sequelize model here
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Priority = sequelize.define('Priority', {
    priority_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    priority_name: {
        type: DataTypes.STRING,
        allowNull: false
    }   
}, {
    tableName: 'priority',
    timestamps: false
}); 

module.exports = Priority;
