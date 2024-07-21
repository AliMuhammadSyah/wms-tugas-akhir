const { Stoks } = require("../models/stoks");

class StokController {
  static async addStok(req, res) {
    try {
      const { bahan_id, jumlah, tipe_transaksi } = req.body;
      const stok = await Stoks.create({
        bahan_id,
        jumlah,
        tipe_transaksi,
      });
      res.status(201).json(stok);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = StokController;
