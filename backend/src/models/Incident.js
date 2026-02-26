// Data Access Layer: Implement Sequelize model here
const Sequelize = require('sequelize');
const sequelize = require('../backend/database');

const Incident = sequelize.define('Incident', {
    inc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    priority_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    short_desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    long_desc: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    added_ts: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    mod_ts: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, {    
    tableName: 'incident',
});

module.exports = Incident;