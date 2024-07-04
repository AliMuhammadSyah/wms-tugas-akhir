const fs = require("fs");
("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const payloads = [];
    const data = JSON.parse(fs.readFileSync("./bahan-seeds.json"));

    data.map((values) => {
      const { jenis_bahan_id, nama_bahan, satuan_id } = values;

      payloads.push({
        jenis_bahan_id,
        nama_bahan: nama_bahan,
        satuan_id,
      });
    });

    await queryInterface.bulkInsert("Bahans", payloads, {});
  },

  async down(queryInterface, Sequelize) {},
};
