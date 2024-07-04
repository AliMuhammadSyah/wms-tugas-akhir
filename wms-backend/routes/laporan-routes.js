const router = require("express").Router();
const LaporansController = require("../controller/LaporansController");

router.get("/laporan", LaporansController.getAllLaporan);
router.post("/laporan", LaporansController.addLaporan);
router.get('/laporan/:userId/:pemilikId', LaporansController.getLaporan);

module.exports = router;