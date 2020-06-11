const express = require('express');
const path = require('path');

const drinkRoute = require('./routes/drinking');

const app = express();

app.use(express.json()); //JSON
app.use(express.urlencoded({ extended: false })); //FORM

// Drink API Routes
app.use('/api/drink', drinkRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000,() => { console.log('Server start') })




