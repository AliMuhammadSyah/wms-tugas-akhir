const router = require("express").Router();
const BahansController = require("../controller/BahansController");

router.post("/bahan", BahansController.addNamaBahan);
router.get("/bahan", BahansController.getBahans);
router.get("/bahan/:id", BahansController.getBahanById);
router.put("/bahan/:id", BahansController.updateBahan);
router.delete("/bahan/:id", BahansController.deleteBahan);



module.exports = router;
