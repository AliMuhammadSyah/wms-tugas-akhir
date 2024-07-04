'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequestBahans extends Model {    
    static associate(models) {
      // define association here
    }
  }
  RequestBahans.init({
    jenis_bahan_baru: DataTypes.STRING,
    nama_bahan_baru: DataTypes.STRING,
    nama_satuan_baru: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RequestBahans',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return RequestBahans;
};