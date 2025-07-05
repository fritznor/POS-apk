const express = require('express');
const app = express();
app.use(express.json());

app.use('/cashiers', require('./routes/cashiers'));
app.use('/products', require('./routes/products'));
app.use('/stock', require('./routes/stock'));

app.listen(4000, () => {
    console.log('Backend API running on http://localhost:4000');
});
