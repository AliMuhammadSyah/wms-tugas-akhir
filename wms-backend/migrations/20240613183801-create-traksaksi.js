"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transaksis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bahan_id: {
        type: Sequelize.INTEGER,
      },
      stock_in: {
        type: Sequelize.INTEGER,
      },
      stock_out: {
        type: Sequelize.INTEGER,
      },
      date_in: {
        type: Sequelize.DATE,
      },
      date_out: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Transaksis");
  },
};
