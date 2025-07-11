const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

app.use('/cashiers', require('./routes/cashiers'));
app.use('/products', require('./routes/products'));
app.use('/stock', require('./routes/stock'));

// Sert index.html à la racine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Admin panel running on http://localhost:3000');
});
