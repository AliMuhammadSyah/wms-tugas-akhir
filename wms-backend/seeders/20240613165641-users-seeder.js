"use strict";

const fs = require("fs");
const { encryptPassword } = require("../helpers/bcrypt");
require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const parseData = JSON.parse(fs.readFileSync("./user-seeds.json"));

    const payloads = [];

    parseData.map((values) => {
      const { role_id, nama, no_hp, username, password, alamat } = values;

      const hashPassword = encryptPassword(password);

      payloads.push({
        role_id: role_id,
        nama: nama,
        no_hp: no_hp,
        username: username,
        password: hashPassword,
        alamat: alamat,
      });
    });

    await queryInterface.bulkInsert("Users", payloads, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
