const express = require('express');
const router = express.Router();

const drink = require('../Drink');

//Get alll drink
router.get('/',(req,res) => {
  res.json(drink);
})

//Get drink by Id
router.get('/:id',(req,res) => {
  const found = drink.some(drinkById => drinkById.id === parseInt(req.params.id));

  if(found){
    res.json(drink.filter(drinkById => drinkById.id === parseInt(req.params.id)))
  } else{
    res.status(400).json({msg: `No drink with id of ${req.params.id}`})
  }
})

module.exports = router;
