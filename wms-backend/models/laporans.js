"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Laporans extends Model {
    static associate(models) {
      Laporans.belongsTo(models.Users, { foreignKey: 'user_id' });
      Laporans.belongsTo(models.Pemiliks, { foreignKey: 'pemilik_id' });
    }
  }
  Laporans.init(
    {
      user_id: DataTypes.INTEGER,
      pemilik_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Laporans",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Laporans;
};
