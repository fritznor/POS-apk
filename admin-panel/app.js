const express = require('express');
const app = express();
app.use(express.json());

// Routes pour gérer caissiers, produits, stock
app.use('/cashiers', require('./routes/cashiers'));
app.use('/products', require('./routes/products'));
app.use('/stock', require('./routes/stock'));

app.listen(3000, () => {
    console.log('Admin panel running on http://localhost:3000');
});
