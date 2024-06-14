const { Model } = require("sequelize");
const { Bahans, Laporans } = require("../models");

class BahansController {
  static async addNamaBahan(req, res) {
    try {
      const { nama_bahan, jenis_bahan_id, satuan_id } = req.body;

      const checkNamaBahan = await Materials.findOne({
        where: {
          nama_bahan: nama_bahan,
        },
      });

      if (checkNamaBahan) {
        return res.status(409).json({
          succes: false,
          message: `Nama Bahan ${nama_bahan} sudah ada, tambahkan nama bahan yang lain!`,
        });
      }

      const bahan = await Bahans.create({
        jenis_bahan_id: jenis_bahan_id,
        nama_bahan: nama_bahan,
        satuan_id: satuan_id,
      });

      if (bahan) {
        res.status(200).json({
          success: true,
          massage: `Berhasil menambahkan nama bahan ${nama_bahan}!`,
          data: bahan,
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getBahans(req, res) {
    try {
      const bahan = await Bahans.findAll({
        include: [
          { model: JenisBahans, attributes: ["nama_jenis"] },
          { model: Satuan, attributes: ["nama_satuan"] },
        ],
      });

      if (Bahans.length == 0) {
        return res.status(404).json({
          success: false,
          message: "Berhasil mangambil semua data nama bahan!",
          data: bahan,
        });
      }

      res.status(200).json({
        success: true,
        message: "Berhasil mengambil semua data nama bahan!",
        data: bahan,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getBahanById(req, res) {
    try {
      const id = req.params.id;

      const bahan = await Bahans.findOne({
        include: [{ model: JenisBahan, attributes: ["nama_jenis"] }],
        where: {
          id: id,
        },
      });
      
      if (!material) {
        return res.status(404).json({
          success: false,
          message: `Nama bahan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      res.status(200).json({
        succes: true,
        message: `Berhasil mengambil data nama bahan dengan id ${id}!`,
        data: bahan,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBahan(req, res) {
    try {
      const id = req.params.id;
      const nama_bahan = req.body.nama_bahan;

      const bahan = await Bahans.findOne({
        where: {
          id: id,
        },
      });

      if (!bahan) {
        return res.return(404).json({
          success: false,
          message: `Nama bahan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      const updatedBahan = await Bahans.update(
        {
          nama_bahan: nama_bahan,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (updatedBahan) {
        res.status(200).json({
          status: false,
          message: `Berhasil mengupdate nama bahan dengan id ${id}!`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBahan(req, res) {
    try {
      const id = req.params.id;

      const bahan = await Bahans.findOne({
        where: {
          id: id,
        },
      });

      if (!bahan) {
        return res.status(404).json({
          success: false,
          message: `Nama bahan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      await Bahans.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).json({
        success: true,
        message: `Berhasil menghapus data nama bahan dengan id ${id}!`,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BahansController;