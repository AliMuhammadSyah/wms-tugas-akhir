const router = require("express").Router();
const LaporanController = require("../controller/LaporanController");

router.get("/laporan", LaporanController.getAllLaporan);

module.exports = router;