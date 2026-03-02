// Data Access Layer: Implement Sequelize model here
module.exports = (sequelize, DataTypes) => {
  const Incident = sequelize.define("Incident", {
    inc_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    short_des: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lond_des: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    priority_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added_ts: {
        type: Sequelize.DATETIME,
        allowNull: false,
        defaultValue: Sequelize.NOW
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
    tableName: "incident",
    timestamps: false,
    hooks: {
      beforeCreate: (incident) => {
        incident.added_ts = new Date();
        incident.mod_ts = new Date();
      }
    }},)}