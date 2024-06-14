"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JenisBahans extends Model {
    static associate(models) {
      JenisBahans.hasMany(models.Bahans, { foreignKey: "jenis_bahan_id" });
      JenisBahans.hasMany(models.Pemiliks, { foreignKey: "jenis_bahan_id" });
    }
  }
  JenisBahans.init(
    {
      nama_jenis: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JenisBahans",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return JenisBahans;
};
