"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pemiliks extends Model {
    static associate(models) {
      Pemiliks.belongsTo(models.Users, { foreignKey: "user_id" });
      Pemiliks.belongsTo(models.JenisBahans, { foreignKey: "jenis_bahan_id" });
      Pemiliks.belongsTo(models.Bahans, { foreignKey: "bahan_id" });
      Pemiliks.belongsTo(models.Satuans, { foreignKey: "satuan_id" });      
    }
  }
  Pemiliks.init(
    {
      user_id: DataTypes.INTEGER,
      jenis_bahan_id: DataTypes.INTEGER,
      bahan_id: DataTypes.INTEGER,
      satuan_id: DataTypes.INTEGER,
      total_stock: DataTypes.INTEGER,
      date_in: DataTypes.DATE,
      date_out: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Pemiliks",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Pemiliks;
};
