const fs = require("fs");
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const payloads = [];
    const data = JSON.parse(fs.readFileSync("./role-seeds.json"));

    data.map((values) => {
      const { nama_role } = values;

      payloads.push({
        nama_role: nama_role,
      });
    });

    await queryInterface.bulkInsert("roles", payloads, {});
  },

  async down(queryInterface, Sequelize) {},
};
