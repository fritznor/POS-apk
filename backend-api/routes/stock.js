const express = require('express');
const router = express.Router();

let stock = [];

router.get('/', (req, res) => {
    res.json(stock);
});

router.post('/', (req, res) => {
    const stockItem = req.body;
    stock.push(stockItem);
    res.status(201).json(stockItem);
});

module.exports = router;
