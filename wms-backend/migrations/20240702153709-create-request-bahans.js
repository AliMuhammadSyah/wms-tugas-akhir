'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RequestBahans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_bahan_baru: {
        type: Sequelize.STRING
      },
      nama_bahan_baru: {
        type: Sequelize.STRING
      },
      nama_satuan_baru: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RequestBahans');
  }
};