// Data Access Layer: Implement Sequelize model here
module.exports = (sequelize, DataTypes) => {
  const Priority = sequelize.define("Priority", {
    priority_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    priority_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sla_time: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: "priority",
    timestamps: false
  });

  return Priority;
};
