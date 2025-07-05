const express = require('express');
const router = express.Router();

let cashiers = [];

router.get('/', (req, res) => {
    res.json(cashiers);
});

router.post('/', (req, res) => {
    const cashier = req.body;
    cashiers.push(cashier);
    res.status(201).json(cashier);
});

module.exports = router;
