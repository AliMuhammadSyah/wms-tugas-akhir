const { Users, Roles } = require("../models");
const { encryptPassword, decryptPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UsersController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const users = await Users.findOne({
        where: {
          username: username,
        },
      });

      if (!users) {
        return res.status(404).json({
          success: false,
          message: "Username tidak terdaftar, lakukan permintaan registrasi!",
        });
      }

      const checkUserPassword = decryptPassword(password, users.password);

      if (!checkUserPassword) {
        return res.status(401).json({
          success: false,
          message: "Password yang anda masukkan salah!",
        });
      }

      const token = generateToken({
        role_id: users.role_id,
        nama: users.nama,
        username: users.username,
        alamat: users.alamat,
      });

      res.status(200).json({
        success: true,
        message: "Login berhasil, mohon tunggu!",
        data: token,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async logout(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  static async register(req, res) {
    try {
      const { role_id, nama, no_hp, username, password, alamat } = req.body;

      const checkUsername = await Users.findOne({
        where: {
          username: username,
        },
      });

      if (checkUsername) {
        return res.status(409).json({
          success: false,
          message: "Username sudah digunakan, gunakan username yang lain!",
        });
      }

      const checkNoHp = await Users.findOne({
        where: {
          no_hp: no_hp,
        },
      });

      if (checkNoHp) {
        return res.status(409).json({
          success: false,
          message: "Nomor hp telah digunakan, gunakan nomor hp yang lain!"
        })
      }

      const hashPassword = encryptPassword(password);

      const users = await Users.create({
        role_id: role_id,
        nama: nama,
        no_hp: no_hp,
        username: username,
        password: hashPassword,
        alamat: alamat,
      });

      if (users) {
        res.status(200).json({
          success: true,
          message: "Registrasi berhasil, redirecting ...",
          data: users,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await Users.findAll({
        attributes: ["id", "role_id", "nama", "no_hp", "username", "alamat"],
        include: [{ model: Roles, attributes: ["nama_role"] }],
      });

      if (users.length == 0) {
        return res.status(404).json({
          success: false,
          message: "User tidak ditemukan!",
        });
      }

      res.status(200).json({
        success: true,
        message: "Berhasil mengambil semua data user",
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getPemiliks(req, res) {
    try {
      const pemilik = await Users.findAll({
        where: {
          role_id: 2,
        },
        attributes: ["id", "role_id", "nama", "no_hp", "username", "alamat"],
        include: [{ model: Roles, attributes: ["nama_role"] }],
      });

      if (pemilik.length == 0) {
        return res.status(404).json({
          success: false,
          message: "User tidak ditemukan!",
        });
      }

      res.status(200).json({
        success: true,
        message: "Berhasil mengambil semua data pemilik!",
        data: pemilik,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserById(req, res) {
    try {
      const id = req.params.id;

      const user = await Users.findOne({
        where: {
          id: id,
        },
        attributes: ["id", "role_id", "nama", "no_hp", "username", "alamat"],
        include: [{ model: Roles, attributes: ["nama_role"] }],
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: `User dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      res.status(200).json({
        success: true,
        message: `Berhasil mengambil user denngan id ${id}!`,
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const { role_id, nama, no_hp, username, password, alamat } = req.body;

      const user = await Users.findOne({
        where: {
          id: id,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: `User dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      const checkUsername = await Users.findOne({
        where: {
          username: username,
        },
      });

      if (checkUsername) {
        return res.status(409).json({
          success: false,
          message: "Username sudah digunakan, gunakan username yang lain!",
        });
      }

      const checkNoHp = await Users.findOne({
        where: {
          no_hp: no_hp,
        },
      });

      if (checkNoHp) {
        return res.status(409).json({
          success: false,
          message: "Nomor hp telah digunakan, gunakan nomor hp yang lain!"
        })
      }

      const newHashPassword = encryptPassword(password);

      const newUserData = await Users.update(
        {
          role_id: role_id,
          nama: nama,
          no_hp: no_hp,
          username: username,
          password: newHashPassword,
          alamat: alamat,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (newUserData) {
        res.status(200).json({
          success: true,
          message: `Berhasil mengupdate data user dengan id ${id}!`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = req.params.id;

      const user = await Users.findOne({
        where: {
          id: id,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: `User dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      const deletedUser = await Users.destroy({
        where: {
          id: id,
        },
      });

      if (deletedUser) {
        res.status(200).json({
          success: true,
          message: `Berhasil menghapus user dengan id ${id}!`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UsersController;
