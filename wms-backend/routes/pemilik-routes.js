const router = require("express").Router();
const PemiliksController = require("../controller/PemiliksController");

router.post("/pemilik", PemiliksController.addPemiliks);
router.post("/request/bahan", PemiliksController.requestBahan);
router.get("/pemilik", PemiliksController.getPemiliks);
router.get("/pemilik/:id", PemiliksController.getPemilikById);
router.get("/pemilik/user/:id", PemiliksController.getPemilikByUserId);
router.put("/pemilik/approve/:id", PemiliksController.approveRequestBahan);
router.put("/pemilik/reject/:id", PemiliksController.rejectRequestBahan);

module.exports = router;