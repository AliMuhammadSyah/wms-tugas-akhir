'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Traksaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Traksaksi.init({
    user_id: DataTypes.INTEGER,
    bahan_id: DataTypes.INTEGER,
    jumlah_stok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Traksaksi',
  });
  return Traksaksi;
};