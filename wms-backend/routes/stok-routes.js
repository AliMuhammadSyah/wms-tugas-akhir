const router = require("express").Router();
const StokController = require("../controller/StokController");

router.get('/stoks', StokController.getStoks);

module.exports = router;