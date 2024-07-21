const router = require("express").Router();
const JenisBahansController = require("../controller/JenisBahansController");

router.post("/jenis-bahan", JenisBahansController.addJenisBahan);
router.get("/jenis-bahan", JenisBahansController.getJenisBahans);
router.get("/jenis-bahan/:id", JenisBahansController.getJenisBahanById);
router.put("/jenis-bahan/:id", JenisBahansController.updateJenisBahans);
router.delete("/jenis-bahan/:id", JenisBahansController.deleteJenisBahan);

module.exports = router;
