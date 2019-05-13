const express = require('express');
const {Cuisines,Receipies} = require('../models')
const cuisineRoute = express.Router();

cuisineRoute.get('/',async(req,res)=>{
  try{
    const allCuisines = await Cuisines.findAll({
      include:[Receipies]
    });
    res.json(allCuisines);
  }catch(e){
    response.status(404).json({ msg: e.status })
  } 
})

cuisineRoute.get('/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const particularCuisine = await Cuisines.findByPk(id,{
      include:[Receipies]
    });
    res.json(particularCuisine);
  }catch(e){
    response.status(404).json({ msg: e.status })
  }
})

module.exports = cuisineRoute;