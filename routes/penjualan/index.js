const express = require('express');
const router = express.Router();

const penjualanController = require('../../Controllers/penjualan/penjualanController');

// Definisi rute untuk mendapatkan data transaksi
router.get('/data_transaksi', penjualanController.getDataTransaksi);

module.exports = router;