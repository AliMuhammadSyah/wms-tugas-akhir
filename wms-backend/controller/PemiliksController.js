const { Users, JenisBahans, Bahans, Satuans, Pemiliks } = require("../models");

class PemiliksController {
  static async addPemiliks(req, res) {
    try {
      const { user_id, jenis_bahan_id, bahan_id, satuan_id } = req.body;

      const pemilik = await Pemiliks.create({
        user_id: user_id,
        jenis_bahan_id: jenis_bahan_id,
        bahan_id: bahan_id,
        satuan_id: satuan_id,
        total_stock: 0,
      });

      if (pemilik) {
        res.status(200).json({
          success: true,
          message: `Berhasil menambah bahan mebel!`,
          data: pemilik,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getPemiliks(req, res) {
    try {
      const pemiliks = await Pemiliks.findAll({
        include: [
          { model: Users, attributes: ["id", "role_id", "nama", "no_hp", "username", "alamat"] },
          { model: JenisBahans, attributes: ["nama_jenis"] },
          { model: Bahans, attributes: ["nama_bahan"] },
          { model: Satuans, attributes: ["nama_satuan"] },
        ],
      });

      if (pemiliks.length == 0) {
        return res.status(404).json({
          success: false,
          message: "Data pemilik mebel masih kosong!",
        });
      }

      res.status(200).json({
        success: true,
        message: "Berhasil mengambil semua data pemilik mebel!",
        data: pemiliks,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getPemilikById(req, res) {
    try {
      const id = req.params.id;

      const pemiliks = await Pemiliks.findOne({
        where: {
          id: id,
        },
        include: [
          { model: Users, attributes: ["id", "role_id", "nama", "no_hp", "username", "alamat"] },
          { model: JenisBahans, attributes: ["nama_jenis"] },
          { model: Bahans, attributes: ["nama_bahan"] },
          { model: Satuans, attributes: ["nama_satuan"] },
        ],
      });

      if (pemiliks) {
        return res.status(404).json({
          success: false,
          message: `Data pemilik dengan id ${id} tidak ditemukan!`,
        });
      }

      res.status(200).json({
        success: true,
        message: `Berhasil megambil data pemilik dengan id ${id}`,
        data: pemiliks,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getPemilikByUserId(req, res) {
    try {
      const id = req.params.id;

      const pemiliks = await Pemiliks.findOne({
        where: {
          user_id: id,
        },
        include: [
          { model: Users, attributes: ["id", "role_id", "nama", "no_hp", "username", "alamat"] },
          { model: JenisBahans, attributes: ["nama_jenis"] },
          { model: Bahans, attributes: ["nama_bahan"] },
          { model: Satuans, attributes: ["nama_satuan"] },
        ],
      });

      if (!pemiliks) {
        return res.status(404).json({
          success: false,
          message: `Data pemilik dengan user id ${id} tidak ditemukan!`,
        });
      }

      res.status(200).json({
        success: true,
        message: `Berhasil megambil data pemilik dengan user id ${id}!`,
        data: pemiliks,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async incrementPemilikStock(req, res) {
    try {
      const stockIn = req.body.addStock;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PemiliksController;
