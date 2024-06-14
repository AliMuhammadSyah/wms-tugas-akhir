const router = require("express").Router();
const PemiliksController = require("../controller/PemiliksController");

router.post("/pemilik", PemiliksController.addPemiliks);
router.get("/pemilik", PemiliksController.getPemiliks);
router.get("/pemilik/:id", PemiliksController.getPemilikById);
router.get("/pemilik/user/:id", PemiliksController.getPemilikByUserId);

module.exports = router;