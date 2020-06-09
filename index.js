const express = require('express');
const path = require('path');
const drink = require('./Drink');

const app = express();

app.get('/api/drink',(req,res) => {
  res.json(drink);
})

app.get('/api/drink/:id',(req,res) => {
  const found = drink.some(drinkById => drinkById.id === parseInt(req.params.id));

  if(found){
    res.json(drink.filter(drinkById => drinkById.id === parseInt(req.params.id)))
  } else{
    res.status(400).json({msg: `No drink with id of ${req.params.id}`})
  }

})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000,() => { console.log('Server start') })


