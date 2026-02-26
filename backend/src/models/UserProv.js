// Data Access Layer: Implement Sequelize model here
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserProv = sequelize.define('UserProv', {
    prov_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prov_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sec_level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    added_ts: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    mod_ts: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'user_prov'
});

module.exports = UserProv;
