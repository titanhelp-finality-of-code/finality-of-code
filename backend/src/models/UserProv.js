// Data Access Layer: Implement Sequelize model here
module.exports = (sequelize, DataTypes) => {
  const UserProv = sequelize.define("UserProv", {
    prov_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    prov_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sec_lev: {
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
    tableName: "user_prov",
    timestamps: false
  });

  return UserProv;
};
