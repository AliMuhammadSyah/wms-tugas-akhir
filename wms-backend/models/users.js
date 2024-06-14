'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Roles, { foreignKey: "role_id" });
      Users.hasMany(models.Pemiliks, { foreignKey: "user_id" });
    }
  }
  Users.init({
    role_id: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    freezeTableName : true,
    createdAt : false,
    updatedAt : false,
  });
  return Users;
};