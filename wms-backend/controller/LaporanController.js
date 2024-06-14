const { Laporans, Bahans } = require("../models");

class LaporanController {
  static async getAllLaporan(req, res) {
    try {
      const data = await Laporans.findAll({
        include: [{ model: Bahans, }],
      });

      if (data.length > 0) {
        return res.status(200).json({
          message: "Get laporan berhasil!",
          data: data,
        });
      }

      res.status(204).json({
        message: "Laporan kosong!",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllLaporan(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query; // Mengambil query parameters
      const offset = (page - 1) * limit; // Menghitung offset

      const { count, rows } = await Laporans.findAndCountAll({
        include: [{ model: Bahans }],
        limit: parseInt(limit),
        offset: parseInt(offset),
      });

      if (rows.length > 0) {
        return res.status(200).json({
          message: "Get laporan berhasil!",
          currentPage: parseInt(page),
          totalPages: Math.ceil(count / limit),
          totalItems: count,
          data: rows,
        });
      }

      res.status(204).json({
        message: "Laporan kosong!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil laporan",
        error: error.message,
      });
    }
  }

}

module.exports = LaporanController;
