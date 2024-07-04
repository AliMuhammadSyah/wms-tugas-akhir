const { Users, Laporans, Pemiliks, Bahans, JenisBahans, Satuans } = require('../models');

class LaporansController {
  static async addLaporan(req, res) {
    try {
      const { user_id, pemilik_id } = req.body;

      // Create a new Laporan entry
      const newLaporan = await Laporans.create({
        user_id,
        pemilik_id,
      });

      res.status(201).json({
        success: true,
        message: 'Laporan berhasil dibuat.',
        data: newLaporan,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Terjadi kesalahan saat membuat laporan',
        error: error.message,
      });
    }
  }

  static async getLaporan(req, res) {
    try {
      const { userId, pemilikId } = req.params;

      const laporan = await Laporans.findOne({
        where: { user_id: userId, pemilik_id: pemilikId },
        include: [
          {
            model: Users,
            attributes: ['nama'], // Atur atribut yang ingin diambil dari User
          },
          {
            model: Pemiliks,
            include: [
              {
                model: Bahans,
                attributes: ['nama_bahan'], // Atur atribut yang ingin diambil dari Bahan
              },
            ],
          },
        ],
      });

      if (!laporan) {
        return res.status(404).json({
          message: 'Laporan tidak ditemukan.',
        });
      }

      // Hitung total stok
      const totalStok = await Pemiliks.findOne({
        where: { user_id: userId, bahan_id: laporan.Pemilik.bahan_id },
        include: [Bahans, JenisBahans, Satuans],
      });

      res.status(200).json({
        success: true,
        data: {
          laporan,
          totalStok,
        },
      });
    } catch (error) {
      console.error(error);
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

module.exports = LaporansController;
