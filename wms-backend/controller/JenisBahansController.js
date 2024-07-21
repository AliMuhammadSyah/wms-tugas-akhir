const { JenisBahans, Bahans } = require("../models");

class JenisBahansController {
  static async addJenisBahan(req, res) {
    try {
      const { nama_jenis } = req.body;

      const checkNamaJenisBahan = await JenisBahans.findOne({
        where: {
          nama_jenis: nama_jenis,
        },
      });

      if (checkNamaJenisBahan) {
        return res.status(409).json({
          success: false,
          message:
            "Nama jenis bahan sudah ada, tambahkan nama jenis bahan yang lain!",
        });
      }

      const data = await JenisBahans.create({
        nama_jenis: nama_jenis,
      });

      if (data) {
        res.status(200).json({
          success: true,
          message: "Berhasil menambahkan nama jenis bahan baru!",
          data: data,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan saat menambahkan nama jenis bahan!",
      });
    }
  }

  static async getJenisBahans(req, res) {
    try {
      const jenisBahans = await JenisBahans.findAll();

      if (jenisBahans.length == 0) {
        return res.status(404).json({
          success: false,
          message: "Data nama jenis bahan masih kosong!",
        });
      }

      res.status(200).json({
        success: true,
        message: `Berhasil mengambil data jenis bahan`,
        data: jenisBahans,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getJenisBahanById(req, res) {
    try {
      const id = req.params.id;

      const checkNamaJenis = await JenisBahans.findOne({
        where: {
          id: id,
        },
      });

      if (!checkNamaJenis) {
        return res.status(404).json({
          success: false,
          message: `Nama jenis bahan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      res.status(200).json({
        success: true,
        message: `Berhasil mengambil data jenis bahan dengan id ${id}`,
        data: checkNamaJenis,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateJenisBahans(req, res) {
    try {
      const id = req.params.id;
      const nama_jenis = req.body.nama_jenis;

      const jenisBahan = await JenisBahans.findOne({
        where: {
          id: id,
        },
      });

      if (!jenisBahan) {
        return res.status(404).json({
          success: false,
          message: `Nama jenis bahan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      await JenisBahans.update(
        {
          nama_jenis: nama_jenis,
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({
        success: true,
        message: `Berhasil update data nama jenis bahan dengan id ${id}!`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteJenisBahan(req, res) {
    try {
      const id = req.params.id;

      const jenisBahan = await JenisBahans.findOne({
        where: {
          id: id,
        },
      });

      if (!jenisBahan) {
        return res.status(404).json({
          success: false,
          message: `Nama jenis bahan dengan id ${id} tidak dapat ditemukan!`,
        });
      }

      await jenisBahan.destroy({
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

module.exports = JenisBahansController;
