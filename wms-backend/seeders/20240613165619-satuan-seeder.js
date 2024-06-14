const fs = require("fs");
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const payloads = [];
    const data = JSON.parse(fs.readFileSync("./user-seeds.json"));

    data.map((values) => {
      const { role_id, nama, no_hp, username, password, alamat } = values;

      payloads.push({
        role_id: role_id,
        nama: nama,
        no_hp: no_hp,
        username: username,
        password: password,
        alamat:alamat,
      });
    });

    await queryInterface.bulkInsert("Users", payloads, {});
  },

  async down(queryInterface, Sequelize) {},
};
