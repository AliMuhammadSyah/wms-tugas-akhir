"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bahans extends Model {
    static associate(models)  {
      Bahans.belongsTo(models.JenisBahans, { foreignKey: "jenis_bahan_id" });
      Bahans.belongsTo(models.Satuans, { foreignKey: "satuan_id" });      
      Bahans.belongsTo(models.Pemiliks, { foreignKey: "jenis_bahan_id" });
      Bahans.hasMany(models.Pemiliks, { foreignKey: 'bahan_id'});
      };
    }
  

  Bahans.init(
    {
     jenis_bahan_id: DataTypes.INTEGER,
     satuan_id: DataTypes.INTEGER,
     nama_bahan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bahans",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Bahans;
};
