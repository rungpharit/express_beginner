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

//Create drink
router.post('/',(req,res) => {
  const newDrink = {
    id: drink.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  if (!newDrink.name || !newDrink.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  drink.push(newDrink);
  res.json(drink);

})

//Update Member
router.put('/:id',(req,res) => {
  const found = drink.some(drinkById => drinkById.id === parseInt(req.params.id));

  if(found){
    const updDrink = req.body;
    drink.forEach(drinkById => {
      if(drinkById.id === parseInt(req.params.id)){
        drinkById.name = updDrink.name ? updDrink.name : drink.name;
        drinkById.email = updDrink.email ? updDrink.email : drink.email;
        res.json({msg:'drink has been updated', drink:drink})
      }
    })
  }else{
    res.status(400).json({msg:`No drink with id of${req.params.id}`})
  }
});







module.exports = router;


