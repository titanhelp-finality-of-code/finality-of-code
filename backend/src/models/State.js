// Data Access Layer: Implement Sequelize model here
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("State", {
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
    tableName: "state",
    timestamps: false
  });

  return State;
};
