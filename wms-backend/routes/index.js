const router = require("express").Router();
const userRoutes = require("./users-routes");
const bahanRoutes = require("./bahan-routes");
const jenisBahanRoutes = require("./jenisbahan-routes");
const satuanRoutes = require("./satuan-routes");
const pemilikRoutes = require("./pemilik-routes");
const laporanRoutes = require("./laporan-routes");

router.get("/", (req, res) => {
  res.send("Api is working!");
});

router.get("/api", (req, res) => {
  res.send("Api is working!");
});

router.use("/api", userRoutes);
router.use("/api", bahanRoutes);
router.use("/api", jenisBahanRoutes);
router.use("/api", satuanRoutes);
router.use("/api", pemilikRoutes);
router.use("/api", laporanRoutes);

module.exports = router;
