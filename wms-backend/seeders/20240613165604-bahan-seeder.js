const fs = require("fs");
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const payloads = [];
    const data = JSON.parse(fs.readFileSync("./bahan-seeds.json"));

    data.map((values) => {
      const { nama_bahan } = values;

      payloads.push({
        nama_bahan: nama_bahan,
      });
    });

    await queryInterface.bulkInsert("Bahans", payloads, {});
  },

  async down(queryInterface, Sequelize) {},
};