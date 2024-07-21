'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stoks extends Model {
    static associate(models) {
      Stoks.hasMany(models.Bahans, { foreignKey: "satuan_id" });
    }
  }
  Stoks.init({
    bahan_id: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    tipe_transaksi: DataTypes.ENUM({values: ["masuk", "keluar"]}),
    tanggal: DataTypes.DATE

  }, {
    sequelize,
    modelName: 'Stoks',
    freezeTableName : true,
    createdAt : false,
    updatedAt : false,
  });
  return Stoks;
};