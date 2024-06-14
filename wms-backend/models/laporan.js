"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Laporans extends Model {
    static associate(models) {
      Laporans.belongsTo(models.Bahans, {
        foreignKey: "bahan_id",
      });
    }
  }
  Laporans.init(
    {
      user_id: DataTypes.INTEGER,
      bahan_id: DataTypes.INTEGER,
      tanggal_dibuat: DataTypes.DATE,
      status: DataTypes.STRING,
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
