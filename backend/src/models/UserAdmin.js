// Data Access Layer: Implement Sequelize model here
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserAdmin = sequelize.define('UserAdmin', {
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prov_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
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
    tableName: 'user_admin'
});

module.exports = UserAdmin;