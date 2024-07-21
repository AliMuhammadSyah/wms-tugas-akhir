const express = require('express');
const router = express.Router();
const stokController = require('../controller/StokController');

router.post('/stok', stokController.addStok);
// router.get('/stok', stokController.getStok);
// router.get('/stok/:id', stokController.getstokById);
// router.put('/stok/:id', stokController.updatestok);
// router.delete('/stok/:id', stokController.deletestok);

module.exports = router;
