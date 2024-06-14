"use strict";

const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const parseData = JSON.parse(fs.readFileSync("./satuan-seeds.json"));

    const payloads = [];

    parseData.map((values) => {
      const { nama_satuan } = values;

      payloads.push({
        nama_satuan: nama_satuan,
      });
    });

    await queryInterface.bulkInsert("Satuans", payloads, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Satuans", null, {});
  },
};
