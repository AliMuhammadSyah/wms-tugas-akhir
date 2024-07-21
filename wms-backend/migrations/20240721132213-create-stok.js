'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stoks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bahan_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipe_transaksi: {
        type: Sequelize.ENUM('masuk', 'keluar'),
        allowNull: false
      },
      tanggal: {
        type: Sequelize.NOW,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stoks');
  }
};