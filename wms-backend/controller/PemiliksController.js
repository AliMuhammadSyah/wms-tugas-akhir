const { Users, JenisBahans, Bahans, Satuans, Pemiliks, RequestBahans } = require("../models");

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
        date_in: new Date(),
        date_out: new Date(),
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
          {
            model: Users,
            attributes: [
              "id",
              "role_id",
              "nama",
              "no_hp",
              "username",
              "alamat",
            ],
          },
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
          {
            model: Users,
            attributes: [
              "id",
              "role_id",
              "nama",
              "no_hp",
              "username",
              "alamat",
            ],
          },
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
          {
            model: Users,
            attributes: [
              "id",
              "role_id",
              "nama",
              "no_hp",
              "username",
              "alamat",
            ],
          },
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

  static async requestBahan(req, res) {
    try {
      const { nama_jenis, nama_bahan, nama_satuan } = req.body;

      const cariNamaJenisBahan = await JenisBahans.findOne({
        where: {
          nama_jenis: nama_jenis,
        },
      });

      if (cariNamaJenisBahan) {
        return res.status(409).json({
          message:
            "Nama jenis bahan sudah ada, tambahkan nama jenis bahan yang lain!",
        });
      }

      const cariNamaBahan = await Bahans.findOne({
        where: {
          nama_bahan: nama_bahan,
        },
      });

      if (cariNamaBahan) {
        return res.status(409).json({
          message: "Nama bahan sudah ada, tambahkan nama bahan yang lain!",
        });
      }

      const cariNamaSatuan = await Satuans.findOne({
        where: {
          nama_satuan: nama_satuan,
        },
      });

      if (cariNamaSatuan) {
        return res.status(409).json({
          message:
            "Nama satuan bahan sudah ada, tambahkan nama satuan bahan yang lain!",
        });
      }

      const newRequestNamaBahan = await RequestBahans.create({
        jenis_bahan_baru: nama_jenis,
        nama_bahan_baru: nama_bahan,
        nama_satuan_baru: nama_satuan,
        status: "pending",
      });

      if (newRequestNamaBahan) {
        res.status(200).json({
          data: newRequestNamaBahan,
          message: "Request Nama Bahan Baru sudah ditambahkan!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async approveRequestBahan(req, res) {
    try {
      const id = req.params.id;

      const findNewRequestBahan = await RequestBahans.findOne({
        where: {
          id: id,
        },
      });

      if (findNewRequestBahan.status === "approve") {
        return res.status(409).json({
          message: "Mau hack bang?",
        });
      }

      if (!findNewRequestBahan) {
        return res.status(404).json({
          message: "Mau hack bang?",
        });
      }

      const approvedData = await RequestBahans.update(
        {
          status: "approve",
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (approvedData) {
        const addNewJenisBahan = await JenisBahans.create({
          nama_jenis: findNewRequestBahan.jenis_bahan_baru,
        });

        const addNewSatuan = await Satuans.create({
          nama_satuan: findNewRequestBahan.nama_satuan_baru,
        });

        const addNewBahan = await Bahans.create({
          jenis_bahan_id: addNewJenisBahan.id,
          nama_bahan: findNewRequestBahan.nama_bahan_baru,
          satuan_id: addNewSatuan.id,
        });

        res.status(200).json({
          success: true,
          data: addNewBahan,
          message: "Berhasil melakukan approve request bahan baru!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async rejectRequestBahan(req, res) {
    try {
      const id = req.params.id;
  
      const findRequestBahan = await RequestBahans.findOne({
        where: {
          id: id,
        },
      });
  
      if (!findRequestBahan) {
        return res.status(404).json({
          message: "Request bahan tidak ditemukan.",
        });
      }
  
      if (findRequestBahan.status === "reject") {
        return res.status(409).json({
          message: "Request bahan sudah ditolak sebelumnya.",
        });
      }
  
      const rejectedData = await RequestBahans.update(
        {
          status: "reject",
        },
        {
          where: {
            id: id,
          },
        }
      );
  
      if (rejectedData) {
        res.status(200).json({
          success: true,
          message: "Berhasil menolak request bahan.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }  
}

module.exports = PemiliksController;
