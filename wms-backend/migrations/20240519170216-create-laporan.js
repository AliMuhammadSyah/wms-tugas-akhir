"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Laporans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      pemilik_id: {
        type: Sequelize.INTEGER, 
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Laporans");
  },
};
