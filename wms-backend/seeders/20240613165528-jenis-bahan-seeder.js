const fs = require("fs");
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const payloads = [];
    const data = JSON.parse(fs.readFileSync("./jenis-bahan-seeds.json"));

    data.map((values) => {
      const { nama_jenis } = values;

      payloads.push({
        nama_jenis: nama_jenis,
      });
    });

    await queryInterface.bulkInsert("JenisBahans", payloads, {});
  },

  async down(queryInterface, Sequelize) {},
};
  