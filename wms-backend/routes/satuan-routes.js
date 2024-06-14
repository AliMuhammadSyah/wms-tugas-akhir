const router = require("express").Router();
const SatuansController = require("../controller/SatuansController");

router.post("/satuan", SatuansController.addSatuan);
router.get("/satuan", SatuansController.getSatuans);
router.get("/satuan/:id", SatuansController.getSatuansById);
router.put("/satuan/:id", SatuansController.updateSatuan);
router.delete("/satuan/:id", SatuansController.deleteSatuan);

module.exports = router;
