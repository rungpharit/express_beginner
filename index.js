const express = require('express');
const path = require('path');

const drinkRoute = require('./routes/drinking');

const app = express();

// Drink API Routes
app.use('/api/drink', drinkRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000,() => { console.log('Server start') })




