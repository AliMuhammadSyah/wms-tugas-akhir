"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pemiliks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      jenis_bahan_id: {
        type: Sequelize.INTEGER,
      },
      bahan_id: {
        type: Sequelize.INTEGER,
      },
      satuan_id: {
        type: Sequelize.INTEGER,
      },
      total_stock: {
        type: Sequelize.INTEGER,
      },
      date_in: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      date_out: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pemiliks");
  },
};
