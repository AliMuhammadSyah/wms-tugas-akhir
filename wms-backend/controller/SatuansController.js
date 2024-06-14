const { where } = require("sequelize");
const { Satuans } = require("../models");

class SatuansController {
  static async addSatuan(req, res) {
    try {
      const { nama_satuan } = req.body;

      const checkNamaSatuan = await Satuans.findOne({
        where: {
          nama_satuan: nama_satuan,
        },
      });

      if (checkNamaSatuan) {
        return res.status(409).json({
          success: false,
          message: `Nama satuan ${nama_satuan} sudah ada, tambahkan nama satuan yang lain!`,
        });
      }

      const satuan = await Satuans.create({
        nama_satuan: nama_satuan,
      });

      if (satuan) {
        res.status(200).json({
          success: true,
          message: `Berhasil menambahkan nama satuan ${nama_satuan}!`,
          data: satuan,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getSatuans(req, res) {
    try {
      const satuans = await Satuans.findAll({
        include: [{ model: Materials, attributes: ["nama_bahan"] }],
      });

      if (satuans.lenght == 0) {
        return res.status(404).json({
          success: false,
          message: "Data nama satuan masih kosong!",
        });
      }

      res.status(200).json({
        success: true,
        message: "Berhasil mengambil semua data nama satuan!",
        data: satuans,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getSatuansById(req, res) {
    try {
      const id = req.params.id;

      const satuan = await Satuans.findOne({
        include: [{ model: Satuans, attributes: ["nama_bahan"] }],
        where: {
          id: id,
        },
      });

      if (!satuan) {
        return res.status(404).json({
          succes: false,
          message: `Nama satuan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      res.status(200).json({
        success: true,
        message: `Berhasil mengambil data nama satuan dengan id ${id}!`,
        data: satuan,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateSatuan(req, res) {
    try {
      const id = req.params.id;
      const nama_satuan = req.body.nama_satuan;

      const satuan = await Satuans.findOne({
        where: {
          id: id,
        },
      });

      if (!satuan) {
        return res.status(404).json({
          success: false,
          message: `Nama satuan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      const updatedSatuan = await Satuans.update(
        {
          nama_satuan: nama_satuan,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (updatedSatuan) {
        res.status(200).json({
          status: false,
          message: `Berhasil mengupdate nama satuan dengan id ${id}!`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteSatuan(req, res) {
    try {
      const id = req.params.id;

      const satuan = await Satuans.findOne({
        where: {
          id: id,
        },
      });

      if (!satuan) {
        return res.status(404).json({
          success: false,
          message: `Nama satuan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      await Satuans.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).json({
        success: true,
        message: `Berhasil menghapus data nama satuan dengan id ${id}!`,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SatuansController;
