'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Satuans extends Model {
    static associate(models) {
      Satuans.hasMany(models.Bahans, { foreignKey: "satuan_id" });
      Satuans.hasMany(models.Pemiliks, { foreignKey: "satuan_id" });
    }
  }
  Satuans.init({
    nama_satuan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Satuans',
    freezeTableName : true,
    createdAt : false,
    updatedAt : false,
  });
  return Satuans;
};